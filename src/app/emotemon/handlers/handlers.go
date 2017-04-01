package handlers

import (
	"net/http"
	"github.com/gorilla/mux"
	// "github.com/gorilla/handlers"
	// "os"
	)

func GetHandlers() http.Handler {
	apiRouter := mux.NewRouter()



	staticRouter := mux.NewRouter()
	staticRouter.NotFoundHandler = apiRouter
	
	staticRouter.PathPrefix("/css/").Handler(http.FileServer(http.Dir("./static/")))
	staticRouter.PathPrefix("/js/").Handler(http.FileServer(http.Dir("./static/")))
	staticRouter.PathPrefix("/html/").Handler(http.FileServer(http.Dir("./static/")))
	// staticRouter.PathPrefix("/jsb/").Handler(http.FileServer(http.Dir("./static/")))
	// staticRouter.PathPrefix("/jsbc/").Handler(http.FileServer(http.Dir("./static/")))
	// staticRouter.PathPrefix("/vendor/").Handler(http.FileServer(http.Dir("./static/")))
	// staticRouter.PathPrefix("/images/").Handler(http.FileServer(http.Dir("./static/")))

	return staticRouter
}