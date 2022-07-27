import knex from "knex";

export class Turma {
  public id: string;
  public nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  // public latir = () :void => {
  //     console.log(`Au Au, meu nome é ${this.nome}, au au!`)
  // }

  // public comer = (quantidade: number) :void => {
  //     const novoPeso = this.peso + quantidade
  //     console.log(`Estou comendo, au au! E meu peso agora é ${novoPeso}`)
  // }
}

// abaixo anotações de como fazer o endpoit instanciado na classe

// corpo da função post abaixo

// const { id, nome } = req.body; // isso é a instancia da classe

// const turma = new Turma(id, nome);
// knex.insert(turma); // no insert eu vou colocar a instancia da classe
