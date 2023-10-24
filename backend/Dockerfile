FROM node:alpine

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json .
COPY package-lock.json .

RUN npm install --silent

COPY . .

CMD ["npm", "run", "dev"]
