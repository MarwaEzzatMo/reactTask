FROM  node:13.12.0-alpine
WORKDIR /app


# install app dependencies
COPY package*.json ./

RUN npm install --force

ENV test=test
# add app
COPY . ./

# start app
CMD ["npm", "start"]
