FROM node:latest

WORKDIR /app
COPY ../../* /app

RUN corepack yarn
RUN corepack yarn build

CMD bash -c "corepack yarn prisma migrate dev --name prod && corepack yarn start"