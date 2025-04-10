import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { ContaBancaria } from "./IContaBancaria";

export class Banco{
    private contas : ContaBancaria[] = [];
    
    constructor(){
        this.contas = [];
    }
    cadastrarContaCorrente(conta : ContaCorrente) : void{
        if(conta.cliente.rendaSalarial >= 500){
        this.contas.push(conta);
        console.log(`conta do cliente: ${conta.cliente.nomeCompleto} cadastrada com sucesso`);
        }else{
            console.log(`conta do cliente: ${conta.cliente.nomeCompleto} não foi cadastrada pois renda salarial é menor que o minimo`);
        };
    };

    cadastrarContaPoupanca(conta : ContaPoupanca) : void{
        this.contas.push(conta);
        console.log(`conta do cliente: ${conta.cliente.nomeCompleto} cadastrada com sucesso`);
    };
};