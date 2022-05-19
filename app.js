const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

async function main(){

    const leitor = new Reader();

    const dados = await leitor.Read("./users.csv")

    const dadosProcessados = Processor.process(dados)

    const usuarios = new Table(dadosProcessados)

}


main()