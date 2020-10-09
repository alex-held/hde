FROM golang as builder
WORKDIR /go/src
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o server .

FROM alpine
ENV PORT=8000
EXPOSE 8000
WORKDIR /root/
COPY --from=builder /go/src/server .
ENTRYPOINT ["./server"]

