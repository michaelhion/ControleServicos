### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 

FROM node:18.16.0 AS build

WORKDIR /dist/src/app

COPY . .
RUN npm install
RUN npm run build --prod


EXPOSE 80