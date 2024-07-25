/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const DataDemoContext = createContext();

const DataProvider = ({ children }) => {
  const [dataDemo, setDataDemo] = useState({});

  return (
    <DataDemoContext.Provider value={[dataDemo, setDataDemo]}>
      {children}
    </DataDemoContext.Provider>
  );
};

export default DataProvider;
