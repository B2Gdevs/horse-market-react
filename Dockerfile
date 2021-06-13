FROM node:14.17.0 as react-build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

COPY . /app

CMD yarn start