import axios from "axios";
import { Cliente } from "./../model/Cliente";

export const clienteService = (cliente: Cliente) => {
  return {
    procurarCpfSenhaCliente: async () => {
      return await axios.get(
        `http://localhost:8080/cliente/procurarporcpfesenhadocliente/${cliente.cpf}/${cliente.senhaCliente}`
      ).then(value => value.data)
      .catch(err => err.response.data);      
    },
  };
};
