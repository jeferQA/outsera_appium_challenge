# outsera_appium_challenge

# Preparação de ambiente
## Instalações
- Instalar Java JDK
- Instalar Android Studio
- Instalar Node.js

## Configurações
- Criar variável de ambiente JAVA_HOME e colocar o path da pasta "/bin" do Java SDK
- Criar variável de ambiente ANDROID_HOME e colocar o path da pasta do android sdk
- No Android Studio, criar um device virtual com o nome "Pixel 9"

# Instalação Appium
- Na pasta do projeto, executar o comando "npm i", para instalar as dependencias do projeto

## Executar os testes, passo a passo
- Executar o device virtual criado no Android Studio
- Executar o appium server, comando "appium -p 4725"
- No projeto, executar o comando "npx wdio"
