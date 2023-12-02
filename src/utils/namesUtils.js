const checkNames = (names, showToastMessage) => {
  let isValid = true;

  names.alternativeNames.forEach((alternative) => {
    if (alternative === "") {
      showToastMessage("Please enter a name", "error");
      isValid = false;
      return;
    }
  });

  return isValid;
};

const generateLinguisticTerms = (count, type, generatedTriangularValues) => {
  const generatedLinguisticTerms = [];

  for (let i = 0; i < count; i++) {
    generatedLinguisticTerms.push({
      linguisticTermId: i,
      confines: generatedTriangularValues[i],
      type: type,
    });
  }

  return generatedLinguisticTerms;
};

const generateNames = (prefix, count) => {
  return Array.from({ length: count }, (_, index) => `${prefix}${index + 1}`);
};
const generateOptimization = (count) => {
  const result = {};
  for (let i = 1; i <= count; i++) {
    result[`c${i}`] = "Max";
  }

  return result;
};

export {
  checkNames,
  generateLinguisticTerms,
  generateOptimization,
  generateNames,
};
