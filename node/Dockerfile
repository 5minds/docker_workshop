FROM node:current-alpine3.11

EXPOSE 3000

WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

CMD npm start
