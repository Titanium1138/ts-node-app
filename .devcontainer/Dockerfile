FROM node:15-buster-slim

RUN apt-get update \
 && export DEBIAN_FRONTEND=noninteractive \
 && apt-get -y install --no-install-recommends \
       openssh-server \
       git \
 && apt-get -y clean \
 && rm -rf /var/lib/apt/lists/*

RUN npm update -g npm \
 && npm update -g yarn
