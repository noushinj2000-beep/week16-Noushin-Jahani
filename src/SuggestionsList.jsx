const SuggestionsList = ({ suggestions }) => {
  return (
    <ul>
      {suggestions.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  );
};

export default SuggestionsList;