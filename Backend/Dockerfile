FROM node:16.14

# Atualiza a lista de pacotes e instala o lsof
RUN apt-get update && apt-get install -y lsof

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos do aplicativo para o diretório de trabalho no container
COPY . .

# Instala as dependências do aplicativo
RUN npm install

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]