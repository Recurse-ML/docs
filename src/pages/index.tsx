import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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

function HomepageProjects() {
  return (
    <></>
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
