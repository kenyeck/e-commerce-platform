# syntax=docker/dockerfile:1.4

# if you're doing anything beyond your local machine, please pin this to a specific version at https://hub.docker.com/_/node/
# Use Node.js LTS with pnpm
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /code

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Install pnpm globally
RUN npm install -g pnpm

# Install TypeScript (npx tsc)
RUN npm install -g typescript

# Copy only lockfiles and package.json first for caching
COPY package.json ./
COPY tsconfig.json ./
COPY src/ ./src/
#COPY pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Build auth-service
RUN pnpm build

# default to port 4000 for node
ARG PORT=4000
ENV PORT=$PORT
EXPOSE $PORT

# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK --interval=30s \
CMD curl -s -I http://localhost:${PORT}/api/health | head -n 1 | grep 200 || exit 1

# if you want to use npm start instead, then use `docker run --init in production`
# so that signals are passed properly. Note the code in index.js is needed to catch Docker signals
# using node here is still more graceful stopping then npm with --init afaik
# I still can't come up with a good production way to run with npm and graceful shutdown
CMD [ "node", "./dist/index.js" ]
