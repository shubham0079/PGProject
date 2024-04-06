// Info.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DLInfo = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/info')
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching form data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Form Data</h2>
      <ul>
        {formData.map((data, index) => (
          <li key={index}>
            
            <p>interests:{data.interests}</p>
            {/* Add other fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DLInfo;
