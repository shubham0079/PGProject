import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SlotBooking() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [bookingConfirmation, setBookingConfirmation] = useState('');

  useEffect(() => {
    // Fetch available time slots from backend
    axios.get('/api/timeSlots')
      .then(response => setTimeSlots(response.data))
      .catch(error => console.error('Error fetching time slots:', error));
  }, []);

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/bookSlot', {
      slot: selectedSlot,
      name: formData.name,
      email: formData.email
    })
      .then(response => setBookingConfirmation(response.data))
      .catch(error => console.error('Error booking slot:', error));
  };

  return (
    <div>
      <h2>Slot Booking</h2>
      <div>
        {timeSlots.map(slot => (
          <div key={slot.id}>
            <input
              type="radio"
              name="timeSlot"
              id={`slot-${slot.id}`}
              value={slot.id}
              checked={selectedSlot === slot.id}
              onChange={() => handleSlotSelection(slot.id)}
            />
            <label htmlFor={`slot-${slot.id}`}>{slot.time}</label>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Name" />
        <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" />
        <button type="submit">Book Slot</button>
      </form>
      {bookingConfirmation && <p>{bookingConfirmation}</p>}
    </div>
  );
}

export default SlotBooking;
