let amigo = {nome:`José`,
    peso:85.4,
    sexo:`M`,
    engordar(p=0){
        console.log(`Engordoo`)
        this.peso += p
    }}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)