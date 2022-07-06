import { useParams } from "react-router-dom";
import { Container } from "./styles";

export default function Caracteristics() {
  const { name } = useParams();

  return (
    <Container>
      Description Page
      <h1>{name}</h1>
    </Container>
  );
}
