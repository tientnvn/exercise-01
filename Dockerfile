FROM node:10

RUN mkdir -p /opt/app

# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app

RUN yarn build
