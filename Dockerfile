FROM node:boron

#create app directory

WORKDIR /usr/src/app

#install app dependencies
COPY package.json .
# for npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start" ]
