FROM node:22
RUN mkdir -p /src/app
WORKDIR /src/app
COPY ./svc_frontend/package.json /src/app/package.json
RUN npm install

COPY ./svc_frontend/. /src/app
EXPOSE 4200

CMD [ "npm", "start" ]