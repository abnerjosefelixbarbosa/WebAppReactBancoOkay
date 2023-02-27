

export const clienteValidation = (cliente: any) => {

  let cpfValido = () => {
    const cpf = cliente.cpf.replace(/[^\d]+/g, "");

    if (cpf === "") return 1;

    return 0;
  }

  const senhaValida = () => {
    const senhaCliente = cliente.senhaCliente;

    if (senhaCliente === "") return 1 

    return 0
  }

  return {    
    cpfValido,
    senhaValida
  };
};
