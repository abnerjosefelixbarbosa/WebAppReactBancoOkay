import { Alert, Button, Container, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useIMask } from "react-imask";
import { cpfValidation, senhaClienteValidation } from "../utils/Validation";
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
  const error_cpf = document.getElementById("error_cpf");
  const error_senha = document.getElementById("error_senha");
  const rCpfValidation = cpfValidation(refCpf.current?.value);
  const rSenhaClienteValidation = senhaClienteValidation(
    refSenhaCliente.current?.value
  );

  const login = (e: any) => {
    e.preventDefault();

    if (!rCpfValidation) error_cpf?.classList.remove("hidden");
    else error_cpf?.classList.add("hidden");
    if (!rSenhaClienteValidation) error_senha?.classList.remove("hidden");
    else error_senha?.classList.add("hidden");
  };

  return (
    <>
      <Container className="container_login" maxWidth="xs">
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
          <div id="error_cpf" className="hidden">
            <Alert severity="error">CPF invalido.</Alert>
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
          <div id="error_senha" className="hidden">
            <Alert severity="error">Senha invalida.</Alert>
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
