import { useCallback } from 'react';
import { useCharacter } from '../CharacterContext';

export const useVampireInfo = () => {
  const { state, dispatch } = useCharacter();

  const updateVampireInfo = useCallback((field, value) => {
    dispatch({ type: 'UPDATE_VAMPIRE_INFO', field, value });
  }, [dispatch]);

  return {
    vampireInfo: state.vampireInfo,
    updateVampireInfo
  };
};
