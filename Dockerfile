FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV NEXT_DISABLE_TURBOPACK=1
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3002
EXPOSE 3002

CMD ["npm", "start", "--", "-p", "3002"]
