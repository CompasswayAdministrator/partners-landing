FROM node:20-alpine AS builder

WORKDIR /app

ARG VITE_APP_ENV
ARG VITE_BASE_API_URL

ENV VITE_APP_ENV=$VITE_APP_ENV
ENV VITE_BASE_API_URL=$VITE_BASE_API_URL

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
