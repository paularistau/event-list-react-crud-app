import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_POST } from "../../../services";
import { AlertProps, IUser } from "../../../types/types";
import {
  AlertMessage,
  BackgroundImage,
  Footer,
  H2,
  InputGroup,
  InputGroupInLine,
  LoginContainer,
  LoginForm,
  LoginInput,
  Text,
} from "./styles";

export const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<AlertProps>();

  let navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  const CreateUser = async () => {
    const body: IUser = {
      username: username,
      email: email,
      password: password,
    };

    const { url, options } = USER_POST(body);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      setShowAlert({
        active: true,
        text: "User created successfully",
        type: "success",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      setShowAlert({
        active: true,
        text: json.message,
        type: "error",
      });
      setTimeout(() => {
        setShowAlert({ active: false });
      }, 3000);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <H2>Sign Up</H2>
        <InputGroup>
          <InputGroupInLine>
            <LoginInput
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              onChange={({ target }) => setUsername(target.value)}
            />
          </InputGroupInLine>
          <LoginInput
            id="email"
            label="E-mail"
            variant="outlined"
            onChange={({ target }) => setEmail(target.value)}
          />
          <LoginInput
            id="password"
            label="Password"
            variant="outlined"
            onChange={({ target }) => setPassword(target.value)}
          />
        </InputGroup>

        <Footer>
          <Text>
            Already registered?{" "}
            <span onClick={() => handleClick()}>Sign In</span>
          </Text>

          <Button
            variant="contained"
            color={"primary"}
            onClick={() => CreateUser()}
          >
            Register
          </Button>
        </Footer>
      </LoginForm>
      <BackgroundImage />
      {showAlert?.active && (
        <AlertMessage severity={showAlert.type}>{showAlert.text}</AlertMessage>
      )}
    </LoginContainer>
  );
};
