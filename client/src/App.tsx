import React from 'react';
import HomePage from './components/HomePage'; // נניח ש-HomePage ממוקם בתיקיית components

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
