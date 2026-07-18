import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  return (
    <CounterContext.Provider value={{ count, setCount, inc }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => useContext(CounterContext);
