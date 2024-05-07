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

# 全局安装pm2
RUN npm i pm2 -g

EXPOSE 3000

# 修改启动命令
CMD [ "pm2-runtime", "/app/main.js" ]

