FROM node:24
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

RUN npm install -g nodemon

ENV DEBUG=playground:*
  
USER node

CMD ["npm", "run", "dev"]