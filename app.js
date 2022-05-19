const Reader = require('./Reader');

async function main(){

    const leitor = new Reader();
    const dados = await leitor.Read("./users.csv")

}


main()