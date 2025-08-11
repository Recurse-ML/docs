# Recurse ML Docs 🤓

This repository contains the public documentation for Recurse ML. Recurse ML is an AI-powered static analysis tool that catches bugs your tests miss. Here you will find guides, examples and references for using Recurse to detect breaking changes, prevent API misuse and enforce your own coding rules from GitHub or your CLI.

The website is hosted at: [docs.recurse.ml](https://docs.recurse.ml)

## Developing locally

Our documentation uses [docusaurus](https://docusaurus.io) so to get started, clone the repository and run:

```bash
npm install
```

Then to run the docs locally, run the following command:

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Building the project

Before submitting a PR, please verify that the project builds without any errors. This can be achieved by running:

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Reporting Issues
If you find an error or outdated information in the docs, please create an issue in this repository.

## Contributing
We welcome contributions of all sizes. Please open an issue to discuss major changes before submitting a pull request.

## License
This documentation is licensed under the MIT License. See LICENSE for details.