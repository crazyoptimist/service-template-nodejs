# NodeJS Typescript Service Template

## Style Guide

### Project Structure

- `src/main.js` is the starting point of the application, keep it short and simple.
- `src/helpers` is where we organize broken-down modules that runs business logics, create sub folders if needed.
- `src/config` is where we organize application global configurations and constants. Every environment variables should be verified(and maybe re-organized as nested objects if we prefer) in src/config. We should not read env vars directly like process.env.FOO, because it's hard to track what's used where.
- `src/utils` is where we organize utility functions that doesn't contain any business logics
- `src/common` is where we organize shared code which is reused and is shared between different modules, and is specific to this project. Create sub folders if needed.
- `src/scripts` is where we organize one-off scripts.
- `testdata` is where test sample data live. Create sub folders as needed.

### Naming Conventions

- Use `kebab-case` for folders
- Use `camelCase` for variables, functions, and files
- Use `PascalCase` for classes, types, interfaces, enums
- Use `ALL_UPPER_CASE` for constants

### Tests

- Place test files in the same folder as the code that the tests are written for.

## Development

- Node.js(> v18.x) is required
- Install dependencies

```bash
npm i
```

- Run the application

```bash
npm run dev
```

## Logging

- Structured logging with `pino`

## Documentation

- Organize design documentations into `docs` folder
