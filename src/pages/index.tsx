import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.scss';

const HOME_PAGE_SECONDARY_TEXT = "Recurse ML catches bugs that tests and static analysers miss. We understand external libraries and complex internal dependencies. Our users ship fast without compromising production quality.";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
      <h2>Finding bugs wherever you are</h2>
      <div className={styles.projectButton__container}>

        <ProjectButton
          title="Recurse ML GitHub App"
          description="AI-powered code reviews for every pull request. Recurse ML scans your diffs, detects bugs, and leaves comments or status checks."
          imageUrl="/img/github-app-logo.svg"
          href="/github-app" />
        <ProjectButton
          title="RML CLI"
          description="Bug detection on the go. A simple CLI tool to identify bugs directly from your local repository. Just upload your changes and get AI-powered analysis."
          imageUrl="/img/rml-cli-logo.svg"
          href="/rml-cli" />

      </div>

    </main>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageProjects />
    </Layout>
  );
}
