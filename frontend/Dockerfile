### STAGE 1: Build Frontend ###
FROM node:alpine AS NG_BUILD
ARG GMAP_KEY
WORKDIR /usr/src/app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend .
RUN echo $(sed "s/#{MAPS_API_KEY}#/${GMAP_KEY}/" src/environments/environment.prod.ts) > src/environments/environment.prod.ts
RUN NG_BUILD_DIFFERENTIAL_FULL=false npm run build:prod

### STAGE 2: Build Backend ###
FROM golang:1.15 AS GO_BUILD
WORKDIR /go/src
COPY server .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o server .


### STAGE 3: Run Application ###
FROM alpine
ENV PORT=80
EXPOSE 80
ENV WEBAPP_DIR=/webapp

LABEL org.label-schema.name="held-der-elektrik-server"
LABEL org.label-schema.url="www.held-der-elektrik.de"
LABEL org.label-schema.vcs-url="e.g. https://github.com/alex-held/hde"

WORKDIR /webapp
COPY --from=NG_BUILD /usr/src/app/dist/hde .
RUN ls -a /webapp

WORKDIR /root/
COPY --from=GO_BUILD /go/src/server ./
CMD /root/server
