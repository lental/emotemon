package main

import (
	"fmt"
	"log"
	"net/http"
	ol "app/emotemon/logger"
	"app/emotemon/handlers"
)


func main() {
	log.Println("Hello");
	addr := fmt.Sprintf(":%d", 3000)

	appHandlers := handlers.GetHandlers()

	server := &http.Server{
		Addr:    addr,
		Handler: appHandlers,
	}

	ol.Log("Now listening on " + addr)
	log.Fatalf(server.ListenAndServe().Error())
}
