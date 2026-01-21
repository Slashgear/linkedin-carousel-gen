# Contributing

Thanks for your interest in contributing to LinkedIn Carousel Generator!

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/linkedin-carousel-gen.git`
3. Install dependencies: `bun install`
4. Create a branch: `git checkout -b feature/your-feature`

## Development

```bash
bun install          # Install dependencies
bun run storybook    # Start Storybook for component development
bun run generate     # Test PDF generation
bun run typecheck    # Type check
bun run lint         # Lint code
bun run format       # Format code
```

## Before Submitting

Please ensure:

- [ ] `bun run typecheck` passes
- [ ] `bun run lint` passes
- [ ] `bun run format:check` passes
- [ ] Examples build successfully: `bun run examples/*.tsx`
- [ ] New features have Storybook stories

## Pull Request Process

1. Update documentation if needed
2. Add/update Storybook stories for UI changes
3. Ensure CI passes
4. Request review from maintainers

## Adding New Slides

1. Create component in `src/slides/generic/`
2. Export from `src/slides/generic/index.ts`
3. Add Storybook stories in `src/stories/slides/`
4. Update `docs/USAGE.md` if needed

## Adding New Themes

1. Create preset in `src/theme/presets/`
2. Export from `src/theme/index.ts`
3. Update `docs/THEMES.md`

## Code Style

- TypeScript strict mode
- Formatting with oxfmt
- Linting with oxlint

## Questions?

Open an issue for any questions or suggestions.
