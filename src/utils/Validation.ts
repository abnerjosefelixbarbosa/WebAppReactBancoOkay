export const cpfValidation = (cpf: any) => {
  cpf = cpf.replace(/[^\d]+/g, "");

  if (cpf == "") return false;
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

  return true;
};

export const senhaClienteValidation = (senha: any) => {
  if (senha === "") return false;

  return true;
};
