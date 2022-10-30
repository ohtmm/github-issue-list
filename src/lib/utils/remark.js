import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtml from "remark-html";

export function parseMarkdown(md) {
  const ast = remark().use(remarkFrontmatter).parse(md);
  return remark().use(remarkHtml).stringify(ast);
}
