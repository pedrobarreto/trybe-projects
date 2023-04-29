# utilizei o material do course e esses 2 sites para me ajudar a entender e fazer o Dockerfile
#https://blog.codeexpertslearning.com.br/dockerizando-uma-aplica%C3%A7%C3%A3o-react-js-f6a22e93bc5d
#https://docs.docker.com/get-started/02_our_app/

FROM node:14-alpine

WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY node_modules.tar.gz ./
COPY . .
EXPOSE 3000

CMD ["npm", "start"]