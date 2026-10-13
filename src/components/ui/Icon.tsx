const paths = {
  external: "M15 3h6v6m0-6-10 10M10 3H3v18h18v-7",
  arrow: "M5 12h14m-6-6 6 6-6 6",
  chevron: "m6 9 6 6 6-6",
  search: "M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  scales: "M12 3v18M5 21h14M3 7h18M6 7 2 15h8L6 7Zm12 0-4 8h8l-4-8Z",
  book: "M12 5v16M12 5C8 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-6-2-10 1Z",
  people: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
  close: "m6 6 12 12M6 18 18 6",
} as const;

export function Icon({ name, size = 20, className = "" }: { name: keyof typeof paths; size?: number; className?: string }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}><path d={paths[name]} /></svg>;
}
