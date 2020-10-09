package server

import (
	"fmt"
	"net/http"
	
	"github.com/gin-gonic/gin"
	"github.com/rs/cors"
)

type ServerBuilder interface {
	WithRoutingConfiguration(configuration RoutingConfiguration) ServerBuilder
	WithHandler(f HandlerConfiguration) ServerBuilder
	UsePort(port int) ServerBuilder
	Build() *http.Server
}

type serverBuilder struct {
	routingConfigurations []RoutingConfiguration
	handlers              []HandlerConfiguration
	port                  int
}

func (s *serverBuilder) WithRoutingConfiguration(configuration RoutingConfiguration) ServerBuilder {
	s.routingConfigurations = append(s.routingConfigurations, configuration)
	return s
}

func (s *serverBuilder) WithHandler(f HandlerConfiguration) ServerBuilder {
	s.handlers = append(s.handlers, f)
	return s
}

type HandlerConfiguration func(http.Handler) http.Handler

func (s *serverBuilder) UsePort(port int) ServerBuilder {
	s.port = port
	return s
}

func (s *serverBuilder) Build() *http.Server {
	r := NewRouter(s.routingConfigurations...)
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Works!")
	})
	r.GET("/hello/:name", func(c *gin.Context) {
		name :=	c.Param("name")
		c.String(200, fmt.Sprintf("Hello, %s!\nHow are you/s", name))
	})
	
	
	var handler http.Handler = r

	for _, handlerWrapper := range s.handlers {
		handler = handlerWrapper(handler)
	}

	srv := http.Server{
		Handler: handler,
		Addr:     fmt.Sprintf(":%d", s.port),
	}


	return &srv
}

func NewServerBuilder() *serverBuilder {
	return &serverBuilder{
		routingConfigurations: []RoutingConfiguration{},
		handlers:              []HandlerConfiguration{},
		port:                  8000,
	}
}

func WithCorsHandler(allowedOrigins []string) HandlerConfiguration {
	return func(h http.Handler) http.Handler {
		c := cors.New(cors.Options{
			AllowedOrigins: allowedOrigins,
		})
		return c.Handler(h)
	}
}
