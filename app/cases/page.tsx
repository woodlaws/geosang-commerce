import { permanentRedirect } from "next/navigation";

export default function RemovedCasesPage() {
  permanentRedirect("/campaigns");
}
