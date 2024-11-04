FROM node:20.15-alpine
EXPOSE 3000
# Встановити робочий каталог 
WORKDIR /app
# Скопіюйте файли package.json і package-lock.json 
COPY package*.json ./
# Встановити залежності 
RUN npm install
# Скопіюйте файли програми 
COPY . .
# Збілдити проєкт in folder build
RUN npm run build

CMD [ "npm","start" ]
