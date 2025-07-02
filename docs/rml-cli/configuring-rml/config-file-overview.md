---
title: Config File Overview
---

## `.recurseml.yml` Overview

RML will **soon** support a project-level configuration file named `.recurseml.yml`, located at the root of your repository. This file is already recognized by the [RecurseML GitHub App](https://github.com/apps/recurseml), which uses it to configure automated checks on pull requests.

However, as of now, **RML itself does not read or use this file**. Local CLI runs of RML ignore `.recurseml.yml`, and no configuration is loaded from it.

## Current Status

- **File name:** `.recurseml.yml`
- **Location:** Repository root (convention)
- **Used by CLI:** ❌ Not yet
- **Used by GitHub App:** ✅ Yes

## What to Expect

Support for `.recurseml.yml` in the CLI is planned and will be introduced in a future release. Once supported, this file will allow you to configure default behavior for RML runs, such as which files to analyze, how to handle certain error types, and output preferences.

This documentation will be updated with schema details and usage examples once the feature is live.

To be notified about updates, please join the [Recurse ML Discord server](https://discord.gg/AREwNQfy).

## Summary

- You do **not** need `.recurseml.yml` to use RML locally.
- Support for the `.recurseml.yml` file in the CLI is coming soon.
