import type { ArticleBlock } from "@/content";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <>{blocks.map((block, i) => {
    if (block.type === "heading") return block.level === 2 ? <h2 key={i}>{block.text}</h2> : <h3 key={i}>{block.text}</h3>;
    if (block.type === "quote") return <blockquote key={i}><p>{block.text}</p></blockquote>;
    if (block.type === "list") {
      const List = block.ordered ? "ol" : "ul";
      return <List key={i}>{block.items.map((item, n) => <li key={n}>{item}</li>)}</List>;
    }
    return <p key={i}>{block.text}</p>;
  })}</>;
}
