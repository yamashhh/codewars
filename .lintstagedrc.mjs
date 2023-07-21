const COMMANDS_FOR_JAVASCRIPT = ["pnpm lint", "pnpm format:fix"];

export default {
  "*.ts": ["pnpm type-check", ...COMMANDS_FOR_JAVASCRIPT],
  "*.{js,cjs,mjs}": COMMANDS_FOR_JAVASCRIPT,
  "!(*.{js,cjs,mjs,ts})": "pnpm format:fix",
};
