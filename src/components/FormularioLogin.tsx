import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const FormularioLogin = () => {
  const [cpf, setCPF] = useState(String);
  const [senhaCliente, setSenhaCliente] = useState(String);

  const login = (e: any) => {
    e.preventDefault();
    console.log(cpf, senhaCliente);
  };

  return (
    <>
      <Container maxWidth='xs'>
        <form onSubmit={login}>
          <div>
            <label htmlFor="cpf">
                CPF:
            </label>
            <TextField
              fullWidth
              value={cpf}
              onChange={(e) => setCPF(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="senha_cliente">
                Senha Do Cliente:
            </label>
            <TextField
              fullWidth
              value={senhaCliente}
              onChange={(e) => setSenhaCliente(e.target.value)}
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
