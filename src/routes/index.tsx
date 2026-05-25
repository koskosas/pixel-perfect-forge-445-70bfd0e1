import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Villa Varellia — Private Beachfront Estate, Kallithea, Halkidiki" },
      { name: "description", content: "Villa Varellia — a private beachfront estate in Kallithea, Halkidiki." },
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
