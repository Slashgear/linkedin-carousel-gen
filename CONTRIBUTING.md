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
3. **Add a changeset** (see below)
4. Ensure CI passes
5. Request review from maintainers

## Changesets and Releases

This project uses [Changesets](https://github.com/changesets/changesets) to manage versions and changelogs.

### Adding a Changeset

When you make a change that should be released, add a changeset:

```bash
bunx changeset
```

You'll be prompted to:

1. Select the type of change: `patch` (bug fix), `minor` (new feature), or `major` (breaking change)
2. Write a summary of your changes (this will appear in the changelog)

This creates a markdown file in `.changeset/` describing your change.

### What Happens on Merge

When your PR is merged to `main`:

1. The release workflow detects the changeset
2. A "Version Packages" PR is automatically created/updated
3. When maintainers merge the Version PR:
   - The version is bumped
   - CHANGELOG.md is updated
   - The package is published to GitHub Packages
   - A GitHub Release is created

### When to Add a Changeset

Add a changeset for:

- New features
- Bug fixes
- Breaking changes
- Dependency updates that affect users

Skip changesets for:

- Documentation-only changes
- Internal refactors with no user impact
- CI/tooling changes

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
