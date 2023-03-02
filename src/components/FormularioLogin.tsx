import { Alert, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useIMask } from "react-imask";
import { ContaController } from "../controller/ContaController";
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
  const error_1 = document.getElementById("error_1");
  const error_2 = document.getElementById("error_2");
  const error_3 = document.getElementById("error_3");
  const error_4 = document.getElementById("error_4");
  const cc = ContaController();

  const login = (e: any) => {
    e.preventDefault();
    //949.612.154-30
    //481228

    cc.login(cliente).then((value) => {
      if (value === "cpf invalido") {
        error_1?.classList.remove("hidden");
        fechar();
      } else if (value === "senha vazia") {
        error_2?.classList.remove("hidden");
        fechar();
      } else if (value.erro === "cpf invalido") {
        error_1?.classList.remove("hidden");
        fechar();
      } else if (value.erro === "cliente não encontrado") {
        error_3?.classList.remove("hidden");
        fechar();
      } else if (value.erro === "erro no servidor") {
        error_4?.classList.remove("hidden");
        fechar();
      } else {
        console.log(value);
      }
    });
  };

  const fechar = () => {
    setTimeout(() => {
      error_1?.classList.add("hidden");
      error_2?.classList.add("hidden");
      error_3?.classList.add("hidden");
      error_4?.classList.add("hidden");
    }, 2000);
  };

  return (
    <>
      <Container className="container_login" maxWidth="xs">
        <div id="error_3" className="hidden">
          <Alert severity="error">cliente não encontrado</Alert>
        </div>
        <div id="error_4" className="hidden">
          <Alert severity="error">erro no servidor</Alert>
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
            <Alert severity="error">cpf invalido</Alert>
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
            <Alert severity="error">senha vazia</Alert>
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
