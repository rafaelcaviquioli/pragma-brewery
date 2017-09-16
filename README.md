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

Up the application

    $ docker-compose up webapp

Now the app is running on http://localhost:3000

## Run unit tests

    $ NODE_ENV=test docker-compose run --rm webapp yarn test

## Run acceptance tests

    $ NODE_ENV=test docker-compose run --rm webapp-e2e

Can be passed args to codeceptjs adding a new env var to the container `-e CODECEPT_ARGS="...args"`
