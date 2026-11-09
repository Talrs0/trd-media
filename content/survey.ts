export const survey = {
  responses: 346,
  undergraduates: 327,
  engineering: 167,
  privateDorm: 146,
  universityDorm: 49,
  collectionSources: 10,
  // Slide 9, embedded chart3.xml in TRD_Company_Profile.pptx.
  spending: [
    { min: 0, max: 299, count: 21 },
    { min: 300, max: 599, count: 54 },
    { min: 600, max: 999, count: 70 },
    { min: 1000, max: 1999, count: 130 },
    { min: 2000, max: null, count: 71 },
  ],
  appendix: [
    [178, 154, 14],
    [61, 75, 73, 121, 9, 7],
    [132, 76, 64, 60, 14],
    [70, 186, 90],
  ],
} as const;

export const dormRespondents = survey.privateDorm + survey.universityDorm;
export const highSpend = survey.spending.filter(band => band.min >= 1000).reduce((total, band) => total + band.count, 0);
export const largestBand = survey.spending.reduce((largest, band) => band.count > largest.count ? band : largest);
export const respondentShare = (count: number) => (100 * count / survey.responses).toFixed(1) + "%";
