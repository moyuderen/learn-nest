# 基于node18的镜像
FROM node:18

# 指定工作目录
WORKDIR /app

# 把package.json复制容器，
# 先COPY package.json文件，利用了分层特性，package.json文件没变时，跳过执行npm i, 直接使用缓存
COPY package.json .

# 安装依赖
RUN npm i 

# 把代码复制到容器
COPY . .

# 打包构建代码
RUN npm run build

# 暴露端口号
EXPOSE 3000

# 启动时执行的脚步
CMD [ "node", "./dist/main.js" ]

