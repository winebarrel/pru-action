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
      - uses: winebarrel/pru-action@v0.3.0
        with:
          # version: v0.3.0
          # repo: owner/nama
          # github-token: *** # NOTE: If you want to trigger GitHub Actions in a merge, please use GitHub Apps or PAT
          # bases: main,master
          paths: |
            **/*.go
            Makefile
```

## Example

see https://github.com/winebarrel/pru-example
