package contact

import (
  "net/http"
  "time"

  . "github.com/gin-gonic/gin"

  "github.com/alex-held/hde/server/pkg/server"
)




func ConfigureStaticWebApp(webappDir string) server.RoutingConfiguration {
  return func(r IRouter) IRouter {
    r.StaticFS("/", Dir(webappDir, true))
    return r
  }
}

func ConfigureContactRoutes() server.RoutingConfiguration {
  return func(r IRouter) IRouter {
    contact := r.Group("/contact")
    contact.POST("/", handleContactFormRequest)
    return r
  }
}

func handleContactFormRequest(c *Context) {
  var form contactForm

  if err := c.ShouldBind(&form); err != nil {
    c.JSON(http.StatusBadRequest, H{"error": err.Error()})
    return
  }


  m := createEmail(ContactRequest{
    Name:    form.Name,
    Mail:    form.Mail,
    Message: form.Message,
  }, defaultRecipient, time.Now())

  if err := sendEmail(m); err != nil {
    c.JSON(http.StatusBadRequest, H{"error": err.Error()})
    return
  }

  c.Status(http.StatusOK)
}
