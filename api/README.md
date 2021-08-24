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
```

### API

#### /getinfo/
Retorna as informações de um vídeo
Parâmetros: url= {URL do vídeo}
EX: localhost:3000/getinfo/?url=https://www.youtube.com/watch?v=_DQN5jt3Fl8&ab_channel=L%C3%BAcieNaraGuimar%C3%A3es&

#### /geturl/
Retorna a url da raiz do vídeo
Parâmetros: url= {URL} & quality=(best, worst ou bestaudio)
EX: localhost:3000/getinfo/?url=https://www.youtube.com/watch?v=_DQN5jt3Fl8&ab_channel=L%C3%BAcieNaraGuimar%C3%A3es&&quality=best
