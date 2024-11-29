// Regras para pontos de sangue baseadas na geração
export const getBloodPoolByGeneration = (generation) => {
  const bloodPools = {
    3: { max: 100, perTurn: 30 }, // Valores fictícios para 3ª geração
    4: { max: 50, perTurn: 10 },
    5: { max: 40, perTurn: 8 },
    6: { max: 30, perTurn: 6 },
    7: { max: 20, perTurn: 4 },
    8: { max: 15, perTurn: 3 },
    9: { max: 14, perTurn: 2 },
    10: { max: 13, perTurn: 1 },
    11: { max: 12, perTurn: 1 },
    12: { max: 11, perTurn: 1 }, // 12ª geração tem 11 pontos de sangue
    13: { max: 10, perTurn: 1 }
  };

  return bloodPools[generation] || bloodPools[12]; // Retorna 12ª geração como padrão
};
