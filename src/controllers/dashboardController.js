var dashboardModel = require("../models/dashboardModel");

async function buscar(req, res) {
    var dados = req.params;
    try {
        let resposta = await dashboardModel.buscarDashboard(dados)
        if (resposta.length > 0) {
            res.status(200).json(resposta);
        } else {
            res.status(204).json([]);
        }
    } catch (e) {
        res.status(500).json(erro.sqlMessage);
    }
}
async function criar(req, res) {
    let dados  = req.body.valor;
      dashboardModel.insertDashboard(dados)

    
    /*
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    dashboardModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
      */
}

module.exports = {
    buscar,
    criar
}