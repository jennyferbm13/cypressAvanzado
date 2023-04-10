FROM cypress/base:16

RUN mkdir /app
WORKDIR /app

COPY ./app