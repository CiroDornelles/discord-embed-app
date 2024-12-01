import { useCallback } from 'react';
import { useCharacter } from '../CharacterContext';

export const useBasicInfo = () => {
  const { state, dispatch } = useCharacter();

  const updateBasicInfo = useCallback((field, value) => {
    dispatch({ type: 'UPDATE_BASIC_INFO', field, value });
  }, [dispatch]);

  return {
    basicInfo: state.basicInfo,
    updateBasicInfo
  };
};
