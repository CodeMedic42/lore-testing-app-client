# lore-testing-app-client

A small React app consuming `@acme/ui-kit`, used as a fixture for the manual tests
in [living-ai-knowledge](https://github.com/CodeMedic42/living-ai-knowledge).

Published as `@acme/contact-form`. It declares a dependency on the component
library but deliberately has **no `node_modules` and no copy of the library's
source** — so a question about what the library offers cannot be answered by
reading anything here. That is what makes it a test: anything an agent produces
must have come from the knowledge graph.

`.lak.json` points any agent session in this repository at a throwaway graph, so
testing never writes to a real one.
