import { ICliente } from "./ICliente";

export class Cliente implements ICliente{
    nomeCompleto: String;
    id: number;
    endereco: String;
    telefone: String;
    rendaSalarial: number;

    constructor(nomeCompleto: String,id: number,endereco: String,telefone: String, rendaSalarial: number){
        this.nomeCompleto = nomeCompleto;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.rendaSalarial = rendaSalarial;
    }
}