import { FormCreatedUser } from "../FormCreateUser";
import { Container } from "./style";

const RegisterUser = () => {
  return (
    <Container>
      <div className="content">
        <h1>Cadastro</h1>
        <FormCreatedUser />
      </div>
    </Container>
  );
};

export default RegisterUser;
