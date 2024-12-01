// Importa as configurações dos sistemas
import { SYSTEMS, SYSTEM_CONFIGS } from '../../data/systems';

// Exporta os tipos de ficha disponíveis
export const SHEET_TYPES = SYSTEMS;

// Função para obter os dados iniciais da ficha
export const getInitialCharacterData = (sheetType) => {
  const systemConfig = SYSTEM_CONFIGS[sheetType];
  if (!systemConfig) {
    throw new Error(`Sheet type ${sheetType} not supported`);
  }
  return systemConfig.getInitialState();
};

// Exporta funções auxiliares para acessar dados do sistema
export const getSystemConfig = (sheetType) => {
  return SYSTEM_CONFIGS[sheetType];
};

export const getSystemName = (sheetType) => {
  const config = getSystemConfig(sheetType);
  return config ? config.name : null;
};

export const getSystemVersion = (sheetType) => {
  const config = getSystemConfig(sheetType);
  return config ? config.version : null;
};
