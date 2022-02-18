import { Button } from "@material-ui/core";
import React from "react";
import {
  BackgroundImage,
  LoginContainer,
  LoginForm,
  Text,
  H2,
  LoginInput,
  InputGroupInLine,
  InputGroup,
  Footer,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/sign-in");
  }

  return (
    <LoginContainer>
      <LoginForm>
        <H2>Sign Up</H2>
        <InputGroup>
          <InputGroupInLine>
            <LoginInput
              id="first-name"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <LoginInput
              id="last-name"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </InputGroupInLine>
          <LoginInput id="email" label="E-mail" variant="outlined" />
          <LoginInput id="password" label="Password" variant="outlined" />
        </InputGroup>

        <Footer>
          <Text>
            Already registered?{" "}
            <span onClick={() => handleClick()}>Sign In</span>
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
