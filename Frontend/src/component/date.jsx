import React, { useState, useEffect } from 'react';

const DateTime = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        fetch('/api/currentTime')
            .then(response => response.json())
            .then(data => setCurrentTime(data.currentTime))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Current Time: {currentTime}</h1>
        </div>
    );
};

export default DateTime;
