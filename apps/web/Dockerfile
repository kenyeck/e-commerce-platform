# Build stage
FROM node:20-alpine AS builder
# Install pnpm
RUN npm install -g pnpm
# Set working directory
WORKDIR /monorepo
# Copy root workspace files
COPY pnpm-workspace.yaml .
COPY pnpm-lock.yaml .
COPY package.json .
COPY turbo.json .
# Copy shared packages
COPY packages/ ./packages/
# Copy app files
COPY apps/web/ ./apps/web/
# Install dependencies and build
RUN pnpm install --frozen-lockfile
RUN pnpm run build --filter=./apps/web
# Prune dev dependencies
#RUN pnpm deploy pruned --filter=./apps/web --prod

# Runtime stage
FROM node:20-alpine
# Install tini for signal handling
RUN apk add --no-cache tini
# Set working directory
WORKDIR /app
COPY package.json .
# Copy pruned production app
#COPY --from=builder /monorepo/pruned ./
COPY --from=builder /monorepo ./
# Expose port
EXPOSE 3000
# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
# Use tini as entrypoint for proper signal handling
ENTRYPOINT ["/sbin/tini", "--"]

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app/apps/web
# Start the app with node directly (avoid pnpm)
CMD ["pnpm", "start"]
#CMD [node", "node_modules/next/dist/bin/next", "start"]
