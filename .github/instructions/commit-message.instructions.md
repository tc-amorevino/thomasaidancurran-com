# Github Copilot Commit Message Guidelines

- use prior commit messages as a reference for structure and style
- generally, write short and concise commit messages
- Never exceed more than 75 characters for the entire commit message
- you _must_ select one of the following types:
  - 'chore'
  - 'ci'
  - 'feat'
  - 'fix'
  - 'revert'
  - 'test'
- then optionally, in brackets select one of the following scopes. If you do select a scope, it must be one of the
  following:
  - 'ux'
  - 'dx'
  - 'wip'
  - 'data'
- then write the commit message
- here are a few examples of how commit should look like:
  - chore(data): added new blog post
  - fix(ux): adjusted footer padding to match the design system
  - ci: updated version to 1.2.7
  - feat(dx): added new copilot custom instructions
