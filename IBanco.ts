import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { ContaBancaria } from "./IContaBancaria";

export interface IBanco{
    contas : ContaBancaria[];
    cadastrarContaCorrente(conta : ContaCorrente) : void;
    cadastrarContaPoupanca(conta : ContaPoupanca) : void;
};