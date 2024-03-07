# Usa uma imagem base do Node.js
FROM node:14-alpine as build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para o contêiner
COPY package.json package-lock.json /app/

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos para o contêiner
COPY . /app/

# Compila o projeto Angular para produção
RUN npm run build -- --prod

# Segunda fase do build, com imagem nginx para servir a aplicação
FROM nginx:alpine

# Copia os arquivos compilados do projeto Angular para o diretório de nginx
COPY --from=build /app/dist/<nome_do_projeto> /usr/share/nginx/html

# Expõe a porta 80 para o exterior
EXPOSE 80

# Comando para iniciar o nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]
