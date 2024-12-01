// Importações dos JSONs de atributos
import physicalAttributes from '../../wod/vampire/v20_dark_ages/attributes/physical.json';
import socialAttributes from '../../wod/vampire/v20_dark_ages/attributes/social.json';
import mentalAttributes from '../../wod/vampire/v20_dark_ages/attributes/mental.json';

// Importação dos JSONs de habilidades
import * as abilities from '../../wod/vampire/v20_dark_ages/abilities';

// Configuração das habilidades por categoria
const ABILITIES_CONFIG = {
  talents: ['alertness', 'athletics', 'awareness', 'brawl', 'empathy', 'expression', 'intimidation', 'leadership', 'legerdemain', 'subterfuge'],
  skills: ['animalKen', 'archery', 'commerce', 'crafts', 'etiquette', 'melee', 'performance', 'ride', 'stealth', 'survival'],
  knowledges: ['academics', 'enigmas', 'hearthWisdom', 'investigation', 'law', 'medicine', 'occult', 'politics', 'seneschal', 'theology'],
};

// Configuração dos atributos por categoria
const ATTRIBUTES_CONFIG = {
  physical: ['strength', 'dexterity', 'stamina'],
  social: ['charisma', 'manipulation', 'appearance'],
  mental: ['perception', 'intelligence', 'wits'],
};

// Configuração das vantagens
const ADVANTAGES_CONFIG = {
  backgrounds: ['allies', 'contacts', 'influence', 'resources', 'status'],
  disciplines: ['animalism', 'auspex', 'celerity', 'dominate', 'fortitude', 'obfuscate', 'potence', 'presence', 'protean'],
  virtues: ['conscience', 'selfControl', 'courage'],
};

// Valores iniciais para diferentes tipos de atributos
const INITIAL_VALUES = {
  attributes: 1,
  abilities: 0,
  virtues: 1,
  advantages: 0,
  bloodPool: 10,
  willpower: 1,
  maxWillpower: 10,
};

// Função para gerar estado inicial de uma categoria
const generateInitialState = (config, initialValue) => {
  return Object.fromEntries(config.map(item => [item, initialValue]));
};

// Função para gerar o estado inicial da ficha
export const getInitialState = () => ({
  basicInfo: {
    characterName: '',
    player: '',
    chronicle: '',
    nature: '',
    demeanor: '',
    concept: '',
    clan: '',
    generation: '',
    sire: '',
  },
  attributes: Object.fromEntries(
    Object.entries(ATTRIBUTES_CONFIG).map(([category, attributes]) => [
      category,
      generateInitialState(attributes, INITIAL_VALUES.attributes)
    ])
  ),
  abilities: Object.fromEntries(
    Object.entries(ABILITIES_CONFIG).map(([category, abilities]) => [
      category,
      generateInitialState(abilities, INITIAL_VALUES.abilities)
    ])
  ),
  advantages: {
    backgrounds: generateInitialState(ADVANTAGES_CONFIG.backgrounds, INITIAL_VALUES.advantages),
    disciplines: generateInitialState(ADVANTAGES_CONFIG.disciplines, INITIAL_VALUES.advantages),
    virtues: generateInitialState(ADVANTAGES_CONFIG.virtues, INITIAL_VALUES.virtues),
  },
  vitality: {
    bloodPool: INITIAL_VALUES.bloodPool,
    maxBloodPool: INITIAL_VALUES.bloodPool,
    willpower: INITIAL_VALUES.willpower,
    maxWillpower: INITIAL_VALUES.maxWillpower,
    health: [false, false, false, false, false, false, false, false], // Healthy to Incapacitated
  },
});

// Exporta todas as configurações do sistema
export default {
  name: 'Vampire: The Dark Ages 20th Anniversary Edition',
  version: '1.0.0',
  attributes: {
    config: ATTRIBUTES_CONFIG,
    data: {
      physical: physicalAttributes,
      social: socialAttributes,
      mental: mentalAttributes,
    },
  },
  abilities: {
    config: ABILITIES_CONFIG,
    data: abilities,
  },
  advantages: {
    config: ADVANTAGES_CONFIG,
  },
  initialValues: INITIAL_VALUES,
  getInitialState,
};
