export interface ContaBancaria{
    saldo : number;
    deposito() : void;
    saque() : void;
    transferencia() : void;
    verificarSaldo() : number;

}