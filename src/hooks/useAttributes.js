import { useState, useEffect } from 'react';
import physical from '../data/wod/vampire/v20_dark_ages/attributes/physical.json';
import social from '../data/wod/vampire/v20_dark_ages/attributes/social.json';
import mental from '../data/wod/vampire/v20_dark_ages/attributes/mental.json';

const ATTRIBUTE_CATEGORIES = {
  physical: [
    'strength', 'dexterity', 'stamina'
  ],
  social: [
    'charisma', 'manipulation', 'appearance'
  ],
  mental: [
    'perception', 'intelligence', 'wits'
  ]
};

export const useAttributes = () => {
  const [attributeData, setAttributeData] = useState({
    physical: {},
    social: {},
    mental: {}
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAttributes = async () => {
      try {
        const loadedData = {
          physical: physical,
          social: social,
          mental: mental
        };

        setAttributeData(loadedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadAttributes();
  }, []);

  return { attributeData, loading, error };
};
