import { Alert, Button, Container, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useIMask } from "react-imask";
import { clienteService } from "../service/ClienteSercice";
import { clienteValidation } from "../utils/ClienteValidation";
import { Cliente } from "./../model/Cliente";

const MascaraSenhaCliente = () => {
  const [optsSenhaCliente, setOptsSenhaCliente] = useState({
    mask: String("000000"),
  });
  const {
    ref,
    maskRef,
    value,
    setValue,
    unmaskedValue,
    setUnmaskedValue,
    typedValue,
    setTypedValue,
  } = useIMask(optsSenhaCliente);

  return ref;
};

const MascaraCpf = () => {
  const [optsCpf, setOptsSenhaCliente] = useState({
    mask: String("000.000.000-00"),
  });
  const {
    ref,
    maskRef,
    value,
    setValue,
    unmaskedValue,
    setUnmaskedValue,
    typedValue,
    setTypedValue,
  } = useIMask(optsCpf);

  return ref;
};

export const FormularioLogin = () => {
  const refCpf = MascaraCpf();
  const refSenhaCliente = MascaraSenhaCliente();
  let cliente: Cliente = {
    cpf: refCpf.current?.value,
    senhaCliente: refSenhaCliente.current?.value,
  };
  const rClienteValidation = clienteValidation(cliente);
  const rClienteService = clienteService(cliente);
  const error_1 = document.getElementById("error_1");
  const error_2 = document.getElementById("error_2");
  const error_3 = document.getElementById("error_3");

  const login = (e: any) => {
    e.preventDefault();
    const rCpfValido = rClienteValidation.cpfValido();
    const rSenhaValida = rClienteValidation.senhaValida();
    //949.612.154-30
    //481228

    if (rCpfValido === 1) {
      error_1?.classList.remove("hidden");
    } else {
      error_1?.classList.add("hidden");
    }

    if (rSenhaValida === 1) {
      error_2?.classList.remove("hidden");
    } else {
      error_2?.classList.add("hidden");
      rClienteService.procurarCpfSenhaCliente().then((data) => {
        cliente.id = data.id;
        cliente.nome = data.nome;
        cliente.rg = data.rg;
        cliente.email = data.email;
        cliente.dataNascimento = data.dataNascimento;
        cliente.numero = data.numero;
        cliente.cep = data.cep;
        cliente.logradouro = data.logradouro;
        cliente.bairro = data.bairro;
        cliente.cidade = data.cidade;
        cliente.estado = data.estado;
        cliente.erros = data.erros;
        if (cliente.id === null) {
          error_3?.classList.remove("hidden");
        } else {
          error_3?.classList.add("hidden");
        }
      });
    }

    console.log(cliente);
  };

  return (
    <>
      <Container className="container_login" maxWidth="xs">
        <div id="error_3" className="hidden">
          <Alert severity="error">Cliente não encontrado</Alert>
        </div>
        <div className="center titulo">
          <h1>Login</h1>
        </div>
        <form onSubmit={login}>
          <div>
            <TextField
              fullWidth
              label="cpf"
              id="cpf"
              size="small"
              variant="standard"
              type={"text"}
              inputRef={refCpf}
            />
          </div>
          <div id="error_1" className="hidden">
            <Alert severity="error">CPF invalido</Alert>
          </div>
          <div>
            <TextField
              fullWidth
              label="senha do cliente"
              id="senha"
              size="small"
              variant="standard"
              type={"text"}
              inputRef={refSenhaCliente}
            />
          </div>
          <div id="error_2" className="hidden">
            <Alert severity="error">Senha invalido</Alert>
          </div>
          <br />
          <div>
            <Button type="submit" variant="contained" fullWidth>
              Logar
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};
