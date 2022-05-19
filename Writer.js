const fs = require('fs');
const util = require('util');

class Writer{
    constructor(){
        this.whiter = util.promisify(fs.writeFile);
    }

    async Write (filename, data){
        try{
            return await this.whiter(filename, data);
        }catch(e){
            return undefined;
        }
     
    }
}

module.exports = Writer;