import assert from "node:assert/strict";
import test from "node:test";
import { submitForm } from "../lib/submit-form";

test("configured form endpoint receives JSON with POST", async () => {
  const originalFetch = globalThis.fetch;
  let captured: { url?: string; method?: string; contentType?: string | null; body?: unknown } = {};
  globalThis.fetch = async (input, init) => {
    captured = {
      url: String(input),
      method: init?.method,
      contentType: new Headers(init?.headers).get("content-type"),
      body: JSON.parse(String(init?.body)),
    };
    return new Response("{}", { status: 200 });
  };
  try {
    const result = await submitForm("https://forms.example.test/intake", { submissionType: "인플루언서", privacyConsent: true });
    assert.deepEqual(captured, {
      url: "https://forms.example.test/intake",
      method: "POST",
      contentType: "application/json",
      body: { submissionType: "인플루언서", privacyConsent: true },
    });
    assert.equal(result.state, "success");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("missing endpoint never submits", async () => {
  await assert.rejects(() => submitForm("", {}), /FORM_ENDPOINT_MISSING/);
});
