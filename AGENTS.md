<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## React Compiler is enabled

`reactCompiler: true` is set in `next.config.ts`. Do not manually memoize with `useMemo`, `useCallback`, or `React.memo` — the compiler handles this automatically. Write plain component code and let it optimize.
