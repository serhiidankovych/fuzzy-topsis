const transformToTriangleForm = (linguisticTerms) => {
  let minTriangularNumber = Infinity; // Initialize with a high value
  let maxTriangularNumber = -Infinity; // Initialize with a low value

  const triangularNumbers = linguisticTerms?.map((linguisticTerm) => {
    const { confines } = linguisticTerm;
    return {
      ...linguisticTerm,
      triangularChart: [
        { x: confines[0], y: 0 },
        { x: confines[1], y: 1 },
        { x: confines[2], y: 0 },
      ],
    };
  });

  triangularNumbers?.forEach((triangularNumber) => {
    const { triangularChart } = triangularNumber;
    triangularChart.forEach((point) => {
      minTriangularNumber = Math.min(minTriangularNumber, point.x);
      maxTriangularNumber = Math.max(maxTriangularNumber, point.x);
    });
  });

  const triangularNumbersNormalized = triangularNumbers?.map(
    (linguisticTerm) => {
      const { confines } = linguisticTerm;
      return {
        ...linguisticTerm,
        normalizedConfines: [
          normalizeValue(confines[0], minTriangularNumber, maxTriangularNumber),
          normalizeValue(confines[1], minTriangularNumber, maxTriangularNumber),
          normalizeValue(confines[2], minTriangularNumber, maxTriangularNumber),
        ],
        normalizedTriangularChart: [
          {
            x: normalizeValue(
              confines[0],
              minTriangularNumber,
              maxTriangularNumber
            ),
            y: 0,
          },
          {
            x: normalizeValue(
              confines[1],
              minTriangularNumber,
              maxTriangularNumber
            ),
            y: 1,
          },
          {
            x: normalizeValue(
              confines[2],
              minTriangularNumber,
              maxTriangularNumber
            ),
            y: 0,
          },
        ],
      };
    }
  );

  return triangularNumbersNormalized;
};
const normalizeValue = (value, minValue, maxValue) => {
  if (value === 0 && minValue === 0 && maxValue === 0) {
    return 0;
  } else {
    // Normalize the value to the range [0, 1]
    const normalized = (value - minValue) / (maxValue - minValue);

    // Map the normalized value to the range [1, 9]
    const scaled = normalized * 8 + 1;

    // Ensure the result is within the [1, 9] range
    return Math.max(1, Math.min(9, scaled));
  }
};
const generateContrastColor = (index, total) => {
  // Calculate hue to evenly distribute colors in the color spectrum
  const hue = (360 / total) * index;

  // Convert HSL to RGB color
  const h = hue / 360;
  const r = Math.round(255 * hue2rgb(h + 1 / 3));
  const g = Math.round(255 * hue2rgb(h));
  const b = Math.round(255 * hue2rgb(h - 1 / 3));

  return `rgb(${r}, ${g}, ${b})`;
};

const hue2rgb = (p) => {
  if (p < 0) p += 1;
  if (p > 1) p -= 1;
  if (p < 1 / 6) return 6 * p;
  if (p < 0.5) return 1;
  if (p < 2 / 3) return (2 / 3 - p) * 6;
  return 0;
};

const handleLinguisticTermsChange = (
  index,
  value,
  confinesIndex,
  linguisticTerms,
  setLinguisticTerms
) => {
  let processedValue = Number(value);

  if (processedValue > 1000) {
    processedValue = 1000;
  }

  const updatedLinguisticTerms = [...linguisticTerms];
  updatedLinguisticTerms[index] = {
    ...updatedLinguisticTerms[index],
    confines: [
      ...updatedLinguisticTerms[index].confines.slice(0, confinesIndex),
      processedValue === "" ? "" : processedValue,
      ...updatedLinguisticTerms[index].confines.slice(confinesIndex + 1),
    ],
  };

  setLinguisticTerms(transformToTriangleForm(updatedLinguisticTerms));
};

const generateTriangularValues = (numTerms, x) => {
  const step = x / (numTerms - 1);
  const values = [];

  for (let i = 0; i < numTerms; i++) {
    const firstValue = i === 0 ? 0 : (i - 1) * step;
    const secondValue = i === 0 ? 0 : i * step;
    const thirdValue = i === numTerms - 1 ? 1 : (i + 1) * step;

    const value = [
      Number(firstValue.toFixed(1)),
      Number(secondValue.toFixed(1)),
      Number(thirdValue.toFixed(1)),
    ];
    values.push(value);
  }

  return values;
};

const checkLinguisticTermsConfines = (
  linguisticTerms,
  showToastMessage,
  names
) => {
  let isValid = true; // Assume all inputs are valid initially

  linguisticTerms?.forEach((linguisticTerm, index) => {
    if (linguisticTerm?.confines.length !== 3) {
      showToastMessage("Wrong confines for " + names[index], "error");
      isValid = false;
      return;
    }
  });
  linguisticTerms?.forEach((linguisticTerm, index) => {
    const confines = linguisticTerm?.confines;

    if (!(confines[0] <= confines[1] && confines[1] <= confines[2])) {
      showToastMessage("Wrong confines values for " + names[index], "error");
      isValid = false;
    }
  });

  return isValid;
};

const renderLinguisticTerms = (terms) => (
  <div
    style={{
      textAlign: "center",
      padding: "5px",
      border: "1px solid #51454f",
      backgroundColor: "#232222",
      margin: "3px",
      borderRadius: "5px",
    }}
  >
    {terms?.map((number) => number.toFixed(2)).join(", ")}
  </div>
);

export {
  transformToTriangleForm,
  normalizeValue,
  generateContrastColor,
  hue2rgb,
  handleLinguisticTermsChange,
  generateTriangularValues,
  checkLinguisticTermsConfines,
  renderLinguisticTerms,
};
