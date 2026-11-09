export const fields = {
  name: { required: true, max: 100, type: "text", autocomplete: "name" },
  company: { required: true, max: 120, type: "text", autocomplete: "organization" },
  email: { required: true, max: 254, type: "email", autocomplete: "email" },
  phone: { required: false, max: 40, type: "tel", autocomplete: "tel" },
  budget: { required: false, max: 100, type: "text", autocomplete: "off" },
  dates: { required: false, max: 150, type: "text", autocomplete: "off" },
  message: { required: true, max: 2500, type: "textarea", autocomplete: "off" },
} as const;

export type Field = keyof typeof fields;
export const fieldNames = Object.keys(fields) as Field[];

export function validateInquiry(input: Record<string, unknown>) {
  const data = {} as Record<Field, string>;
  const invalid = fieldNames.filter(field => {
    const raw = input[field];
    const value = typeof raw === "string" ? raw.trim() : "";
    data[field] = value;
    const { required, max } = fields[field];
    return (raw !== undefined && typeof raw !== "string") || (required && !value) || value.length > max ||
      (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ||
      (field === "phone" && value !== "" && !/^[+\d().\s-]{5,40}$/.test(value));
  });
  return { data, invalid };
}
