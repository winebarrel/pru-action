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
      - **/*.go
      - Makefile
permissions:
  contents: write
jobs:
  pru:
    name: pru
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: winebarrel/pru-action@master
        with:
          # version: v0.2.2
          # repo: owner/nama
          # github-token: ***
          paths: |
            **/*.go
            Makefile
```
