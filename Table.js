class Table{
    constructor(arr){
        this.header = arr[0];
        this.rows = arr.slice(1, arr.length);
    }

    // é obrigado ter retorno
    get RowCount(){
        return this.rows.length
    }

    get ColumnCount(){
        return this.headers.length
    }
}

module.exports = Table