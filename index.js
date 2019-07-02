const service = require('./service');

function main() {

    service.getAllCharacters().then(response => {
        results = response.data.results;
        let names = [];
        

        //COMPARING REGULAR FOR
        console.time('regular for');
        for(i = 0; i < results.length - 1; i++){
            const character = results[i];
            names.push(character.name);
        }
        console.timeEnd('regular for');

        names = [];

        //COMPARING FOR IN
        console.time('forin');
        for(result in results){
            const character = result;
            names.push(character.name);
        }
        console.timeEnd('forin');

        names = [];

        //COMPARING FOR EACH
        console.time('foreach');
        results.forEach(character => {
            names.push(character.name);
        });
        console.timeEnd('foreach');

        names = [];

        //COMPARING FOR OF
        console.time('forof')
        for (const character of results) {
            names.push(character.name);
        }

        console.timeEnd('forof');

    })

}

main();


  
  