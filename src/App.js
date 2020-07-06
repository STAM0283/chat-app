import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
      name = "Marvin Marshall"
      avatar = "https://randomuser.me/api/portraits/men/40.jpg"
      status = {true}
      
      />
      <Contact
      name = "Addison Little"
      avatar = "https://randomuser.me/api/portraits/women/79.jpg"   
      status = {false}
     
      />
      <Contact
      name = "Jonathan Walker"
      avatar = "https://randomuser.me/api/portraits/men/96.jpg"
      status = {true}
      />
     
    </div>
  );
}

export default App;
