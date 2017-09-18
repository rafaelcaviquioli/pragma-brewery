# PragmaBrewery

Pragma code challenge

## How it works

### Assumptions

* Baz's truck is always loaded with six containers, each one are set to load a kind of beer
* It's possible to have a local network and an server on his truck or have internet connection
* It's possible to have a tablet on the truck's panel

### Baz's journey

* Baz loads his truck with all beers on the right containers
* Baz looks at the tablet on truck's panel and check that all container are on the right temperature
* Baz are driving to Sidney in an very hot day
* Baz arrives on Sidney and an notification pops up on the tablet
* Baz looks at tablet and realize that one of the containers are out of the temperature range
* Baz stops the truck and goes to the container and increase the container's power to lower the temperature
* Baz wait for container be on the right temperature
* Baz keeps delivering

### Possible improvements

If Baz wants add more containers to the truck, it's possible, all we need do is create a CRUD of containers,
and load the application with this containers. The solution are using a container identifier to make it easy to do.

## System architecture

### Core concepts

The solution is separated in services, each service is totally isolated from each other. All services are put together
using `docker-compose`

* `api` - API, this expose an HTTP server to the thermometer sends the temperature. It also expose an Websocket server to
the `webapp` listing to temperature updates
* `webapp` - User UI, this opens an Websocket on API and waiting for any temperature update
* `webapp-e2e` - Runs acceptance and e2e tests for the `webapp`
* `thermometer-mock` - Simulates the containers' thermometers
* `selenium-server` - Selenium server to run e2e tests

### webapp core concepts

* This was built using React, Redux and Webpack
* All code are located at `webapp/src`, and all tests are located at `webapp/spec`
* All components are located at `webapp/src/components`, and a component has to be simple, just a view layer
* All state changes, and all business rules are located at `webapp/src/state`
* Files are organized by domain, not by stereotype

### api core concepts

* This was built using NodeJS, Hapi and Nes
* All code are located at `api/src`, and all tests are located at `api/spec`
* The server configuration are located at `api/src/server`
* All API's resources are located at `api/src/resources`
* Files are organized by domain, not by stereotype

### webapp-e2e core concepts

* This was built using codeceptjs
* All tests are located at `webapp-e2e/features`
* Acceptance or e2e tests can be done here

### thermometer-mock core concepts

* This was built using NodeJS
* Every 10 seconds it sends an request to the api with a random temperature for each container

## Get this running

### System requirements

  * docker `curl -sSL https://get.docker.com/ | sh`
  * docker-compose `sudo apt-get install docker-compose`

### Building all services

    $ docker-compose pull
    $ docker-compose build

### Installing dependencies

    $ docker-compose run --rm webapp yarn install
    $ docker-compose run --rm api yarn install
    $ docker-compose run --rm thermometer-mock yarn install

### Running the application

    $ docker-compose up webapp api

Now the app is running on http://localhost:3000

To emulate how it works with thermometers

    $ docker-compose up webapp api thermometer-mock

## Webapp commands

### Running unit tests

    $ docker-compose run --rm webapp yarn test

### Running acceptance tests

Destroy all containers before to ensure that will run on test env

    $ docker-compose down
    $ NODE_ENV=test docker-compose run --rm webapp-e2e

To debug

    $ docker-compose down
    $ docker-compose up selenium-server
    $ # open new console
    $ vncviewer localhost:5900 # the password is `secret`
    $ # open new console
    $ NODE_ENV=test docker-compose run --rm webapp-e2e

Any codeceptjs arg can be passed as an env var to the container `-e CODECEPT_ARGS="...args"`

    $ NODE_ENV=test docker-compose run --rm -e CODECEPT_ARGS="--steps --debug" webapp-e2e

## API commands

### Running unit tests

    $ docker-compose run --rm api yarn test
