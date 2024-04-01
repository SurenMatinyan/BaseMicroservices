FROM node:20.9 AS base

ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY . .

RUN npm ci && \
    npm run build

EXPOSE 5000

CMD ["node", "dist/main"]