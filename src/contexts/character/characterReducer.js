export const initialState = {
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

export const characterReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BASIC_INFO':
      return {
        ...state,
        basicInfo: {
          ...state.basicInfo,
          [action.field]: action.value
        }
      };

    case 'UPDATE_PERSONALITY_INFO':
      return {
        ...state,
        personalityInfo: {
          ...state.personalityInfo,
          [action.field]: action.value
        }
      };

    case 'UPDATE_VAMPIRE_INFO':
      return {
        ...state,
        vampireInfo: {
          ...state.vampireInfo,
          [action.field]: action.value
        }
      };

    case 'UPDATE_ABILITIES':
      return {
        ...state,
        habilidades: {
          ...state.habilidades,
          [action.field]: action.value
        }
      };

    case 'UPDATE_ADVANTAGES':
      return {
        ...state,
        vantagens: {
          ...state.vantagens,
          [action.category]: {
            ...state.vantagens[action.category],
            [action.field]: action.value
          }
        }
      };

    case 'UPDATE_STATUS':
      return {
        ...state,
        status: {
          ...state.status,
          [action.statusType]: {
            ...state.status[action.statusType],
            ...action.value
          }
        }
      };

    default:
      return state;
  }
};
