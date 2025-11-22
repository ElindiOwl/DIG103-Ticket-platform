FROM node:20-alpine

WORKDIR /app
COPY . /app
COPY package*.json /app
RUN npm ci

ARG VITE_API_PROD_URL
ENV VITE_API_PROD_URL=$VITE_API_PROD_URL

RUN npm run build
EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]