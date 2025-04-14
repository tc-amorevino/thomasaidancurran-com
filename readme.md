<!-- markdownlint-disable MD041 -->
<!-- markdown-link-check-disable-next-line -->
<!-- markdown-link-check-disable -->

![CI Build](https://github.com/tc-amorevino/thomasaidancurran-com/actions/workflows/pr-opened-main.yml/badge.svg)

<!-- markdown-link-check-enable -->

# thomasaidancurran.com official website repo

Website: [thomasaidancurran.com](https://thomasaidancurran.com)

## Installation

## Runtime

> (!) Note: The current build process uses the engines.node version specified in
> the `.nvmrc` file.

For local development load the required node version with nvm:

Load the required node version with nvm:

```zsh
nvm use
```

Install the required dependencies:

```zsh
npm install
```

### Workspace

Head over to the recommended [VSCode extensions](./.vscode/extensions.json) and
consider installing them for a better development experience.

## Development

### Related Docs

The following products are used throughout the project:

| Product  | Docs                                                 | Changelog                                                                                        |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Astro    | [Docs](https://docs.astro.build/en/getting-started/) | [Changelog](https://github.com/withastro/astro/blob/refs/heads/main/packages/astro/CHANGELOG.md) |
| Tailwind | [Docs](https://tailwindcss.com/docs/installation)    | [Changelog](https://github.com/tailwindlabs/tailwindcss/blob/master/CHANGELOG.md)                |
| Shadcn   | [Docs](https://ui.shadcn.com/docs)                   | [Changelog](https://ui.shadcn.com/docs/changelog)                                                |

### Linting

Before committing, or more specifically, before creating a pull request, run the
following command to ensure the code is linted and formatted correctly:

```zsh
npm run lint
```

> **TODO:** Add spell checking to the linting process.

This will check the code for any linting errors, including prettier formatting
guidelines.

### Commit Messages

The project encourages the
[Conventional Commits](https://www.conventionalcommits.org/) standard for commit
messages and branch naming. This is to ensure a consistent and readable commit
history. The
[Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor)
VSCode extension can be installed to help with drafting the commit messages. It
adds a button (pencil icon) to the source control tab in VSCode, which opens a
form to create a commit message.

Example commit message:

```zsh
feat(data)!: changed main navigation component to client side load
```

## Deployment

Deployments are handled by GitHub actions, which are triggered by a branch merge
to the `live` branch. The action builds the project and stored the `dist` folder
to github pages. Code pushes to`live` branch directly are disabled. Use pull
requests to merge changes to these branches and trigger the deployment.
