export const SHEET_TYPES = {
  V20_DARK_AGES: 'v20-dark-ages',
  // Adicione outros tipos de fichas aqui conforme necessário
};

export const getInitialCharacterData = (sheetType) => {
  switch (sheetType) {
    case SHEET_TYPES.V20_DARK_AGES:
      return {
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
        attributes: {
          physical: {
            strength: 1,
            dexterity: 1,
            stamina: 1,
          },
          social: {
            charisma: 1,
            manipulation: 1,
            appearance: 1,
          },
          mental: {
            perception: 1,
            intelligence: 1,
            wits: 1,
          },
        },
        abilities: {
          talents: {
            alertness: 0,
            athletics: 0,
            awareness: 0,
            brawl: 0,
            empathy: 0,
            expression: 0,
            intimidation: 0,
            leadership: 0,
            subterfuge: 0,
          },
          skills: {
            animalKen: 0,
            crafts: 0,
            drive: 0,
            etiquette: 0,
            firearms: 0,
            larceny: 0,
            melee: 0,
            performance: 0,
            stealth: 0,
          },
          knowledges: {
            academics: 0,
            computer: 0,
            finance: 0,
            investigation: 0,
            law: 0,
            medicine: 0,
            occult: 0,
            politics: 0,
            science: 0,
          },
        },
        advantages: {
          backgrounds: {
            allies: 0,
            contacts: 0,
            influence: 0,
            resources: 0,
            status: 0,
          },
          disciplines: {
            animalism: 0,
            auspex: 0,
            celerity: 0,
            dominate: 0,
            fortitude: 0,
            obfuscate: 0,
            potence: 0,
            presence: 0,
            protean: 0,
          },
          virtues: {
            conscience: 1,
            selfControl: 1,
            courage: 1,
          },
        },
        vitality: {
          bloodPool: 10,
          maxBloodPool: 10,
          willpower: 1,
          maxWillpower: 10,
          health: [false, false, false, false, false, false, false, false], // Healthy to Incapacitated
        },
      };
    default:
      throw new Error(`Sheet type ${sheetType} not supported`);
  }
};
