FROM tawanorg/ubuntu:latest

ENV NODE_VERSION 14

RUN nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

RUN npm install -g npm@8.9.0 yarn

WORKDIR /home/docker