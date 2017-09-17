# PragmaBrewery

Pragma code challenge

## System requirements

  * docker `curl -sSL https://get.docker.com/ | sh`
  * docker-compose `sudo apt-get install docker-compose`

## Get this running

Build all services

    $ docker-compose pull
    $ docker-compose build

Install dependencies

    $ docker-compose run --rm webapp yarn install
    $ docker-compose run --rm api yarn install
    $ docker-compose run --rm thermometer-mock yarn install

Up the application

    $ docker-compose up webapp api

Now the app is running on http://localhost:3000

To emulate how it works with thermometers

    $ docker-compose up webapp api thermometer-mock

## Webapp

### Run unit tests

    $ docker-compose run --rm webapp yarn test

### Run acceptance tests

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

### Building for production

Destroy all containers before to ensure that will run on test env

    $ docker-compose down
    $ NODE_ENV=production docker-compose run --rm webapp yarn build

## API

### Run unit tests

    $ docker-compose run --rm api yarn test
