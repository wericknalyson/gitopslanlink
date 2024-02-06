FROM node:16.20.2-alpine

WORKDIR /app

COPY ./server .

RUN npm install
RUN echo "server"

EXPOSE 3000

CMD [ "node", "." ]
