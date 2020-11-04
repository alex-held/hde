### STAGE 1: Build ###
FROM node:alpine AS build
ARG GMAP_KEY
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN echo $(sed "s/#{MAPS_API_KEY}#/${GMAP_KEY}/" src/environments/environment.prod.ts) > src/environments/environment.prod.ts
ENTRYPOINT cat src/environments/environment.prod.ts
RUN npm run build --prod


### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/hde /usr/share/nginx/html
