# VIDEO-DOWNLOADER-API

**Visão Geral do Projeto**
Está é uma simples Api com o intuito de importar uma wrapper do youtube-dl para retornar as informações de um vídeo para ser exibido no frontend e a url do vídeo, para o cliente poder efetuar o download.

## Pre-Requisito: 

**Node.Js**

## Instalar as dependências utilizando o comando 

```
npm install
```

### Iniciar o servidor de desenvolvimento
```
npm start
Ou
nodemon server.js
```

### API



**/getinfo/**

Retorna as informações de um vídeo
Parâmetros: url= {URL do vídeo}

**/geturl/**

Retorna a url da raiz do vídeo
Parâmetros: url= {URL} & quality=(best, worst ou bestaudio)
