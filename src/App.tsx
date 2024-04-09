import "./styles.css";
import useCharacter from "./hooks/useCharacter";
import CardComponent from "./components/card";

export default function App() {
  //custom hooks
  const [requestData, loadingData, errorData] = useCharacter();

  if (errorData) {
    <p>Error al cargar los datos</p>;
  }

  return loadingData ? (
    <p>Cargando...</p>
  ) : (
    <>
      {requestData.map((character) => (
        <CardComponent
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </>
  );
}
