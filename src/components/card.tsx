import React from "react";
import "./card.css";

interface Props {
  id: number;
  name: string;
  image: string;
}

function CardComponent({ id, name, image }: Props) {
  return (
    <div className="card" key={id}>
      <h1>Hola, soy {name}!</h1>
      <Image src={image} />
    </div>
  );
}

function Image(props: string) {
  return <img {...props} />;
}
export default CardComponent;
