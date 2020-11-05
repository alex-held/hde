package main

import (
	"log"
	"os"
	"strconv"
	
	"github.com/rs/cors"
	
	"github.com/alex-held/hde/server/pkg/contact"
	"github.com/alex-held/hde/server/pkg/server"
)

func main() {
	
	portEnv := os.Getenv("PORT")
	port, err := strconv.Atoi(portEnv)
	if err != nil {
		port = 8000
	}
	
	webappDirEnv := os.Getenv("WEBAPP_DIR")
	if webappDirEnv == "" {
		webappDirEnv = "/usr/share/nginx/html"
	}
	
	s := server.NewServerBuilder().
		WithHandler(cors.AllowAll().Handler).
		WithRoutingConfiguration(contact.ConfigureContactRoutes()).
		WithRoutingConfiguration(contact.ConfigureStaticWebApp(webappDirEnv)).
		UsePort(port).
		Build()
	
	log.Fatal(s.ListenAndServe())
}

