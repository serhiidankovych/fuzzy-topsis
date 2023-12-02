const generateExpertEstimations = (
  expertNumbers,
  alternativeNumbers,
  criteriaNumbers
) => {
  const generatedExpertEstimations = {};

  for (let i = 0; i < expertNumbers; i++) {
    for (let j = 0; j < alternativeNumbers; j++) {
      for (let y = 0; y < criteriaNumbers; y++) {
        const key = `e${i + 1}-a${j + 1}-c${y + 1}`;
        generatedExpertEstimations[key] = {
          linguisticTermId: 0,

          criteria: y + 1,
          alternative: j + 1,
          expertId: i + 1,
        };
      }
    }
  }

  return generatedExpertEstimations;
};

const generateCriteriaEstimations = (expertNumbers, criteriaNumbers) => {
  const generatedCriteriaEstimations = {};

  for (let i = 0; i < expertNumbers; i++) {
    for (let j = 0; j < criteriaNumbers; j++) {
      const key = `e${i + 1}-c${j + 1}`;
      generatedCriteriaEstimations[key] = {
        linguisticTermId: 0,
        criteria: j + 1,
        expertId: i + 1,
      };
    }
  }

  return generatedCriteriaEstimations;
};

export { generateExpertEstimations, generateCriteriaEstimations };
