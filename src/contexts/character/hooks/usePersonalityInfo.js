import { useCallback } from 'react';
import { useCharacter } from '../CharacterContext';

export const usePersonalityInfo = () => {
  const { state, dispatch } = useCharacter();

  const updatePersonalityInfo = useCallback((field, value) => {
    dispatch({ type: 'UPDATE_PERSONALITY_INFO', field, value });
  }, [dispatch]);

  return {
    personalityInfo: state.personalityInfo,
    updatePersonalityInfo
  };
};
