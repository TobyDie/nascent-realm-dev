import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/14-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "HairQare — 14-Day Challenge" },
      {
        name: "description",
        content:
          "The 14-Day HairQare Challenge — stop hair loss and rebuild your hair in two weeks.",
      },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <iframe
      src="/14-the-haircare-challenge/index.html"
      title="HairQare 14-Day Challenge"
      className="block w-screen h-screen border-0"
    />
  );
}