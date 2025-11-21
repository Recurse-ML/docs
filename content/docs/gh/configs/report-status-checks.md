---
title: Report Status Checks
---

The `report_status_checks` option in the `.recurseml.yaml` configuration file controls whether Recurse ML posts its analysis results as GitHub status checks on pull requests.

## Configuration

To enable status checks, set `report_status_checks` to `true` in your `.recurseml.yaml` file:

```yaml
report_status_checks: true
```

If omitted or set to `false`, RML will still post inline comments but will not create status check entries.

## Behavior

When `report_status_checks` is enabled:

- A status check named **Recurse ML** will appear in the **Checks** tab of your pull request.
- It will display a summary of the analysis:
  - ✅ Passed if no issues were found
  - ❌ Failed if bugs were detected
- Clicking the check will show more details, including direct links to affected lines.

## Compatibility

This setting works independently of other configuration options. You can use it alongside custom [rules](/gh/configs/rules) or with the default RML behavior.

## Example

```yaml
report_status_checks: true

# Rules directory containing .mdc files
rules: .rules/
```

With this configuration, any bugs detected by RML or violations of custom rules will trigger a failed status check on the pull request.

For more information on creating custom rules, see the [Rules documentation](/gh/configs/rules).

## Default Behavior

If the `report_status_checks` setting is not defined, RML defaults to `true`. This means analysis results will be shown as inline comments and status checks.
