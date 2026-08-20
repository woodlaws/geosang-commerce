export type FormKind = "creator" | "brand";

const endpoints: Record<FormKind, string> = {
  creator: process.env.NEXT_PUBLIC_CREATOR_FORM_ENDPOINT || "",
  brand: process.env.NEXT_PUBLIC_BRAND_FORM_ENDPOINT || "",
};

export function getFormEndpoint(kind: FormKind) {
  const value = endpoints[kind].trim();
  if (!value) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
}
