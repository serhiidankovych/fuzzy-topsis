export const numberOfAlternatives = 5;
export const numberOfCriteria = 7;
export const numberOfLinguisticTermsForAlternatives = 6;
export const numberOfLinguisticTermsForCriteria = 5;
export const numberOfExperts = 3;
const weightParameter = 0.6;
export const names = {
  alternativeNames: ["SnoopDrone", "McFly", "Snitch", "Lightdrone", "Phantom"],
  criteriaNames: [
    "Stability",
    "Payload ",
    "Battery",
    "Security",
    "Obstacle",
    "Range",
    "Camera",
  ],
  linguisticTermsForAlternativesNames: ["VP", "P", "F", "G", "VG", "E"],
  linguisticTermsForCriteriaNames: ["VL", "L", "M", "H", "VH"],
  expertNames: ["Thomas Saaty", "Serafim Opricovic", "Gladys West"],
};

export const optimization = {
  c1: "Min",
  c2: "Max",
  c3: "Max",
  c4: "Max",
  c5: "Max",
  c6: "Min",
  c7: "Min",
  c8: "Max",
};

export const criteriaLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 0.3],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 0.3],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.3,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [0, 0.3, 0.5],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0.3, 0.5],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.3,
        y: 1,
      },
      {
        x: 0.5,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [0.3, 0.5, 0.8],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
    normalizedConfines: [0.3, 0.5, 0.8],
    normalizedTriangularChart: [
      {
        x: 0.3,
        y: 0,
      },
      {
        x: 0.5,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [0.5, 0.8, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.5, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.5,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [0.8, 1, 1],
    type: "lt-criteria",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
];

export const alternativesLinguisticTerms = [
  {
    linguisticTermId: 0,
    confines: [0, 0, 0.2],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0, 0.2],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
      {
        x: 0.2,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 1,
    confines: [0, 0.2, 0.4],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.4,
        y: 0,
      },
    ],
    normalizedConfines: [0, 0.2, 0.4],
    normalizedTriangularChart: [
      {
        x: 0,
        y: 0,
      },
      {
        x: 0.2,
        y: 1,
      },
      {
        x: 0.4,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 2,
    confines: [0.2, 0.4, 0.6],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.4,
        y: 1,
      },
      {
        x: 0.6,
        y: 0,
      },
    ],
    normalizedConfines: [0.2, 0.4, 0.6],
    normalizedTriangularChart: [
      {
        x: 0.2,
        y: 0,
      },
      {
        x: 0.4,
        y: 1,
      },
      {
        x: 0.6,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 3,
    confines: [0.4, 0.6, 0.8],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.4,
        y: 0,
      },
      {
        x: 0.6,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
    normalizedConfines: [0.4, 0.6, 0.8],
    normalizedTriangularChart: [
      {
        x: 0.4,
        y: 0,
      },
      {
        x: 0.6,
        y: 1,
      },
      {
        x: 0.8,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 4,
    confines: [0.6, 0.8, 1],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.6,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.6, 0.8, 1],
    normalizedTriangularChart: [
      {
        x: 0.6,
        y: 0,
      },
      {
        x: 0.8,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
  {
    linguisticTermId: 5,
    confines: [0.8, 1, 1],
    type: "lt-alternative",
    triangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
    normalizedConfines: [0.8, 1, 1],
    normalizedTriangularChart: [
      {
        x: 0.8,
        y: 0,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 0,
      },
    ],
  },
];

export const criteriaEstimations = {
  "e1-c1": {
    linguisticTermId: 1,
    criteria: 1,
    expertId: 1,
  },
  "e1-c2": {
    linguisticTermId: 0,
    criteria: 2,
    expertId: 1,
  },
  "e1-c3": {
    linguisticTermId: 0,
    criteria: 3,
    expertId: 1,
  },
  "e1-c4": {
    linguisticTermId: 3,
    criteria: 4,
    expertId: 1,
  },
  "e1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    expertId: 1,
  },
  "e1-c6": {
    linguisticTermId: 4,
    criteria: 6,
    expertId: 1,
  },
  "e1-c7": {
    linguisticTermId: 3,
    criteria: 7,
    expertId: 1,
  },
  "e2-c1": {
    linguisticTermId: 1,
    criteria: 1,
    expertId: 2,
  },
  "e2-c2": {
    linguisticTermId: 2,
    criteria: 2,
    expertId: 2,
  },
  "e2-c3": {
    linguisticTermId: 2,
    criteria: 3,
    expertId: 2,
  },
  "e2-c4": {
    linguisticTermId: 0,
    criteria: 4,
    expertId: 2,
  },
  "e2-c5": {
    linguisticTermId: 4,
    criteria: 5,
    expertId: 2,
  },
  "e2-c6": {
    linguisticTermId: 2,
    criteria: 6,
    expertId: 2,
  },
  "e2-c7": {
    linguisticTermId: 4,
    criteria: 7,
    expertId: 2,
  },
  "e3-c1": {
    linguisticTermId: 4,
    criteria: 1,
    expertId: 3,
  },
  "e3-c2": {
    linguisticTermId: 2,
    criteria: 2,
    expertId: 3,
  },
  "e3-c3": {
    linguisticTermId: 1,
    criteria: 3,
    expertId: 3,
  },
  "e3-c4": {
    linguisticTermId: 0,
    criteria: 4,
    expertId: 3,
  },
  "e3-c5": {
    linguisticTermId: 1,
    criteria: 5,
    expertId: 3,
  },
  "e3-c6": {
    linguisticTermId: 4,
    criteria: 6,
    expertId: 3,
  },
  "e3-c7": {
    linguisticTermId: 3,
    criteria: 7,
    expertId: 3,
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
    linguisticTermId: 3,
    criteria: 2,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c6": {
    linguisticTermId: 3,
    criteria: 6,
    alternative: 1,
    expertId: 1,
  },
  "e1-a1-c7": {
    linguisticTermId: 4,
    criteria: 7,
    alternative: 1,
    expertId: 1,
  },
  "e1-a2-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c2": {
    linguisticTermId: 4,
    criteria: 2,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c5": {
    linguisticTermId: 1,
    criteria: 5,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c6": {
    linguisticTermId: 4,
    criteria: 6,
    alternative: 2,
    expertId: 1,
  },
  "e1-a2-c7": {
    linguisticTermId: 3,
    criteria: 7,
    alternative: 2,
    expertId: 1,
  },
  "e1-a3-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c5": {
    linguisticTermId: 4,
    criteria: 5,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c6": {
    linguisticTermId: 3,
    criteria: 6,
    alternative: 3,
    expertId: 1,
  },
  "e1-a3-c7": {
    linguisticTermId: 2,
    criteria: 7,
    alternative: 3,
    expertId: 1,
  },
  "e1-a4-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c2": {
    linguisticTermId: 5,
    criteria: 2,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c5": {
    linguisticTermId: 2,
    criteria: 5,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c6": {
    linguisticTermId: 5,
    criteria: 6,
    alternative: 4,
    expertId: 1,
  },
  "e1-a4-c7": {
    linguisticTermId: 3,
    criteria: 7,
    alternative: 4,
    expertId: 1,
  },
  "e1-a5-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c6": {
    linguisticTermId: 3,
    criteria: 6,
    alternative: 5,
    expertId: 1,
  },
  "e1-a5-c7": {
    linguisticTermId: 2,
    criteria: 7,
    alternative: 5,
    expertId: 1,
  },
  "e2-a1-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c2": {
    linguisticTermId: 3,
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
    linguisticTermId: 1,
    criteria: 4,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c6": {
    linguisticTermId: 2,
    criteria: 6,
    alternative: 1,
    expertId: 2,
  },
  "e2-a1-c7": {
    linguisticTermId: 3,
    criteria: 7,
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
    linguisticTermId: 1,
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
    linguisticTermId: 0,
    criteria: 5,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c6": {
    linguisticTermId: 2,
    criteria: 6,
    alternative: 2,
    expertId: 2,
  },
  "e2-a2-c7": {
    linguisticTermId: 1,
    criteria: 7,
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
    linguisticTermId: 4,
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
    linguisticTermId: 2,
    criteria: 5,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c6": {
    linguisticTermId: 3,
    criteria: 6,
    alternative: 3,
    expertId: 2,
  },
  "e2-a3-c7": {
    linguisticTermId: 2,
    criteria: 7,
    alternative: 3,
    expertId: 2,
  },
  "e2-a4-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c4": {
    linguisticTermId: 4,
    criteria: 4,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c6": {
    linguisticTermId: 4,
    criteria: 6,
    alternative: 4,
    expertId: 2,
  },
  "e2-a4-c7": {
    linguisticTermId: 4,
    criteria: 7,
    alternative: 4,
    expertId: 2,
  },
  "e2-a5-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c2": {
    linguisticTermId: 4,
    criteria: 2,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c3": {
    linguisticTermId: 5,
    criteria: 3,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c4": {
    linguisticTermId: 5,
    criteria: 4,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c5": {
    linguisticTermId: 4,
    criteria: 5,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c6": {
    linguisticTermId: 5,
    criteria: 6,
    alternative: 5,
    expertId: 2,
  },
  "e2-a5-c7": {
    linguisticTermId: 3,
    criteria: 7,
    alternative: 5,
    expertId: 2,
  },
  "e3-a1-c1": {
    linguisticTermId: 2,
    criteria: 1,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c2": {
    linguisticTermId: 3,
    criteria: 2,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c3": {
    linguisticTermId: 4,
    criteria: 3,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c4": {
    linguisticTermId: 4,
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
  "e3-a1-c6": {
    linguisticTermId: 2,
    criteria: 6,
    alternative: 1,
    expertId: 3,
  },
  "e3-a1-c7": {
    linguisticTermId: 2,
    criteria: 7,
    alternative: 1,
    expertId: 3,
  },
  "e3-a2-c1": {
    linguisticTermId: 2,
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
    linguisticTermId: 3,
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
    linguisticTermId: 4,
    criteria: 5,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c6": {
    linguisticTermId: 2,
    criteria: 6,
    alternative: 2,
    expertId: 3,
  },
  "e3-a2-c7": {
    linguisticTermId: 1,
    criteria: 7,
    alternative: 2,
    expertId: 3,
  },
  "e3-a3-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c2": {
    linguisticTermId: 1,
    criteria: 2,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c3": {
    linguisticTermId: 4,
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
    linguisticTermId: 2,
    criteria: 5,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c6": {
    linguisticTermId: 2,
    criteria: 6,
    alternative: 3,
    expertId: 3,
  },
  "e3-a3-c7": {
    linguisticTermId: 1,
    criteria: 7,
    alternative: 3,
    expertId: 3,
  },
  "e3-a4-c1": {
    linguisticTermId: 3,
    criteria: 1,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c2": {
    linguisticTermId: 2,
    criteria: 2,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c4": {
    linguisticTermId: 2,
    criteria: 4,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c5": {
    linguisticTermId: 4,
    criteria: 5,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c6": {
    linguisticTermId: 3,
    criteria: 6,
    alternative: 4,
    expertId: 3,
  },
  "e3-a4-c7": {
    linguisticTermId: 3,
    criteria: 7,
    alternative: 4,
    expertId: 3,
  },
  "e3-a5-c1": {
    linguisticTermId: 4,
    criteria: 1,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c2": {
    linguisticTermId: 5,
    criteria: 2,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c3": {
    linguisticTermId: 3,
    criteria: 3,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c4": {
    linguisticTermId: 3,
    criteria: 4,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c5": {
    linguisticTermId: 3,
    criteria: 5,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c6": {
    linguisticTermId: 4,
    criteria: 6,
    alternative: 5,
    expertId: 3,
  },
  "e3-a5-c7": {
    linguisticTermId: 4,
    criteria: 7,
    alternative: 5,
    expertId: 3,
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
