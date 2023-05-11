# Steps

1. Create directory `mkdir hello-docker`

2. Create app.js

3. Create Dockerfile with content

```
FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js
```

```
FROM alpine
RUN apk update && apk add bash
WORKDIR /usr/src/app
RUN apk add nodejs-current
RUN apk add nodejs-npm
RUN npm install pm2 -g
COPY process.yaml .
CMD pm2 start process.yaml --no-daemon --log-date-format 'DD-MM 
HH:mm:ss.SSS'
```

```
FROM alpine
RUN apk update && apk add bash
WORKDIR /usr/src/app
RUN apk add nodejs-current
RUN apk add nodejs-npm
RUN npm install pm2 -g
COPY . .
CMD pm2 start app.js
```

4. Build docker image by running command

 ```
docker build -t node-hello-docker .
 ```

5. Check list of images `docker images`

6. Run image as container and --remove upon exit

```
docker run -it --name amit node-hello-docker
docker run -it --rm --name amit node-hello-docker
```
 
7. Remove all exited containers

```
docker ps -a
docker ps -a -f status=exited -q
docker rm $(docker ps -a -f status=exited -q)
```

docker run -it --entrypoint /bin/sh <image-name> -s

docker run -it --entrypoint /bin/sh node-hello-docker -s

docker run -it node-hello-docker -s

docker start  `docker ps -a -q --filter "name=amit"`



# Nodejs + mongodb + mongo-express

[You Tube](https://www.youtube.com/watch?v=3c-iBn73dDE)


## Create Network
```
docker network create mongo-network
```

## Run mongodb

```
docker run -d -p 27017:27017 \
--name mongodb \
--network mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=mongopassword \
mongo
```

## Check Logs
```
docker logs mongodb
```

## Run mongo-express

    


```
docker run -d -it \
    -p 8081:8081 \
    --network mongo-network \
    --name mongo-express \
    -e ME_CONFIG_MONGODB_SERVER=mongodb \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=mongopassword \
    -e ME_CONFIG_BASICAUTH_USERNAME="mongoexpressuser" \
    -e ME_CONFIG_BASICAUTH_PASSWORD="mongoexpresspassword" \
    -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" \
    mongo-express
```