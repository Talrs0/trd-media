export function Arrow({ direction = "right" }: { direction?: "right" | "down" | "out" }) {
  const paths = { right: "M3 8h10m-4-4 4 4-4 4", down: "M8 2v9m-4-4 4 4 4-4M3 14h10", out: "M4 12 12 4M5 4h7v7" };
  return <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={paths[direction]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
