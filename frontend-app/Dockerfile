FROM node:8

WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]