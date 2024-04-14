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
