# Agent Guidelines for EffectDev

## Commands
- **Lint**: `npm run lint` (Biome check with auto-fix)
- **Format**: `npm run format` (Biome format with auto-fix)
- **Test**: No test framework configured - add tests if needed
- **Type check**: Use `tsc --noEmit` for TypeScript validation

## Code Style
- **Formatting**: Use tabs for indentation, double quotes for strings
- **Imports**: Auto-organize imports (Biome handles this)
- **TypeScript**: Strict mode enabled, Effect.js language service plugin
- **File structure**: Main entry point is index.ts, place source code in ./src/
- **Effect.js**: Use Effect.succeed() for success, Effect.fail() for errors
- **Interfaces**: Use readonly properties for immutable data structures
- **Error handling**: Return Effect.Effect<T, Error> types for operations that can fail

