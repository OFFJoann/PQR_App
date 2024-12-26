FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY ./ca-bundle.txt /etc/nginx/ssl/ca-bundle.txt
COPY ./private-key.txt /etc/nginx/ssl/private-key.txt

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 7022

CMD ["nginx", "-g", "daemon off;"]
