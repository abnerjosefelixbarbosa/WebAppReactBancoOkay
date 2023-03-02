import axios from "axios";
import { Cliente } from "../model/Cliente";
import { Conta } from "../model/Conta";

export const ContaService = () => {  
  let conta: Conta;

  const login = async (cliente: Cliente) => {
    const HOST = "localhost:8080";
    const URL = `http://${HOST}/conta/logarpelocpfsenhadocliente/${cliente.cpf}/${cliente.senhaCliente}`;

    const resultado = await axios
      .get(URL)
      .then((value) => value.data)
      .catch((err) => err.response.data);

    conta = { ...resultado }
    return conta;
  };

  return {
    login
  }
};
