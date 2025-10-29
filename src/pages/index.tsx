import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

const META_DESCRIPTION = "Documentation for Recurse ML - an AI-powered static analysis tool that finds bugs tests and linters miss. Understands external libraries and complex codebases so you can ship fast with confidence. Works in GitHub and CLI. Can be used by Claude Code and Cursor.";
const HOME_PAGE_SECONDARY_TEXT = "Recurse ML catches bugs that tests and static analysers miss. We understand external libraries and complex internal dependencies. Our users ship fast without compromising production quality.";

function HomepageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles["header__text-container"]}>
        <h1
          className={styles["header__text-primary"]}
        >NEXT-GEN<br />STATIC ANALYSIS</h1>
        <p
          className={styles["header__text-secondary"]}
        >{HOME_PAGE_SECONDARY_TEXT}</p>
      </div>
      <div className={styles["header__art-container"]}>
        <img
          src="/img/bang.svg"
          alt="Recurse ML Logo"
          className={styles["header__art-image"]} />
      </div>
    </header>
  );
}

interface ProjectButtonProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

function ProjectButton(props: ProjectButtonProps) {
  return (
    <Link
      className={styles.projectButton}
      to={props.href}>
      <div className={styles.projectButton__imageContainer}>
        <img
          src={props.imageUrl}
          alt={props.title}
          className={styles.projectButtonImage} />
      </div>
      <div className={styles.projectButton__content} >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

function HomepageProjects() {
  return (
    <main className={styles.main}>
      <h2>Products</h2>
      <div className={styles.projectButton__container}>

        <ProjectButton
          title="Recurse ML GitHub App"
          description="Automated bug detection for every pull request. Recurse ML scans your diffs, catches bugs your tests miss, and leaves comments and status checks."
          imageUrl="/img/gh-logo.svg"
          href="/gh" />
        <ProjectButton
          title="RML CLI"
          description="Identify bugs in your local code changes. Works with all code - human-written or AI-generated."
          imageUrl="/img/rml-logo.svg"
          href="/rml" />
        <ProjectButton
          title="REMCP"
          description="Model Context Protocol server for Recurse ML integration."
          imageUrl="/img/mcp.png"
          href="/remcp" />

      </div>

    </main>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={META_DESCRIPTION}>
      <HomepageHeader />
      <HomepageProjects />
    </Layout>
  );
}
