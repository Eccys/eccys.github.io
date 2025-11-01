import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {TypeAnimation} from 'react-type-animation';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section({children, className, aos = 'fade-up'}) {
  return (
    <section data-aos={aos} className={clsx(styles.section, className)}>
      <div className="container">{children}</div>
    </section>
  );
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          <TypeAnimation
            sequence={["السلام عليكم"]}
            cursor={true}
            speed={60}
            wrapper="span"
          />
        </h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.cta}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>
      <div className={styles.heroFade} />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Deep Arabic grammar learning grounded in classical works."
    >
      <Hero />
      <main>
        <Section>
          <Heading as="h2" className={styles.sectionTitle}>A language that carries meaning</Heading>
          <p className={styles.lead}>
            If Arabic feels distant, connection also feels distant. How can one listen to the words of the Creator without the language that bears them?
            We walk the careful path of نحو—strengthening the mind with patterns until clarity becomes natural.
          </p>
        </Section>

        <Section aos="fade-up">
          <Heading as="h2" className={styles.sectionTitle}>Depth over brevity</Heading>
          <p className={styles.text}>
            We value complete understanding—even repetition—over speed. Concepts are revisited from different angles until they settle. This is not a shortcut; it is a steady path.
          </p>
        </Section>

        <Section aos="fade-up">
          <Heading as="h2" className={styles.sectionTitle}>A curriculum with roots</Heading>
          <p className={styles.text}>
            We draw upon works like قطر الندى، ألفية ابن مالك، and the guidance of scholars such as ابن حجر and the classical tradition. The aim is not to skim, but to form the habits of a true طالب علم.
          </p>
          <div className={styles.ctaAlt}>
            <Link className="button button--primary button--lg" to="/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/">
              Begin the journey
            </Link>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
