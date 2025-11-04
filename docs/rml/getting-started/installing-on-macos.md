---
title: Installing on macOS
---

## Prerequisites

- macOS 13 or later (Actively supported versions of macOS)
- A terminal application (e.g. Terminal or iTerm2)
- Git must be installed and available in your `PATH`

## Installation

To install RML, open your terminal and run the following command:

```bash
curl -L install.recurse.ml | sh
```

This script will download and install the latest version of RML onto your system.

Once installed, you can verify that RML is available by running:

```bash
rml --version
```

If the command returns `🐞 Running rml version {version}`, RML has been installed successfully and is ready to use.

## Next Steps

Now that RML is installed, you can:

- Check out the [Quickstart guide](/rml/) to run your first analysis
- Learn about [configuration options](/rml/configs/config-file-overview) 
- Create custom [rules](/rml/configs/rules) for your project

## Troubleshooting

If you encounter any issues during installation, please check out the [help and support](../help-and-support.mdx) section.