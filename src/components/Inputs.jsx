import React from 'react';

export default function Inputs({ label, value, onChange }) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" required value={value} onChange={onChange}></input>
    </p>
  );
}