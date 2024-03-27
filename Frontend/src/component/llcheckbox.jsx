import React, { useState } from 'react';
import axios from 'axios';

function CheckboxLL() {
  const [formData, setFormData] = useState({
    gender: '', // For radio buttons
    interests: [] // For checkboxes
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedInterests = checked
      ? [...formData.interests, name]
      : formData.interests.filter(interest => interest !== name);
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/saveCheckbox', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Clear the form after successful submission
        setFormData({
          gender: '',
          interests: []
        });
      })
      .catch(error => console.error('Error submitting form:', error));
  };

  return (
    <div>
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
              required
            />
            Female
          </label>
        </div>
        
        <div>
          <label>Interests:</label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes('sports')}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={formData.interests.includes('music')}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <label>
            <input
              type="checkbox"
              name="movies"
              checked={formData.interests.includes('movies')}
              onChange={handleCheckboxChange}
            />
            Movies
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckboxLL;
