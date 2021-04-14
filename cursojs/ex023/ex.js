let amigo = {
nome:'Andre', 
sexo:'M',
idade:41,
peso:96,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(1)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos de idade e pesa ${amigo.peso}`)

