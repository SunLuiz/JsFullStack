const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
//mongoose.connect('mongodb://oministack:oministack@oministack-shard-00-00-sroyr.mongodb.net:27017,oministack-shard-00-01-sroyr.mongodb.net:27017,oministack-shard-00-02-sroyr.mongodb.net:27017/semana09?ssl=true&replicaSet=oministack-shard-0&authSource=admin&retryWrites=true&w=majority',{
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// });
mongoose.connect('mongodb://localhost:27017/oministack',
{useNewUrlParser:true});
//metodos de rotas:
//GET: pegar informacao //POST: inserir info
//PUT: atualizar info //DELETE: apagar info
app.use(cors());
app.use(express.json());
  //req.query: acessar query params(filtros)
  //req.params : acessar route params(edicao e deletar)
  //req.bor: acessar corpo da requisição(criacao e edicao)
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(27017);
