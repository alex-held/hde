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
	
	server := server.NewServerBuilder().
		WithHandler(cors.AllowAll().Handler).
		WithRoutingConfiguration(contact.ConfigureContactRoutes()).
		UsePort(port).
		Build()
	
	log.Fatal(server.ListenAndServe())
}
