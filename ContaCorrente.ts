import { Cliente } from "./Cliente";
import { ContaBancaria } from "./IContaBancaria";

export class ContaCorrente implements ContaBancaria{
    saldo: number;
    cliente : Cliente;
    chequeEspecial : number;


    constructor(cliente : Cliente){
        this.saldo = 0;
        this.chequeEspecial = 100;
        this.cliente = cliente;
            console.log(`não foi possivel criar a conta pois a renda do cliente é menor que 500`);
    };

    deposito(valor : number): void {
        this.saldo += valor;
    };
    
    saque(valor : number): void {
        if(valor <= this.saldo){
            this.saldo -= valor;
        }else if(this.chequeEspecial > 0 && valor <= this.chequeEspecial){
            this.chequeEspecial -= valor;
        }
        else{
            console.log(`não há saldo o suficiente`)
        }
    };

    transferencia(valor : number, conta : ContaBancaria): void {
        this.saque(valor);
        conta.deposito(valor);
        console.log(`Foi realizado transferencia no valor de: ${valor} reais`)
    };

    verificarSaldo(): number {
        console.log(`conta corrente do cliente: ${this.cliente.nomeCompleto} possui saldo de: ${this.saldo}`);
        return this.saldo;
    };

}