import React, { useState } from "react";

export default function EventHandlingWithFC() {
  const [company, setCompany] = useState({ name: "" });
  return (
    <div>
      <h3>{company.name}</h3>
      <input type="text" onChange={(e)=>{setCompany({name:e.target.value})}}/>
    </div>
  );
}
