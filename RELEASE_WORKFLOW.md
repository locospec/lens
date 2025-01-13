# Release Workflow Documentation

This document outlines how releases are managed in our UI component monorepo, which consists of two primary packages: **elements** and **blueprint** _(for now)_. We follow a structured release process using **Auto** to automate versioning, changelog generation, and npm package releases. This process supports alpha, beta, and stable releases, all based on the branching strategy and pull requests (PRs) with specific labels.

## Table of Contents

1. [Overview](#overview)
2. [Branching Strategy](#branching-strategy)
3. [Versioning](#versioning)
   - [Alpha Releases](#alpha-releases)
   - [Beta Releases](#beta-releases)
   - [Stable Releases](#stable-releases)
4. [Release Labels](#release-labels)
5. [Auto Workflow](#auto-workflow)
   - [Changelog Generation](#changelog-generation)
   - [Releasing to npm](#releasing-to-npm)
6. [Release Process for Elements and Blueprint](#release-process-for-elements-and-blueprint)
7. [Handling Pre-releases](#handling-pre-releases)

---

## 1. Overview

We use **Auto** for automating releases, which generates release notes, updates changelogs, bumps versions, and publishes packages to npm based on PR labels. The workflow covers pre-releases (alpha and beta) and normal semantic versioning (major, minor, patch).

### Key Features:

- Automatic changelog generation.
- Pre-releases (alpha, beta) based on specific branches.
- Stable releases based on merged pull requests.
- Semantic versioning based on PR labels.

---

## 2. Branching Strategy

We maintain different branches for pre-releases and stable releases:

- **`alpha` branch**: For alpha pre-releases. All alpha-level changes should be merged into this branch.
- **`beta` branch**: For beta pre-releases. Beta features should be more stable than alpha.
- **`main` branch**: For production-ready code. Once the code on the `beta` branch is ready, it gets merged into `main` to trigger stable releases.

### Workflow:

1. **Feature branches**: New features and fixes are developed in individual branches.
2. **Pull Requests (PRs)**: Contributions are merged into `alpha` or `beta` based on the release type.
3. **Release triggers**: The `auto` tool identifies the branch and labels to determine the type of release.

---

## 3. Versioning

The versioning strategy follows **semantic versioning** principles, but we also handle pre-releases like alpha and beta.

### Alpha Releases

- **Branch**: `alpha`
- **Versioning**: Versions are suffixed with `alpha.x` (e.g., `1.0.0-alpha.1`).
- **Purpose**: For features that are experimental and not yet ready for beta testing.

### Beta Releases

- **Branch**: `beta`
- **Versioning**: Versions are suffixed with `beta.x` (e.g., `1.0.0-beta.2`).
- **Purpose**: For features that are feature-complete but require testing before release.

### Stable Releases

- **Branch**: `main`
- **Versioning**: Follows semantic versioning (`x.y.z`), with major, minor, and patch versions. For example, `1.0.0`, `1.1.0`, or `1.0.1`.

---

## 4. Release Labels

We use specific labels on PRs to determine how a release is handled. These labels map to the appropriate semantic versioning or pre-release type:

- **`major`**: Indicates a breaking change, triggers a major version bump (`1.0.0` → `2.0.0`).
- **`minor`**: Adds a new feature in a backward-compatible way, triggers a minor version bump (`1.0.0` → `1.1.0`).
- **`patch`**: Fixes a bug without introducing breaking changes, triggers a patch version bump (`1.0.0` → `1.0.1`).
- **`skip-release`**: Marks PRs that don’t require a new release (e.g., documentation updates).
- **`prerelease`**: Used for alpha or beta releases. Automatically adds `alpha` or `beta` based on the target branch.
- **`dependencies`**: Update one or more dependency versions.
- **`enhancement`**: Introduces a new feature or request.
- **`released`**: This PR has been merged, and version increment is complete. Adding this label is handled by the Auto plugin `@auto-it/released`.

---

## 5. Auto Workflow

### Changelog Generation

When a **PR** is merged, **Auto** generates release notes based on the labels attached to the PR and updates the changelog file (`CHANGELOG.md`). It ensures that the changelog includes details about all changes, features, and bug fixes in a release.

### Releasing to npm

Auto is configured to automatically publish packages to npm after a successful PR merge. The release is published based on the branch it is merged into:

- **`alpha` branch**: Alpha releases are published with an `alpha` tag.
- **`beta` branch**: Beta releases are published with a `beta` tag.
- **`main` branch**: Stable releases are published with the `latest` tag.

---

## 6. Release Process for Elements and Blueprint

We handle releases for both **elements** and **blueprint** packages in the same way, but they are versioned independently.

### Steps for Releasing:

1. **Develop Features/Fixes**: All new features or bug fixes are developed on individual branches.
2. **Submit PR**: Submit a pull request to the appropriate branch (`alpha` or `beta`).
3. **Add Labels**: Add the appropriate versioning label (`major`, `minor`, `patch`, `prerelease`, or `skip-release`).
4. **Merge**: Once the PR is merged, Auto automatically:
   - Generates the changelog.
   - Bumps the version.
   - Publishes the package to npm under the correct tag.

---

## 7. Handling Pre-releases

### Alpha Releases

- **Branch**: `alpha`
- **Label**: `prerelease`
- **Version**: `x.y.z-alpha.n`
- **NPM Tag**: `alpha`

### Beta Releases

- **Branch**: `beta`
- **Label**: `prerelease`
- **Version**: `x.y.z-beta.n`
- **NPM Tag**: `beta`

---

## Conclusion

By using **Auto** and a well-defined branching strategy, we automate the release of both alpha/beta pre-releases and stable releases for our `elements` and `blueprint` packages. Each PR labeled appropriately triggers the correct version bump and npm release, allowing us to maintain a smooth and predictable release cycle.
