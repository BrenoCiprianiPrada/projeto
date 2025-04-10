import { Cliente } from "./Cliente";
import { ContaBancaria } from "./IContaBancaria";

export class ContaPoupanca implements ContaBancaria{
    saldo: number;
    cliente : Cliente;
    taxaJuros : number;

    constructor(cliente : Cliente){
        this.saldo = 0;
        this.cliente = cliente;
        this.taxaJuros = 0.008;
            console.log(`não foi possivel criar a conta pois a renda do cliente é menor que 500`);
    };

    deposito(valor : number): void {
        this.saldo += valor;
    }
    
    saque(valor : number): void {
        if(valor <= this.saldo){
            this.saldo -= valor;
        }else{
            console.log(`não há saldo o suficiente`)
        }
    }

    transferencia(valor : number, conta : ContaBancaria): void {
        this.saque(valor);
        conta.deposito(valor);
    }

    verificarSaldo(): number {
        console.log(`conta poupança do cliente: ${this.cliente.nomeCompleto} possui saldo de: ${this.saldo}`);
        return this.saldo;
    }

    calcularTaxa(): void{
        console.log(`conta poupança de ${this.cliente.nomeCompleto} possui taxa de rentabilidade de ${this.taxaJuros}%`)
    }

}