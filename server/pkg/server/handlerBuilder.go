package server

import (
  "context"
  "fmt"
  "net/http"
  "strings"

  "github.com/gin-gonic/gin"
  "github.com/rs/cors"
)

type RoutingConfiguration func(e gin.IRouter) gin.IRouter

func BodyFormatter(p gin.LogFormatterParams) string {
  msg := fmt.Sprintf(
    "[GIN %d:%d:%d] %3s %2s | %4s | (%#4v µs)",
    p.TimeStamp.Hour(),
    p.TimeStamp.Minute(),
    p.TimeStamp.Second(),
    p.MethodColor()+p.Method+p.ResetColor(),
    p.Path,
    p.StatusCodeColor()+fmt.Sprintf("%d", p.StatusCode)+p.ResetColor(),
    p.Latency.Microseconds(),
  )
  if p.BodySize > 0 {
    var sb strings.Builder
    reqClone := p.Request.Clone(context.Background())
    _ = reqClone.Write(&sb)
    body := sb.String()
    lines := strings.Split(body, "\n")[10:]
    body2 := strings.Join(lines, "\n")
    msg = fmt.Sprintf("%s (%d bytes)%s\n", msg, p.BodySize, body2)
  }
  return msg
}

func NewRouter(configuration ...RoutingConfiguration) *gin.Engine {
  // r := gin.Default()
  r := gin.New()
  gin.ForceConsoleColor()
  gin.EnableJsonDecoderUseNumber()
  gin.EnableJsonDecoderDisallowUnknownFields()
  logger := gin.LoggerWithConfig(gin.LoggerConfig{
    Formatter: BodyFormatter,
    Output:    gin.DefaultWriter,
  })
  r.Use(logger, gin.Recovery())

  api := r.Group("/api")
  for _, config := range configuration {
    config(api)
  }
  return r
}

func NewHandlerBuilder(root http.Handler) *handlerBuilder {
  return &handlerBuilder{root: root, handlers: []func(http.Handler) http.Handler{}}
}

func NewServer(handler http.Handler) *http.Server {
  return &http.Server{
    Handler: handler,
    Addr:    ":" + "4205",
  }
}

type handlerBuilder struct {
  root     http.Handler
  handlers []func(http.Handler) http.Handler
}

func (b *handlerBuilder) Build() http.Handler {
  h := b.root
  for _, handler := range b.handlers {
    h = handler(h)
  }
  return h
}

func (b *handlerBuilder) WithCors(allowedOrigins []string) *handlerBuilder {
  c := cors.New(cors.Options{
    AllowedOrigins: allowedOrigins,
  })
  b.handlers = append(b.handlers, func(h http.Handler) http.Handler {
    return c.Handler(h)
  })
  return b
}
