FROM node:16.0.0-alpine


RUN mkdir -p /app/client
WORKDIR /app/client


COPY package.json /app/client
COPY package-lock.json /app/client
# COPY .env /app/client


RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent


COPY . /app/client


CMD ["npm", "run", "start"]
