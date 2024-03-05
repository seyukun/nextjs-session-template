FROM mariadb:latest

COPY ./docker.init.sql /docker-entrypoint-initdb.d/init.sql

# WORKDIR /app
# COPY . /app/

# RUN corepack yarn

# CMD bash -c "corepack yarn prisma migrate dev --name prod || corepack yarn build && corepack yarn start"