import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {compose} from "recompose";
import {SignUpLink} from "../SignUp";
import {PasswordForgetLink} from "../PasswordForget";
import {withFirebase} from "../../Firebase";
import * as ROUTES from "../../../constants/routes";
import {styled} from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  CardActions,
  Card,
  Container,
  TextField,
  Button
} from "@material-ui/core";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }
  onSubmit = event => {
    const {email, password} = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE});
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({error});
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {email, password, error} = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <Container style={{display: "flex", justifyContent: "center"}}>
        <MyCard variant="outlined">
          <CardContent>
            <MyTitle>SignIn</MyTitle>

            <form style={{display: "grid"}} onSubmit={this.onSubmit}>
              <MyTextField
                name="email"
                label="Email"
                type="text"
                placeholder="Email Address"
                variant="outlined"
                value={email}
                onChange={this.onChange}
              />
              <MyTextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
              />
              <MyButton variant="contained" disabled={isInvalid} type="submit">
                Sign In
              </MyButton>
              {error && <p>{error.message}</p>}
            </form>
          </CardContent>

          <CardActions>
            <PasswordForgetLink />
            <SignUpLink />
          </CardActions>
        </MyCard>
      </Container>
    );
  }
}

const MyCard = styled(Card)({
  maxWidth: 400
});

const MyTitle = styled(Typography)({
  fontSize: 30,
  textAlign: "center",
  padding: 10
});

const MyTextField = styled(TextField)({
  height: 50,
  padding: 10,
  margin: 5
});

const MyButton = styled(Button)({});

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);
export default SignInForm;
