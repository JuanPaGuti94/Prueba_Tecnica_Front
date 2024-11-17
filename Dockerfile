FROM node:16-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules

COPY --from=build /app /app

EXPOSE 3000 3001

CMD ["yarn", "dev"]

