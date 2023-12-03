export const numberOfAlternatives = 3;
export const numberOfCriteria = 5;
export const numberOfLinguisticTermsForAlternatives = 5;
export const numberOfLinguisticTermsForCriteria = 5;
export const numberOfExperts = 4;
const weightParameter = 0.5;
export const names = {
  alternativeNames: ["Alternative1", "Alternative2", "Alternative3"],
  criteriaNames: [
    "Criteria1",
    "Criteria2",
    "Criteria3",
    "Criteria4",
    "Criteria5",
  ],
  linguisticTermsForAlternativesNames: ["VP", "P", "F", "G", "VG"],
  linguisticTermsForCriteriaNames: ["VL", "L", "M", "H", "VH"],
  expertNames: ["Expert1", "Expert2", "Expert3", "Expert4"],
};

export const optimization = {
  c1: "Max",
  c2: "Max",
  c3: "Max",
  c4: "Max",
  c5: "Max",
};

export const criteriaLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [1, 1, 3],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
    normalizedConfines: [1, 1, 3],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [1, 3, 5],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
    normalizedConfines: [1, 3, 5],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [3, 5, 7],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
    normalizedConfines: [3, 5, 7],
    normalizedTriangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [5, 7, 9],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [5, 7, 9],
    normalizedTriangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [7, 9, 9],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [7, 9, 9],
    normalizedTriangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
];

export const alternativesLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [1, 1, 3],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
    normalizedConfines: [1, 1, 3],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [1, 3, 5],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
    normalizedConfines: [1, 3, 5],
    normalizedTriangularChart: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [3, 5, 7],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
    normalizedConfines: [3, 5, 7],
    normalizedTriangularChart: [
      {
        x: 3,
        y: 0,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [5, 7, 9],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [5, 7, 9],
    normalizedTriangularChart: [
      {
        x: 5,
        y: 0,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [7, 9, 9],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
    normalizedConfines: [7, 9, 9],
    normalizedTriangularChart: [
      {
        x: 7,
        y: 0,
      },
      {
        x: 9,
        y: 1,
      },
      {
        x: 9,
        y: 0,
      },
    ],
  },
];

export const criteriaEstimations = {
  "e1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    expertId: 1,
  },
  "e1-c2": {
    linguisticTermId: 2,
    criteria: 2,
    expertId: 1,
  },
  "e1-c3": {
    linguisticTermId: 1,
    criteria: 3,
    expertId: 1,
  },
  "e1-c4": {
    linguisticTermId: 3,
    criteria: 4,
    expertId: 1,
  },
  "e1-c5": {
    linguisticTermId: 4,
    criteria: 5,
    expertId: 1,
  },
  "e2-c1": {
    linguisticTermId: 2,
    criteria: 1,
    expertId: 2,
  },
  "e2-c2": {
    linguisticTermId: 2,
    criteria: 2,
    expertId: 2,
  },
  "e2-c3": {
    linguisticTermId: 3,
    criteria: 3,
    expertId: 2,
  },
  "e2-c4": {
    linguisticTermId: 4,
    criteria: 4,
    expertId: 2,
  },
  "e2-c5": {
    linguisticTermId: 4,
    criteria: 5,
    expertId: 2,
  },
  "e3-c1": {
    linguisticTermId: 1,
    criteria: 1,
    expertId: 3,
  },
  "e3-c2": {
    linguisticTermId: 3,
    criteria: 2,
    expertId: 3,
  },
  "e3-c3": {
    linguisticTermId: 2,
    criteria: 3,
    expertId: 3,
  },
  "e3-c4": {
    linguisticTermId: 2,
    criteria: 4,
    expertId: 3,
  },
  "e3-c5": {
    linguisticTermId: 3,
    criteria: 5,
    expertId: 3,
  },
  "e4-c1": {
    linguisticTermId: 4,
    criteria: 1,
    expertId: 4,
  },
  "e4-c2": {
    linguisticTermId: 2,
    criteria: 2,
    expertId: 4,
  },
  "e4-c3": {
    linguisticTermId: 3,
    criteria: 3,
    expertId: 4,
  },
  "e4-c4": {
    linguisticTermId: 0,
    criteria: 4,
    expertId: 4,
  },
  "e4-c5": {
    linguisticTermId: 2,
    criteria: 5,
    expertId: 4,
  },
};

export const expertsEstimations = {
  "e1-a1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 1,
    expertId: 1,
  },
  "e1-a2-c1": {
    linguisticTermId: 1,
    criteria: 1,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c5": {
    linguisticTermId: 0,
    criteria: 5,
    alternative: 2,
    expertId: 1,
  },
  "e1-a3-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 3,
    expertId: 1,
  },
  "e2-a1-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 1,
    expertId: 2,
  },
  "e2-a2-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c4": {
    linguisticTermId: 1,
    criteria: 4,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 2,
    expertId: 2,
  },
  "e2-a3-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c5": {
    linguisticTermId: 0,
    criteria: 5,
    alternative: 3,
    expertId: 2,
  },
  "e3-a1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 1,
    expertId: 3,
  },
  "e3-a2-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c5": {
    linguisticTermId: 0,
    criteria: 5,
    alternative: 2,
    expertId: 3,
  },
  "e3-a3-c1": {
    linguisticTermId: 1,
    criteria: 1,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c2": {
    linguisticTermId: 4,
    criteria: 2,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c3": {
    linguisticTermId: 2,
    criteria: 3,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c5": {
    linguisticTermId: 1,
    criteria: 5,
    alternative: 3,
    expertId: 3,
  },
  "e4-a1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 1,
    expertId: 4,
  },
  "e4-a1-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 1,
    expertId: 4,
  },
  "e4-a1-c3": {
    linguisticTermId: 1,
    criteria: 3,
    alternative: 1,
    expertId: 4,
  },
  "e4-a1-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 1,
    expertId: 4,
  },
  "e4-a1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 1,
    expertId: 4,
  },
  "e4-a2-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 2,
    expertId: 4,
  },
  "e4-a2-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 2,
    expertId: 4,
  },
  "e4-a2-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 2,
    expertId: 4,
  },
  "e4-a2-c4": {
    linguisticTermId: 0,
    criteria: 4,
    alternative: 2,
    expertId: 4,
  },
  "e4-a2-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 2,
    expertId: 4,
  },
  "e4-a3-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 3,
    expertId: 4,
  },
  "e4-a3-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 3,
    expertId: 4,
  },
  "e4-a3-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 3,
    expertId: 4,
  },
  "e4-a3-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 3,
    expertId: 4,
  },
  "e4-a3-c5": {
    linguisticTermId: 0,
    criteria: 5,
    alternative: 3,
    expertId: 4,
  },
};

export const dataset1 = {
  numberOfAlternatives,
  numberOfCriteria,
  numberOfLinguisticTermsForAlternatives,
  numberOfLinguisticTermsForCriteria,
  numberOfExperts,
  names,
  criteriaLinguisticTerms,
  alternativesLinguisticTerms,
  criteriaEstimations,
  expertsEstimations,
  optimization,
  weightParameter,
};
