import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Villa Solaris — Private Beachfront Estate, Halkidiki" },
      { name: "description", content: "Villa Solaris — a private beachfront estate in Halkidiki." },
    ],
  }),
});

function Index() {
  return (
    <iframe
      src="/villa.html"
      title="Villa Solaris"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
