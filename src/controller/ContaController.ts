import { Cliente } from "../model/Cliente";
import { ContaService } from "../service/ContaService";

export const ContaController = () => {
  const cs = ContaService();  

  const login = async (cliente: Cliente) => {
    if (cliente.cpf === "") {
      return "cpf invalido";
    } else if (cliente.senhaCliente === "") {
      return "senha vazia";  
    } else {
      return await cs.login(cliente);
    }
  };

  return {
    login
  };
};
