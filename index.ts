import { Banco } from './Banco';
import { Cliente } from './Cliente';
import { ContaCorrente } from './ContaCorrente';
import { ContaPoupanca } from './ContaPoupanca';

//criando os clientes
const cliente1 = new Cliente("henrique Schlindwein", 1, "SC-PG, Rua Schlindwein 71", "+55 47 98934-4390", 1000);
const cliente2 = new Cliente("bryan moser", 2, "SC-PG, Rua Schlindwein 73", "+55 47 921673587", 400);

//criando o banco
const banco = new Banco();

//criação das contas, uma delas sendo uma conta corrente de um cliente que não tem renda o suficiente para criar a conta
const contapoupanca = new ContaPoupanca(cliente1);
const contacorrente1 = new ContaCorrente(cliente1);
const contacorrente2 = new ContaCorrente(cliente2);

//tentando adicionar as contas no banco, uma delas irá falhar
banco.cadastrarContaPoupanca(contapoupanca);
banco.cadastrarContaCorrente(contacorrente1);
banco.cadastrarContaCorrente(contacorrente2);

console.log(`--------------------------------------------------------------------------------------------`)

//depositando um pouco em cada conta
contapoupanca.deposito(700);
contacorrente1.deposito(900);
contacorrente2.deposito(200);



//teste dos metodos de deposito e saque
contapoupanca.verificarSaldo();
contapoupanca.deposito(500);
contapoupanca.verificarSaldo();
contapoupanca.saque(200);
contapoupanca.verificarSaldo();
contapoupanca.calcularTaxa();

console.log(`--------------------------------------------------------------------------------------------`)


//transferencia da conta corrente 1 para a conta poupanca
contacorrente1.verificarSaldo();
contapoupanca.verificarSaldo();
contacorrente1.transferencia(300, contapoupanca);
contacorrente1.verificarSaldo();
contapoupanca.verificarSaldo();
