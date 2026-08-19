export type FormState = "idle" | "sending" | "success" | "error" | "demo";

export async function submitForm(endpoint: string | undefined, data: Record<string, FormDataEntryValue>) {
  if (!endpoint) return { state: "demo" as const, message: "개발용 확인이 완료되었습니다. 현재는 실제 접수되지 않습니다." };
  const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  if (!response.ok) throw new Error("전송에 실패했습니다.");
  return { state: "success" as const, message: "접수가 완료되었습니다. 담당자가 확인 후 연락드리겠습니다." };
}
