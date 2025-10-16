import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefensesTab from './components/Defenses';
import LocationTab from './components/Location';
import NavBar from './navBar/Navigation';
import type { Citadel } from './interfaces/citadelInterfaces';
import type { Location } from './interfaces/citadelInterfaces';

function App() {
const [data, setData] = useState<Citadel | null>(null);



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/citadel.json');
      if (!response.ok) throw new Error(`data not found, status: ${response.status}`);
      const incomingData: Citadel = await response.json();
      setData(incomingData);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);


  return (
    <div>
      <NavBar />
      <Routes>
        <Route  path="/location" element={data && (
        <div>
          <h1>{data.name}</h1><LocationTab {...data.location} />
        </div>)}/>
        <Route  path="/defenses" element={data && (
        <div>
          <DefensesTab {...data.defenses} />
        </div>)}/>
      </Routes>
    </div>
  );
}

export default App;
