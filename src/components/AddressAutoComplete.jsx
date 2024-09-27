import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const AddressAutocomplete = ({ onSelect }) => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (address) {
        try {
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=AIzaSyCRCdFdQt1evJjD86nQLRJRqGEHFucGQtY`
          );
          const data = await response.json();

          // Check if predictions exist and are an array
          if (data.predictions && Array.isArray(data.predictions)) {
            setSuggestions(data.predictions);
          } else {
            setSuggestions([]); // Reset suggestions if not valid
          }
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]); // Reset suggestions on error
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [address]);

  const handleSelect = (description) => {
    setAddress(description);
    onSelect(description); // Call the onSelect prop with the selected address
    setSuggestions([]);
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Enter location"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion.place_id} onClick={() => handleSelect(suggestion.description)}>
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
