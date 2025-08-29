import React from 'react'
import './App.css'
import JungleReveal from './components/JungleReveal/JungleReveal.tsx';

const App: React.FC = () => {
  return (
    // The app-container class is now applied here, 
    // as App is the root of your component tree.
    <div className="app-container">
      <JungleReveal />
    </div>
  );
};

// Step 2: Export the App component so main.tsx can use it
export default App;
