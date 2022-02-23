import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../UserContext";
import {
  BackgroundImage,
  Error,
  Footer,
  H2,
  InputGroup,
  LoginContainer,
  LoginForm,
  LoginInput,
  Text,
} from "./styles";

export const SignIn = () => {
  const username = useForm();
  const password = useForm();
  const navigate = useNavigate();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit() {
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <LoginContainer>
      <LoginForm>
        <H2>Sign In</H2>
        <InputGroup onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            id="email"
            label="E-mail"
            variant="outlined"
            {...username}
          />
          <LoginInput
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            {...password}
          />
          {error && <Error dangerouslySetInnerHTML={{ __html: error }}></Error>}
          <Footer>
            <Text>
              Don't have a accountt?{" "}
              <span onClick={() => navigate("/login/register")}>Sign Up</span>
            </Text>

            {loading ? (
              <Button
                variant="contained"
                color={"primary"}
                onClick={() => handleSubmit()}
                disabled
              >
                Loading...
              </Button>
            ) : (
              <Button
                variant="contained"
                color={"primary"}
                onClick={() => handleSubmit()}
              >
                Login
              </Button>
            )}
          </Footer>
        </InputGroup>
      </LoginForm>
      <BackgroundImage />
    </LoginContainer>
  );
};
