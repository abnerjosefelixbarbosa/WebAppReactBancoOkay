import { Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useIMask } from "react-imask";
import { Cliente } from './../model/Cliente';

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
  const refCpf = MascaraCpf()
  const refSenhaCliente = MascaraSenhaCliente()

  const login = (e: any) => {
    e.preventDefault()
    const cliente: Cliente = {
      cpf: refCpf.current?.value,
      senhaCliente: refSenhaCliente.current?.value,
    }

    console.log(cliente)
  }

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
              variant="filled"
              type={"text"}
              inputRef={refCpf}
            />
          </div>
          <br />
          <div>
            <TextField
              fullWidth
              label="senha"
              id="senha"
              size="small"
              variant="filled"
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
