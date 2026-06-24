// Remark plugin to inject a default layout into Markdown frontmatter
// options: { default: string, overrides: Record<string, string> }
// overrides keys are path prefixes matched against the file path (e.g. "posts/")
export function remarkDefaultLayout(options) {
  const { default: defaultLayout, overrides = {} } =
    typeof options === 'string'
      ? {
          default: options,
        }
      : options;

  return (_tree, file) => {
    const frontmatter = file.data.astro?.frontmatter;
    if (!frontmatter || frontmatter.layout) return;

    const filePath = file.history[0] ?? '';
    const matched = Object.entries(overrides).find(([prefix]) => filePath.includes(prefix));
    frontmatter.layout = matched ? matched[1] : defaultLayout;
  };
}
