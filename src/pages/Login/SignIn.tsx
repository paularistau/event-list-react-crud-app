import { Button } from "@material-ui/core";
import React from "react";
import {
  BackgroundImage,
  LoginContainer,
  LoginForm,
  Text,
  H2,
  LoginInput,
  InputGroup,
  Footer,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/sign-up");
  }
  return (
    <LoginContainer>
      <LoginForm>
        <H2>Sign In</H2>
        <InputGroup>
          <LoginInput id="email" label="E-mail" variant="outlined" />
          <LoginInput id="password" label="Password" variant="outlined" />
        </InputGroup>

        <Footer>
          <Text>
            Don't have a accountt?{" "}
            <span onClick={() => handleClick()}>Sign Up</span>
          </Text>

          <Button variant="contained" color={"primary"}>
            Login
          </Button>
        </Footer>
      </LoginForm>
      <BackgroundImage />
    </LoginContainer>
  );
};
