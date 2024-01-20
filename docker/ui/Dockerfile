FROM node:20-alpine

RUN npm install -g npm@10.3.0
# Copy startup script
COPY ./docker/ui/start.sh /usr/local/bin/start
RUN chmod u+x /usr/local/bin/start

USER node

WORKDIR /var/www/html

EXPOSE 5173

ENTRYPOINT [ "sh" ]
CMD ["/usr/local/bin/start"]
