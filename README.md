# Desafio Testes E2E - Outsera

- [Pré-requisitos](#pré-requisitos)  
- [Instalação](#instalação)  
- [Execução de testes](#execução-de-testes)  
- [Estrutura do projeto](#estrutura-do-projeto)  
- [Relatórios](#relatórios)  
- [Observações adicionais](#observações-adicionais)

## Pré-requisitos
Antes de rodar o projeto é necessário ter instalado:
- Node.js (download em https://nodejs.org/pt)
- Git (download em https://git-scm.com/downloads)
- Android Studio (download em https://developer.android.com/studio?hl=pt-br)
- Java JDK (download em https://www.oracle.com/br/java/technologies/downloads/)

---

## Instalação
Clone este repositório. Abra o git na máquina em uma pasta de desejada e execute o comando
```bash
git clone https://github.com/jeferQA/outsera_appium_challenge.git
```
Entre no diretório do projeto
```bash
cd outsera_appium_challenge
```
Instale as dependências do projeto, execute o comando
```bash
npm install
```
### Configurações
- Criar variável de ambiente JAVA_HOME e colocar o path da pasta "/bin" do Java SDK
- Criar variável de ambiente ANDROID_HOME e colocar o path da pasta do android sdk
- No Android Studio, criar um device virtual com o nome "Pixel 9"

## Execução de testes
- Executar o device virtual criado no Android Studio
- Executar o appium server, comando:
```bash
appium -p 4725
```
- No projeto, executar o comando:
```bash
npx wdio
```

---
## Estrutura do projeto

outsera_appium_challenge/
<br>│ ├── app/ # apk do aplicativo de teste
<br>│ ├── test/ # Saída em JSON gerada pelo preprocessor
<br>│ │ ├── pageobjects/ # estrura no padrão page objects, organizado e seprarando o mapeamento dos objetos de teste
<br>│ │ ├── specs/ # estrutra de especificação dos testes
<br>├── wdio.conf.js # Especificações de execução e configuração dos testes
<br>├── package.json # Dependências e scripts npm
<br>└── README.md

---
## Relatórios

O relatório esta sendo gerado pela bibloteca <b>Spec</b> e é possível visualizar no consele após as execuções do testes. Abaixo um exemplo:

## Observações adicionais
- Todos os comandos devem ser executados no terminal dentro da raiz do projeto (diretório onde está o package.json).
Exemplo no Windows PowerShell
```bash
cd outsera_appium_challenge
npm install
appium -p 4725
npx wdio # em um novo terminal
```
