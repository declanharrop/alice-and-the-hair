import { useState, createContext } from 'react';

const defaultValues = {
  isFlipped: false,
  toggleFlip: () => {},
};

export const SiteContext = createContext(defaultValues);

export const SiteProvider = ({ children }) => {
  const [isCard, setCard] = useState(0);

  const toggleCard = (id) => {
    setCard(id);
  };
  return (
    <SiteContext.Provider
      value={{
        isCard,
        toggleCard,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
