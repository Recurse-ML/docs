---
title: What is Recurse ML?
sidebar_position: 0
---

Recurse ML is a GitHub App that performs automated reviews of pull request diffs using AI-powered static analysis. It detects bugs introduced by recent code changes and reports them directly in the pull request discussion or as GitHub status checks.

Once installed, Recurse ML runs automatically on every new PR. It analyzes only the changed lines, so results are relevant to the current changes in your pull request.


## How It Works

Once installed on a GitHub repository, Recurse ML automatically analyzes pull requests as soon as they are opened.

1. It captures the code diff.
2. It runs static analysis powered by our custom agentic AI solution.
3. It posts any comments or status checks for identified issues.

Recurse ML's AI agents are purpose-built for analyzing diffs. They evaluate code changes in context and flag potential bugs that are relevant and actionable, without overwhelming the review with unnecessary suggestions.

## Key Features

- **Change-Based Analysis**
  Recurse ML focuses on analyzing changes made during a PR. This makes it ideal for catching issues introduced during recent changes without needing to reanalyze the entire codebase.

- **GitHub Integration**
  Recurse ML operates directly through GitHub. All the information you need is directly in your PR discussion, so that you can focus on acting on any issues raised.

- **Targeted Feedback**
  Rather than flooding the user with warnings, Recurse ML restricts its output to issues relevant to recent changes, making it easier to act on the feedback.

## When to Use Recurse ML
Recurse ML is useful in a wide range of development workflows. Whether you're making small tweaks to a file or working on a larger feature branch, Recurse ML provides a quick way to check your changes for potential bugs before committing them. It works especially well as a last-minute safeguard before pushing code into main.

Recurse ML is not intended to replace full-code static analyzers. Instead, it complements them by focusing on the most recent changes to offer fast and relevant feedback during development.
