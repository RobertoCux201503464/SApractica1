
FROM node:latest as node
workdir /app
copy . .
run npm install
run npm run build --prod

FROM nginx:alpine
copy --from=node /app/dist/practica1 /usr/share/nginx/html


