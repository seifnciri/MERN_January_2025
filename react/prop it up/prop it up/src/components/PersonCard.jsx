const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
      <div className="person-card">
        <h2>
          {lastName}, {firstName}
        </h2>
        <div className="person-details">
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Hair Color:</strong> {hairColor}</p>
        </div>
      </div>
    );
  };
  
  export default PersonCard;