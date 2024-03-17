import { useState } from "react";
export const UseMyCustomHook = () => {
  const [num, setNum] = useState(0);
  const generator=()=>{
    setNum(num+1);
  }
  return [num, generator];
};
