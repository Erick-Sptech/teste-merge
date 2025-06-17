var database = require("../database/config");

function buscarDashboard(dados) {
    console.log(dados)
    var instrucaoSql = `
    select * from empresa as e
        inner join lotes as l on l.fk_empresa = e.id
            inner join medicao as m on m.fk_lotes = l.id 
            ${dados.empresa ? (`where e.id=${dados.empresa}`) : ""}
            ${dados.lote ? (dados.empresa ? (` and l.id=${dados.lote}`) : (`where l.id=${dados.lote}`)) : ""}
            ${dados.medicao ?
            (dados.empresa || dados.lote ?
                (` and m.id=${dados.medicao} `)
                :
                (`where m.id = ${dados.medicao}`)
            )
            : ""}
    `
    return database.executar(instrucaoSql);
}
function insertDashboard(dados) {
    console.log(dados,"ta no model de dashboard")
    var instrucaoSql = `

    INSERT INTO medida(lm35_temperatura, fk_aquario) VALUES ('${dados}',1)

    `
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDashboard,
    insertDashboard
}
