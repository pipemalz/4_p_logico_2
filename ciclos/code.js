let number = 0

while (number < 10) {
    number ++
    console.log(number + " While")
}

do {
    number ++
    console.log(number + " Dowhile")
} while (number < 20);

for (let index = 0; index < 10; index++) {
    number ++
    console.log(number + " For")    
}

let hola
let input  
try {
    document.write(asdf)
} catch (error) {
    hola = error
    document.write(`
        <input type="text" id="as">
    `)
    input = document.getElementById('as')
    input.value = error
}