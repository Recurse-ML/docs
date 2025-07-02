---
title: What is RML?
sidebar_position: 0
---

RML is a tool for detecting bugs in source code by analyzing changes made within a Git repository. It is designed to integrate seamlessly into the developer workflow, requiring minimal setup and producing actionable insights based on code modifications.

## Purpose

The core purpose of RML is to help developers catch bugs early by analyzing code changes before they are committed. It focuses specifically on **unstaged changes**, meaning the modifications that appear in the output of `git diff` without any additional arguments.

## How It Works

RML performs static analysis on files in a Git repository, comparing their current state against a specified reference (such as `HEAD`, a specific commit, or a branch). This allows RML to understand what has changed and identify potential issues introduced by the modification.

The tool is designed to be as unobtrusive as possible. Once installed, developers can simply edit a file and run RML to see any potential bugs that have been introduced. It integrates into the existing development environment without requiring any significant changes to workflow.

## Key Features

- **Change-Based Analysis**  
  RML focuses on analyzing differences between versions of a file. This makes it ideal for catching issues introduced during recent changes without needing to reanalyze the entire codebase.

- **Git Integration**  
  RML operates directly within local Git repositories. It can use Git references to specify exactly which versions of a file should be compared.

- **Targeted Feedback**  
  Rather than flooding the user with warnings, RML restricts its output to issues relevant to recent changes, making it easier to act on the feedback.

## When to Use RML

RML is useful in a wide range of development workflows. Whether you're making small tweaks to a file or working on a larger feature branch, RML provides a quick way to check your changes for potential bugs before committing them. It works especially well as a last-minute safeguard before pushing code or opening a pull request.

RML is not intended to replace full-code static analyzers. Instead, it complements them by focusing on the most recent changes, offering fast and relevant feedback during active development.
