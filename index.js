const service = require('./service');

function main() {

    service.getAllCharacters().then(response => {
        results = response.data.results;
        let names = [];
        
        console.time('regular for');
        for(i = 0; i < results.length - 1; i++){ // DUDU - GDSS
            const character = results[i];
            names.push(character.name);
        }
        console.timeEnd('regular for');

        names = [];

        console.time('forin');
        for(result in results){
            const character = result;
            names.push(character.name);
        }
        console.timeEnd('forin');

        names = [];

        console.time('foreach'); //JHON - JVOA
        results.forEach(character => {
            names.push(character.name);
        });
        console.timeEnd('foreach');

        names = [];
        
        console.time('forof')
        for (const character of results) {
            names.push(character.name);
        }

        console.timeEnd('forof');

    })

}

main();


  
  