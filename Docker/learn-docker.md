
# Commands

1. Create Dockerfile
```bash
FROM ubuntu
USER amit
WORKDIR /home
ENV HOME /home
SHELL ["/bin/bash", "-c"]
COPY . .
RUN apt-get update && apt-get install build-essential -y
RUN make
CMD ["./hello.exe"]
EXPOSE 5000

```

2. Build Dockerfile Image
```bash
docker build -t manthanwar/ubuntu:cpp .
```

4. Tag the image
```bash
docker tag manthanwar/ubuntu manthanwar/ubuntu:cpp
```

# Copy files from host and container
```bash
docker cp hello.cpp 4afe19e02a12:/home/hello.cpp
docker cp . e77163741840:/home/
```

# Copy files from container to host
```bash
docker cp container:/home/hello.cpp ./host/
```


# Run bash in a container
```bash
docker run -it manthanwar/ubuntu:cpp bash

docker run -p 127.0.0.1:5000 --name cpp --hostname cpp.com -v /d/GitHub/Docker/Ubuntu:/home/ -it manthanwar/ubuntu:cpp bash  \
--restart=always \

docker rename my_container my_new_container

docker exec -it manthanwar/ubuntu:cpp /bin/bash

```

# Execute command on running container
```bash
 docker exec -it container bash
```


# Find versin of windows
```bash
systeminfo 
```

# Find versin of linux
```bash
cat /etc/os-release
```

# Find Linux kernel version:
```bash
uname -r
```

# To remove (prune) all stopped Docker containers at once. use the -f flag (short for force)
```bash
docker container prune
docker container prune -f
```


# Check hostname
```bash
docker exec container hostname
docker exec -it container bash
```


# Commit changes to container
```bash
docker commit containerID manthanwar/ubuntu:cpp
docker commit e77163741840 manthanwar/ubuntu:cpp
docker commit cpp manthanwar/ubuntu:dev
docker commit dev manthanwar/ubuntu:cpp-or-tools

```
docker rename 3895c4c983d1 dev
docker rename dazzling_banach dev

# Remove Image
```bash
docker rmi imagename or image id
```



# run command to build Dockerfileapt-get update




# Push to dockerhub
# docker push manthanwar/ubuntu:cpp

# docker run manthanwar/ubuntu:cpp


# docker exec -it manthanwar/ubuntu:cpp /bin/bash

# docker run \
#  --mount type=bind,source="$(pwd)",target=/home \
#  -p 8080:8080 \
#  -d manthanwar/ubuntu:cpp 

# RUN bash
# docker run -it manthanwar/ubuntu:cpp bash



docker cp hello.cpp 4afe19e02a12:/home/hello.cpp


docker cp . 4afe19e02a12:/home/


# run command to build Dockerfileapt-get update
# docker build -t ubuntu:cpp .

# Tag the image
# docker tag ubuntu:cpp manthanwar/ubuntu:cpp

# Push to dockerhub
# docker push manthanwar/ubuntu:cpp

# docker run manthanwar/ubuntu:cpp


# docker exec -it manthanwar/ubuntu:cpp /bin/bash

# docker run \
#  --mount type=bind,source="$(pwd)",target=/home \
#  -p 8080:8080 \
#  -d manthanwar/ubuntu:cpp 

# RUN bash
# docker run -it manthanwar/ubuntu:cpp bash