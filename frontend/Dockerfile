FROM node:current-alpine3.11 AS builder

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /src/build /usr/share/nginx/html

COPY --from=builder /src/index.html /usr/share/nginx/html
