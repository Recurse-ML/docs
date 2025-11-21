---
title: Config File Overview
sidebar_position: 0
---

The `.recurseml.yaml` config file allows you to customize how RML analyzes your repository. This section provides an overview of the configuration file, its structure, and how to use it effectively with the CLI.

## File Name and Location

- The configuration file must be named `.recurseml.yaml` or `.recurseml.yml`.
- It can be placed anywhere in your repository. RML will search recursively from the project root and use the **first** `.recurseml.yaml` file it finds.
- If multiple config files exist, only the first match is used.
- We recommend placing it in the root of your repository for clarity and consistency.

## Supported Configuration

The config file currently supports the following keys:

| Key                    | Type                | Required | Default | Description                                       |
| ---------------------- | ------------------- | -------- | ------- | ------------------------------------------------- |
| `report_status_checks` | boolean             | No       | `false` | Whether to report results as GitHub status checks |
| `rules`                | string  \| string[] | No       | `[]`    | Path(s) to rule directories                       |

## Report Status Checks

The `report_status_checks` setting determines whether RML will report analysis results as GitHub status checks on pull requests.

To learn more about this feature, see the [Report Status Checks documentation](./report-status-checks.md).

## Rules

The `rules` setting allows you to specify directories containing rule files in the `.mdc` format. Each rule file can define custom checks and constraints for your codebase.

To learn how to define and use these rules, see the [Rules documentation](./rules.mdx).

## Example Configuration

```yaml
report_status_checks: true

# Single rules directory
rules: .rules/

# Or multiple directories
# rules:
#   - .rules/clean_code/
#   - .project_rules/
```

## Error Handling

- If the config file is missing, default values are used.
- If the YAML is invalid or any rules are malformed, they will be ignored without affecting the rest of the analysis.
- Valid sections of the config will still be applied even if others fail.
