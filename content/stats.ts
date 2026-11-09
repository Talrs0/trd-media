export const community = { qsEnrollment: 33367, qsUndergraduate: 91.8, engineeringRank: 1, rankYear: 2025 } as const;
export const influence = { friends: 56, social: 39, year: 2023, sample: 1008, ages: "16–26", students: 28 } as const;
export const salaries = {
  year: 2026, page: 36, experience: ["0–3", "3–5"],
  ranges: [[[25000, 45000], [35000, 50000]], [[25000, 35000], [40000, 60000]]],
} as const;
export const historical = { year: 2019, sample: 400, receipts: 9812, spending: 8345 } as const;
export const oaaa = { year: 2024, sample: 1023, ages: "18–64", months: 3, actions: [47, 41, 33, 24] } as const;

export const format = {
  inches: 32, resolution: [1080, 1920], ratio: "9:16", height: 170, width: 55,
  slot: 15, loop: 10, hours: 18, extensions: ["MP4", "JPG", "PNG"],
} as const;
export const plays = { hourly: 60 / format.loop, daily: format.hours * 60 / format.loop, share: 100 * format.slot / (60 * format.loop) };
