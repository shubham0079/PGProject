import React, { useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import { Link } from "react-router-dom";
import Header from './header';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div id="body">
      <Header></Header>
    <main>
      <h2>Proof Of Residence</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>

      <h2>Proof of Citizenship</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>

      <h2>Proof of Age</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button><br />
      
      <Link to="/home"  >
      <button>Next</button>
    </Link>
    
   
    </main>

    <footer>
        <Footer></Footer>
    </footer>
    </div>
  );
}

export default FileUpload;
