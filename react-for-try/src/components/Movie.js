import React from "react";
import ProTypes from "prop-types";
function Movie({ coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.proTypes = {
  coverImage: ProTypes.string.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;
