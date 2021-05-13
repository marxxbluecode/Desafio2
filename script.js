var idade = 19
var humanidade = true
var mes_versario = 12
var name = 'Rodrigo'
var surname = 'Vasconcelos'

// 1
if (idade > 18) {
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}
// 2
if ((idade > 18) && (humanidade = true)) {
    console.log('Você é humano e maior de idade')
}else if((idade <= 18) && (humanidade = true)){
    console.log('Você é humano e menor de idade')
}else if((idade > 18) && (humanidade = false)){
    console.log('Você não é humano mas é maior de idade')
}else if((idade <= 18) && (humanidade = false)){
    console.log('Você não é humano mas é menor de idade')
}
// 3
if (mes_versario == 1 ) {
    console.log('Parabéns seu aniversário é no primeiro  mês do ano!')
} else if(mes_versario == 12){
    console.log('Parabéns seu aniversário é no ultimo mês do ano!')
} else{
    console.log('Mais uma ano de vida né?')
}
// 4
if (name.search('R') == 0 ){
    console.log('Parabéns, seu nome começa com R!')
}else{
    console.log('Infelizmente seu nome não começa com R.')
}
// 5
if (surname.length > 6){
    console.log('Seu sobrenome é maior do que a média.')
}else if (name.search('E') == 0){
    console.log('Parabéns seu nome começa com E!')
}