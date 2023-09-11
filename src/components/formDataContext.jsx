import { createContext, useContext, useState, useEffect } from 'react';

export const FormDataContext = createContext([]);

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const localStorageData = localStorage.getItem("formData");
    return localStorageData ? JSON.parse(localStorageData) : []
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  },[formData])

  const saveFormData = (data) => {
    setFormData(data);
  };

  return (
    <FormDataContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};