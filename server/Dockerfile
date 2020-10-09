FROM golang as builder
WORKDIR /go/src
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o server .

FROM alpine
LABEL org.label-schema.name="held-der-elektrik-server"
LABEL org.label-schema.url="www.held-der-elektrik.de"
LABEL org.label-schema.vcs-url="e.g. https://github.com/alex-held/hde"

ENV PORT=8000
EXPOSE 8000
WORKDIR /root/
COPY --from=builder /go/src/server .
ENTRYPOINT ["./server"]

