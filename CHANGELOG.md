# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add [Rails System Testing](https://guides.rubyonrails.org/testing.html#system-testing), with only one implemented test for now.
- Add [Solargraph](https://solargraph.org/) for better autocomplete in development.
- Add VS Code launch configs to allow easy running and debugging of both Rails/Ruby and client/Javascript.

### Changed

- Replace [jQuery UI Sortable](https://jqueryui.com/sortable/) with [Sortable](https://github.com/SortableJS/Sortable).
- Update installed VS Code extensions for dev container to match recommended extensions.

### Fixed

- Fix duplicate element ID warnings for items.
- Update bundler to 2.x in dev container so `Gemfile` works as expected.

### Removed

- Remove CoffeeScript, replace with plain Javascript.

## [1.0.3]

### Added

- Use [Prettier](https://prettier.io/) for all formatting.
- Use [RuboCop](https://docs.rubocop.org/) for linting.
- Use `rake`/`rails` for common tasks.

### Changed

- Apply [Prettier](https://prettier.io/) formatting to all supported files.

## [1.0.2]

### Fixed

- Fix edit item display issue in Chrome.

## [1.0.1]

### Added

- Add a version file for reference.
- Display version in app footer.

## [1.0.0]

### Added

- First "released" version.
