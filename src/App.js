import React from 'react';
import bgImage from './video/worldconnect.mp4'
import './App.css';

function App() {
   return(
     <div className="App">
      <div className='text-wrapper'>
      <video autoPlay loop muted>
           <source src={bgImage} type="video/mp4" />
        </video>
         <h1 className="title"> CELLUBYTE</h1>
         <p>Cellubyte is a simple and easy to use network coverage map for your 5G device</p>
         <p>Official Website Launching Early 2022</p>
      </div>
     </div>
   );
}

export default App;
