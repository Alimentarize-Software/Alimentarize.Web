# # Usa uma imagem base do Node.js
# FROM node:18-alpine AS build

# # Define o diretório de trabalho dentro do contêiner
# WORKDIR /app

# # Copia os arquivos necessários para o contêiner
# COPY package.json package-lock.json /app/

# # Instala as dependências do projeto
# RUN npm install

# # Copia o restante dos arquivos para o contêiner
# COPY . /app/

# # Compila o projeto Angular para produção
# RUN npm run build

# # Segunda fase do build, com imagem nginx para servir a aplicação
# FROM nginx:alpine

# # Copia os arquivos compilados do projeto Angular para o diretório de nginx
# COPY --from=build /app/dist/alimentarize.web /usr/share/nginx/html

# # Expõe a porta 80 para o exterior
# EXPOSE 80

# # Comando para iniciar o nginx quando o contêiner for iniciado
# CMD ["nginx", "-g", "daemon off;"]

# Usa uma imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para o contêiner
COPY package.json package-lock.json /app/

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos para o contêiner
COPY . /app/

# Expõe a porta 4200 para o exterior (porta padrão usada pelo ng serve)
EXPOSE 4200

# Comando para iniciar o ng serve quando o contêiner for iniciado
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--disable-host-check"]
