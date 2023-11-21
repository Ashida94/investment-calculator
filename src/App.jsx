import React, { useState } from 'react';
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Table from "./components/Table";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(15000);
  const [annualInvestment, setAnnualInvestment] = useState(900);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(20); 

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <Inputs label="Initial investment" value={initialInvestment} onChange={(e) => setInitialInvestment(() => +e.target.value)} />
          <Inputs label="Annual investment" value={annualInvestment} onChange={(e) => setAnnualInvestment(() => +e.target.value)} />
        </div>
        <div className="input-group">
          <Inputs label="Expected return" value={expectedReturn} onChange={(e) => setExpectedReturn(() => +e.target.value)} />
          <Inputs label="Duration" value={duration} onChange={(e) => setDuration(() => +e.target.value)} />
        </div>
      </section>
      <Table initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>
    </>
  );
}

export default App;