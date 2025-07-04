import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Find breaking changes',
    // TODO: Add SVG artwork here
    imageUrl: '/img/bug-hunting.png',
    description: (
      <>
        See how your changes affect the rest of your code, and catch what breaks      </>
    ),
  },
  {
    title: 'Catch API & library misuse',
    // TODO: Add SVG artwork here
    imageUrl: '/img/bug-hunting.png',
    description: (
      <>
        Misused a function? Passed an incorrect type? Forgot a required param? We've got you.
      </>
    ),
  },
  {
    title: 'Detect major and minor mistakes',
    // TODO: Add SVG artwork here
    imageUrl: '/img/bug-hunting.png',
    description: (
      <>
        Everyone slips up. Recurse ML makes sure those mistakes never make it to production.      </>
    ),
  },
];

function Feature(props: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {props.imageUrl && (
          <img
            className={styles.featureImage}
            src={props.imageUrl}
            alt={props.title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
