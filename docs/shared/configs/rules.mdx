---
title: Custom Rules
---

The `custom_rules` section of the `.recurseml.yaml` config file allows you to define your own rules that tailor how Recurse ML analyzes specific parts of your codebase. These rules help you enforce project-specific patterns, coding guidelines, or restrictions beyond Recurse ML's default behavior.

## Purpose

Custom rules let you:

- Apply specific checks to specific files
- Annotate project-specific conventions or review guidelines
- Extend the analysis surface without modifying core logic

## Location and Discovery

The `.recurseml.yaml` file:

- Must be named `.recurseml.yaml`
- Can be placed anywhere in your repository
- Is located by a recursive search from the project root
- Only the **first** config file found is used

## Schema

Each entry in the `custom_rules` list must be a valid object with three required fields:

| Field              | Type           | Required | Description                                     |
| ------------------ | -------------- | -------- | ----------------------------------------------- |
| `name`             | string         | Yes      | A unique name for the rule                      |
| `applicable_files` | list of string | Yes      | Shell-style glob patterns to match target files |
| `description`      | string         | Yes      | A human-readable explanation of the rule        |

## Example

```yaml
custom_rules:
  - name: "require-docstrings"
    applicable_files:
      - "*.py"
    description: "All Python functions must have docstrings"
  - name: "no-todo-comments"
    applicable_files:
      - "*.js"
      - "*.ts"
    description: "Disallow TODO comments in production code"
```

## Supported Glob Patterns

`applicable_files` supports Unix shell-style wildcards:

- `"*.py"` — All Python files
- `"src/*.js"` — JS files in the `src` directory
- `"src/**/utils/*.ts"` — Deeply nested TS utility files
- `"*.env"` — Hidden environment files

### Valid Configuration Example

```yaml
custom_rules:
  - name: "require-docstrings"
    applicable_files:
      - "*.py"
    description: "All Python functions must have docstrings"
```

### Partially Valid Configuration Example (only valid rules are loaded)

```yaml
custom_rules:
  - name: "valid_rule"
    applicable_files:
      - "*.py"
    description: "Valid rule"
  - name: "invalid_rule"
    # missing applicable_files and description
```

### Invalid Configuration Example

```yaml
custom_rules: "not_a_list"
```

## Default Behavior

If no custom rules are provided Recurse ML will perform its default analysis without any project-specific rules