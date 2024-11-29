import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CharacterContext = createContext();

const initialState = {
  basicInfo: {
    nome: '',
    jogador: '',
    cronica: ''
  },
  personalityInfo: {
    natureza: '',
    comportamento: '',
    conceito: ''
  },
  vampireInfo: {
    cla: '',
    geracao: '',
    senhor: '',
    predador: ''
  },
  status: {
    bloodPool: {
      current: 0,
      max: 10,
      perTurn: 1
    },
    willpower: {
      permanent: 0,
      temporary: Array(10).fill(false)
    },
    path: {
      rating: 0
    }
  },
  habilidades: {},
  vantagens: {
    virtudes: {
      consciencia: 0,
      autocontrole: 0,
      coragem: 0
    },
    antecedentes: []
  }
};

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BLOOD_POOL':
      return {
        ...state,
        status: {
          ...state.status,
          bloodPool: {
            ...state.status.bloodPool,
            current: action.payload
          }
        }
      };
    case 'UPDATE_WILLPOWER':
      return {
        ...state,
        status: {
          ...state.status,
          willpower: {
            ...state.status.willpower,
            ...action.payload
          }
        }
      };
    case 'UPDATE_PATH':
      return {
        ...state,
        status: {
          ...state.status,
          path: {
            ...state.status.path,
            rating: action.payload
          }
        }
      };
    case 'UPDATE_CHARACTER_INFO':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const updateBloodPool = useCallback((value) => {
    dispatch({ type: 'UPDATE_BLOOD_POOL', payload: value });
  }, []);

  const updateWillpower = useCallback((willpowerData) => {
    dispatch({ type: 'UPDATE_WILLPOWER', payload: willpowerData });
  }, []);

  const updatePath = useCallback((value) => {
    dispatch({ type: 'UPDATE_PATH', payload: value });
  }, []);

  const updateCharacterInfo = useCallback((data) => {
    dispatch({ type: 'UPDATE_CHARACTER_INFO', payload: data });
  }, []);

  const value = {
    character: state,
    updateBloodPool,
    updateWillpower,
    updatePath,
    updateCharacterInfo
  };

  return (
    <CharacterContext.Provider value={value}>
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
