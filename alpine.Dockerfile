# build-stage
# alpine 的，这是一个 linux 发行版
FROM node:18.0-alpine3.14 as build-stage

WORKDIR /app

COPY package.json .

RUN npm i 

# 先把所有文件复制
COPY . .

# 完成构建
RUN npm run build

# production stage
# alpine 的，这是一个 linux 发行版
FROM node:18.0-alpine3.14 as production-stage

# 把build-stage阶段的构建产物，需要用到的复制到production-stage的工作目录
# 多个阶段构建最后只会生成一个目录
COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm i --production

EXPOSE 3000

# 注意main文件已经在/app的根目录
CMD [ "node", "/app/main.js" ]

