FROM node:14-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

ENV HOST 0.0.0.0

RUN npm run build

EXPOSE 3000

CMD npm start
