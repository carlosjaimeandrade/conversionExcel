
class Processor{

    static process(data){
        let dataFormat = data.split("\r\n")
        let row = [];

        dataFormat.forEach(format=>{
            row.push(format.split(";"))
        })

        return row
    }

}

module.exports = Processor;