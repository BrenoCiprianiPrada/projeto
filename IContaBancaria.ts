import { Cliente } from "./Cliente";

export interface ContaBancaria{
    saldo : number;
    cliente : Cliente;
    deposito(valor : number) : void;
    saque(valor : number) : void;
    transferencia(valor : number, conta : ContaBancaria) : void;
    verificarSaldo() : number;

}