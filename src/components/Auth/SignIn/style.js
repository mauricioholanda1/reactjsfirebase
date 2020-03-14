import {styled} from "@material-ui/core/styles";
import {Typography, Card, TextField, Button} from "@material-ui/core";

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

export {MyCard, MyTitle, MyTextField, MyButton};
