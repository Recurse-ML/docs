---
title: CLI Reference
---

Complete reference for the RML command-line interface, including commands and flags.

## CLI Commands

The primary way to use RML is through the `rml` command. It analyzes file changes in your Git repository and reports bugs introduced by those changes.

### Usage

```
rml [OPTIONS] [TARGET_FILENAMES]...
```

RML compares two Git states and reports any bugs detected in the changes. By default, it compares the current working directory (unstaged changes) against `HEAD`.

### Examples

```
rml file.py
```

Analyze uncommitted changes to `file.py`.

```
rml file.py --from HEAD^
```

Compare `file.py` against its version from one commit ago.

```
rml file.py --from main --to feature
```

Compare changes to `file.py` between the `main` and `feature` branches.

***

## CLI Flags

| Flag                | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| `--from GIT_REF`    | Git reference for the **older** state. Defaults to `HEAD`.                    |
| `--to GIT_REF`      | Git reference for the **newer** state. Defaults to current working directory. |
| `--version`         | Displays the current version of RML and exits.                                |
| `--help`            | Shows the help message and exits.                                             |
| `-md`, `--markdown` | Outputs results in markdown format. Ideal for LLM or programmatic use.        |

You can combine these flags to tailor how RML analyzes your changes and how the results are formatted.
