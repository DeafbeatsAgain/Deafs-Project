FROM node:latest
WORKDIR /etc/deafbot
COPY package*.json ./

RUN npm install
COPY . .
ENTRYPOINT [ "node", "src/deaf.js"]