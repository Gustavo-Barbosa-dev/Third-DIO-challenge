class heroi {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
            if (this.tipo == "mago"){
                ataque = "magia";
            } else if (this.tipo == "guerreiro"){
                ataque = "espada";
            }else if (this.tipo == "monge"){
                ataque = "artes marciais";
            }else if (this.tipo == "ninja"){
                ataque = "shuriken";
            }
          
    console.log(`O ${this.tipo} atacou usando ${ataque}`);{
        return ataque;
    }
    }
}
const heroi1 = new heroi("Gustavo", 25, "mago", "magia");
  heroi1.atacar();

const heroi2 = new heroi("Gabriel", 25, "guerreiro", "espada");
  heroi2.atacar();

const heroi3 = new heroi("Bruno", 25, "monge", "artes marciais");        
  heroi3.atacar();

const heroi4 = new heroi("Rubio", 25, "ninja", "shuriken");
  heroi4.atacar();