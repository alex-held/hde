#!/bin/sh

gin --port 8000 --path . --bin ./dist/gin-bin  --build ./server/ --i --all &

