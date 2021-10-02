export const GenreButtons = ({ db, handler }) => {
  return (
    <div>
      {Object.keys(db).map((genre) => {
        return (
          <button
            className="btn-genre"
            onClick={() => handler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
};
