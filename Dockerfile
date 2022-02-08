FROM node:16-alpine

WORKDIR /ui

EXPOSE 4000

# This is a suboptimal way to build a Lerna monorepo Docker container as it doesn't leverage Docker layer caching.
# It is advisable not to be used for local development.
COPY ["package.json", "package-lock.json", "./"]

COPY packages/backend-core/package.json ./packages/backend-core/
COPY packages/clerk-js/package.json ./packages/clerk-js/
COPY packages/edge/package.json ./packages/edge/
COPY packages/expo/package.json ./packages/expo/
COPY packages/nextjs/package.json ./packages/nextjs/
COPY packages/sdk-node/package.json ./packages/sdk-node/
COPY packages/shared/package.json ./packages/shared/
COPY packages/types/package.json ./packages/types/

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "dev"]
