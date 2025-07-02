---
title: Quickstart
sidebar_position: 1
---

Get up and running with RML in just a few steps. This guide will show you how to install RML and run your first analysis as quickly as possible.

## 1. Install RML

RML can be installed on Linux, macOS, and Windows, or used via Docker. Choose the method that works best for your environment:

- [Installing on Linux](../getting-started/installing-on-linux)
- [Installing on macOS](../getting-started/installing-on-macos)
- [Installing on Windows](../getting-started/installing-on-windows)
- [Installing with Docker](../getting-started/installing-with-docker)

For the sake of this quickstart, we will use macOS as an example. If you are using a different operating system, please refer to the appropriate installation guide.

Open your terminal and run the following command:
```bash
curl install.recurse.ml | sh
```

## 2. Navigate to Your Git Repository

RML only works inside of Git repositories. To begin, navigate to your project directory:

```bash
cd path/to/your/project
```

Make sure your project is initialized as a Git repository. If it is not, run:


```bash
git init
```

## 3. Run RML

Once inside the repository, you can run RML against a file you've recently modified:

```bash
rml path/to/your/file.js
```

RML will analyze unstaged changes in the specified file and report any bugs it detects.

🎉 That's it! You're now ready to start using RML to catch bugs early in your development process.
