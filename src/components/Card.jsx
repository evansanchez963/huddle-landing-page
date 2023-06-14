import { StyledCard } from "./styles/Card.styled";

export default function Card({ item }) {
  const { id, title, body, image } = item;

  return (
    <StyledCard
      layout={id % 2 === 0 && "row-reverse"}
      float={id % 2 === 0 && "none"}
    >
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt=""></img>
      </div>
    </StyledCard>
  );
}
