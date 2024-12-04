import { useState, useEffect } from 'react';
import * as abilities from '../data/wod/vampire/v20_dark_ages/abilities';

const ABILITY_CATEGORIES = {
  talents: [
    'alertness', 'athletics', 'awareness', 'brawl', 'empathy',
    'expression', 'intimidation', 'leadership', 'legerdemain', 'subterfuge'
  ],
  skills: [
    'animalKen', 'archery', 'commerce', 'crafts', 'etiquette',
    'melee', 'performance', 'ride', 'stealth', 'survival'
  ],
  knowledges: [
    'academics', 'enigmas', 'hearthWisdom', 'investigation', 'law',
    'medicine', 'occult', 'politics', 'seneschal', 'theology'
  ]
};

export const useAbilities = () => {
  const [abilityData, setAbilityData] = useState({
    talents: {},
    skills: {},
    knowledges: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAbilities = async () => {
      try {
        const loadedData = {
          talents: {},
          skills: {},
          knowledges: {}
        };

        // Carregar talentos
        for (const talent of ABILITY_CATEGORIES.talents) {
          loadedData.talents[talent] = abilities[talent];
        }

        // Carregar perícias
        for (const skill of ABILITY_CATEGORIES.skills) {
          loadedData.skills[skill] = abilities[skill];
        }

        // Carregar conhecimentos
        for (const knowledge of ABILITY_CATEGORIES.knowledges) {
          loadedData.knowledges[knowledge] = abilities[knowledge];
        }

        setAbilityData(loadedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadAbilities();
  }, []);

  return { abilityData, loading, error };
};
