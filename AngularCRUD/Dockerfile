FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app/

EXPOSE 4200

CMD ["npm", "start"]