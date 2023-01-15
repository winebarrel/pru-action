# pru-action

GitHub action for [pru](https://github.com/winebarrel/pru).

## Usage

```yaml
name: pru
on:
  push:
    branches:
      - main
    paths:
      - "**/*.go"
      - Makefile
permissions:
  contents: write
  pull-requests: write
jobs:
  pru:
    name: pru
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: winebarrel/pru-action@v0.1.0
        with:
          # version: v0.2.2
          # repo: owner/nama
          # github-token: ***
          paths: |
            **/*.go
            Makefile
```
