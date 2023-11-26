# Se construye una imagen basada en node de la version 14
FROM node:14

# Se establece el directorio de trabajo
WORKDIR /usr/src/app

# Se copia el archivo package.json en el directorio root del docker
COPY package*.json ./

# Se ejecuta el comando npm install 
RUN npm install

# Se copian los archivos de la carpeta actual dentro del docker
COPY . .

# Se exponen los puertos 3000
EXPOSE 3000

# Se ejecuta el app.js con nodejs
CMD ["node", "app.js"]

