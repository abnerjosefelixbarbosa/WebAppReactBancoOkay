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

  const login = (e: any) => {
    e.preventDefault();

    if (!cpfValidation(refCpf.current?.value)) {
      let mensagem: any = document.getElementById("mensagem_cpf");
      mensagem.innerHTML = "cpf invalido";
      document.getElementById("error_cpf")?.classList.remove("esconder");
      setTimeout(() => {        
        document.getElementById("error_cpf")?.classList.add("esconder");
      }, 3000)
    }
    if (!senhaClienteValidation(refSenhaCliente.current?.value))
      console.log("senha invalido");
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
          <div id="error_cpf" className="esconder">
            <Alert severity="error" id="id_error_cpf">
              <span id="mensagem_cpf"></span>
            </Alert>
          </div>
          <div>
            <TextField
              fullWidth
              label="senha"
              id="senha"
              size="small"
              variant="standard"
              type={"text"}
              inputRef={refSenhaCliente}
            />
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
