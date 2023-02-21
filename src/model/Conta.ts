import { Cliente } from "./Cliente";

export interface Conta {
    id?: number;
	agencia?: string;
	conta?: string;
	saldo?: number;
	senhaConta?: string;
	cliente?: Cliente;
}