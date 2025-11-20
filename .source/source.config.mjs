// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var gh = defineDocs({
  dir: "content/gh"
});
var rml = defineDocs({
  dir: "content/rml"
});
var remcp = defineDocs({
  dir: "content/remcp"
});
var spx = defineDocs({
  dir: "content/spx"
});
var source_config_default = defineConfig({});
export {
  source_config_default as default,
  gh,
  remcp,
  rml,
  spx
};
