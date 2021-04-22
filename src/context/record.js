import React, { createContext, useEffect, useState } from "react";

export const RecordContext = createContext();

export function RecordContextProvider({ children }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then(({ record }) => setRecords(record));
  }, []);
  const deleteRecords = async (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };
  return (
    <RecordContext.Provider value={{ records, deleteRecords }}>
      {children}
    </RecordContext.Provider>
  );
}
