import { useState, createContext } from 'react';

const defaultValues = {
  isActive: false,
  toggleQuestion: () => {},
};

export const SiteContext = createContext(defaultValues);

export const SiteProvider = ({ children }) => {
  const [isActive, setActive] = useState(0);

  const toggleQuestion = (q) => {
    if (q === isActive) {
      return setActive(false);
    }
    setActive(q);
  };
  return (
    <SiteContext.Provider
      value={{
        isActive,
        toggleQuestion,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
