import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div style={styles.app}>
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
    </div>
  );
}


const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '100vh', 
    backgroundColor: '#e0e0e0', 
    padding: '20px',
  },
};

export default App;