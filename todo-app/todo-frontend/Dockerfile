#Stage 1: setup the frontend
FROM node:24 AS setup
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENV VITE_BACKEND_URL=http://localhost:3001/

#Stage 2: test
FROM setup AS test
WORKDIR /usr/src/app
RUN npm run test

#Stage 3: build
FROM test AS build
WORKDIR /usr/src/app
RUN npm run build

RUN npm install -g serve
CMD ["serve", "-n", "dist"]