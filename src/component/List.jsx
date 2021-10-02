export const List = ({ db, genre }) => {
  return (
    <div>
      <h2>{genre}</h2>
      {db[genre].map((talkInfo) => {
        return (
          <ul className="card">
            <li style={{ fontStyle: "italic" }}>Speaker: {talkInfo.speaker}</li>
            <li>Title: {talkInfo.title}</li>
            <li>
              <span>Posted</span> {talkInfo.postedOn}
            </li>
          </ul>
        );
      })}
    </div>
  );
};
