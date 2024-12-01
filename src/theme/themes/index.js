import { lightTheme } from './light';
import { darkTheme } from './dark';
import { vampireDarkAgesTheme } from './vampireDarkAges';

// Mapeamento de temas para suas configurações
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  vampireDarkAges: vampireDarkAgesTheme,
};

// Função para obter um tema
export function getTheme(themeType) {
  const theme = themes[themeType];
  if (!theme) {
    console.warn(`Theme ${themeType} not found, falling back to Vampire Dark Ages theme`);
    return themes.vampireDarkAges;
  }
  return theme;
}
