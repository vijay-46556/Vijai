import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh'
    }}>
      <h1>Welcome to Vijai! 👋</h1>
      <p>My React App is now Live</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          marginTop: '20px',
          cursor: 'pointer'
        }}
      >
        Count is: {count}
      </button>
    </div>
  );
}

export default App;
