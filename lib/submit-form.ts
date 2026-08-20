export type FormState = "idle" | "sending" | "success" | "error";
export type FormPayload = Record<string, string | string[] | boolean>;

export async function submitForm(endpoint: string, data: FormPayload) {
  if (!endpoint) throw new Error("FORM_ENDPOINT_MISSING");
  const controller = new AbortController();
  const timeout = globalThis.setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error("FORM_SUBMIT_FAILED");
    return { state: "success" as const, message: "접수가 완료되었습니다. 담당자가 확인 후 연락드리겠습니다." };
  } finally {
    globalThis.clearTimeout(timeout);
  }
}
