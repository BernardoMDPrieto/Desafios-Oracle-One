alert("Boas vindas ao nosso site!")
var nome = "Lua"
var idade = 25
var numeroDeVendas = 50
var saldoDisponivel = 1000
var mensagemDeErro = "Erro!Preencha todos os campos"
alert(mensagemDeErro)
nome = prompt("Informe o seu nome!")
idade = parseInt(prompt("Informe sua idade"))
if(idade > 17){
    alert("Pode tirar habilitação!")
}else{
    alert("Não pode tirar habilitação!")
}