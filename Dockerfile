FROM node:6.9
WORKDIR /usr/src/app
EXPOSE 3000
ENV PORT 3000
COPY index.js ./index.js
CMD [ "node", "index.js" ]



