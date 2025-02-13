import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age: initialAge, hairColor }) => {
  const [age, setAge] = useState(initialAge);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{lastName}, {firstName}</h2>
      <p style={styles.info}><strong>Age:</strong> {age}</p>
      <p style={styles.info}><strong>Hair Color:</strong> {hairColor}</p>
      <button style={styles.button} onClick={handleBirthday}>
        Birthday Button for {firstName} {lastName}
      </button>
    </div>
  );
};


const styles = {
  card: {
    border: '1px solid black',
    padding: '20px',
    margin: '10px auto', 
    width: '250px',
    textAlign: 'center', 
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9', 
  },
  name: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: 'bold', 
  },
  info: {
    margin: '5px 0',
    fontSize: '16px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PersonCard;