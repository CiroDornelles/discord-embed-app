import React, { createContext, useContext, useReducer } from 'react';
import { characterReducer, initialState } from './characterReducer';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};

// Export hooks
export * from './hooks/useBasicInfo';
export * from './hooks/usePersonalityInfo';
export * from './hooks/useVampireInfo';
