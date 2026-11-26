import { useState } from "react";
import cities from "./cities.json";

import Input from "./main";


function App() {
 const [city, setCity] = useState("");
const handleChange = (event) => {
  setCity(event.target.value);
};
const handleComplete = () => {
  setCity(filteredCities[0]);
};
const filteredCities = city === ""
  ? []
  : cities.filter(item => item.startsWith(city));
const suggestion = city === "" ? "" : filteredCities[0] || "";
 return (
  <div>
    <Input value={city} handleChange={handleChange}  suggestion={suggestion.slice(city.length)} handleComplete={handleComplete} />
    <p>{city}</p>
   
  </div>
  
);
}

export default App;
