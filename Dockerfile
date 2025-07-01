FROM node:20-slim

RUN npm install -g @angular/cli

WORKDIR /app

# Копируем package.json, lock-файл и все workspace-папки сразу
COPY package*.json ./
COPY shell ./shell
COPY remote1 ./remote1
COPY remote2 ./remote2
COPY shared-lib ./shared-lib

# Теперь запускаем npm install, чтобы он увидел весь workspace
RUN npm install

EXPOSE 4200 4201 4202

CMD ["ng", "serve"]
