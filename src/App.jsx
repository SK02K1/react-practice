import "./styles.css";
import { useState } from "react";
import { tedTalksDataBase } from "./database/tedxData";
import { Hero } from "./component/Hero";
import { GenreButtons } from "./component/GenreButtons";
import { List } from "./component/List";

export default function App() {
  const [genre, setGenre] = useState("Design");
  const genreBtnClickHandler = (selectedGenre) => {
    setGenre(selectedGenre);
  };
  return (
    <div className="App">
      <Hero />
      <GenreButtons db={tedTalksDataBase} handler={genreBtnClickHandler} />
      <List db={tedTalksDataBase} genre={genre} />
    </div>
  );
}
