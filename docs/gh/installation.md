---
title: Installation
sidebar_position: 2
---

Recurse ML can be installed as a GitHub App to automatically analyze pull requests for bugs using AI-powered static analysis. This guide walks through the installation steps in more detail.

## How to Install Recurse ML

1. Visit the [Recurse ML GitHub App page](https://github.com/apps/recurseml).
2. Click **Configure**.
3. Select the account or organization where you want to install the app:
   - Choose your personal GitHub account, or
   - Choose an organization you are a member of
4. Decide which repositories to enable:
   - Select **All repositories**, or
   - Manually select individual repositories
5. Click **Install**.
6. Follow the GitHub authentication prompts, if required.

Once the installation completes, Recurse ML will be enabled for the selected repositories.

## Permissions Required

During installation, GitHub will prompt you to approve specific permissions that Recurse ML needs to function:

- **Read access to code** – to review diffs and perform analysis
- **Read and write access to pull requests** – to add comments and status checks
- **Read access to commit metadata** – to annotate relevant changes accurately

## What Happens Next?

With the app installed:

- Recurse ML will automatically analyze any new pull requests, or
- Analyze existing pull requests

You do not need to run any CLI tools or configure CI workflows. Everything is handled through the GitHub App.

***

🎉 Recurse ML is now installed and ready to start reviewing pull requests in your repository!

## Next Steps

Once you have Recurse ML up and running, you may want to:

- Create custom [rules](/gh/configs/rules) to enforce project-specific coding standards
- Configure [status checks](/gh/configs/report-status-checks) to integrate with your workflow
- Review the complete [configuration options](/gh/configs/config-file-overview)
