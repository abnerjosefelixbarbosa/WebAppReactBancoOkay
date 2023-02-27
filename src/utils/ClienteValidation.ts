

export const clienteValidation = (cliente: any) => {

  let cpfValido = () => {
    const cpf = cliente.cpf.replace(/[^\d]+/g, "");

    if (cpf === "") return 1;
    /*
    if (cpf.length != 11) return false;
    if (cpf == "00000000000") return false;
    if (cpf == "11111111111") return false;
    if (cpf == "22222222222") return false;
    if (cpf == "33333333333") return false;
    if (cpf == "44444444444") return false;
    if (cpf == "55555555555") return false;
    if (cpf == "66666666666") return false;
    if (cpf == "77777777777") return false;
    if (cpf == "88888888888") return false;
    if (cpf == "99999999999") return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (soma % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (soma % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    */

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
