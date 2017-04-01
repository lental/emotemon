PROJECT_ROOT := $(shell pwd)
PROJECT_NAME := emotemon 
IMG_NAME := img
GOPATH := $(PROJECT_ROOT)
GOBIN := $(GOPATH)/bin
export GOPATH
export GOBIN


local: babel
	go install
	bin/$(PROJECT_NAME)
			
get:
	go get

babel:
	./node_modules/.bin/babel static/jsb/ -d static/jsbc

watch-babel:
	fswatch static/jsb | xargs -n1 -I{} ./update-babel.sh