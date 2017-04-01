PROJECT_ROOT := $(shell pwd)
PROJECT_NAME := emotemon 
IMG_NAME := img
GOPATH := $(PROJECT_ROOT)
GOBIN := $(GOPATH)/bin
export GOPATH
export GOBIN


local:
	go install
	bin/$(PROJECT_NAME)
			
