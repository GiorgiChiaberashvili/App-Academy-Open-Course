FROM node:16-alpine

WORKDIR  /app

COPY *.json .

# RUN apt-get update
# RUN apt-get upgrade -y
# RUN DEBIAN_FRONTEND=noninteractive apt-get install -y npm nodejs
# RUN apt-get install -y openssh-server nginx

RUN npm install

EXPOSE 3000

COPY . .

CMD npm start
