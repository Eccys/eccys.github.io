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

function Feature({title, description, icon, delay, badge}) {
  return (
    <div className={clsx(styles.card, 'glass', 'glow-on-hover')} data-aos="fade-up" data-aos-delay={delay}>
      <div className={styles.featureHeader}>
        <div className={styles.featureIcon}>{icon}</div>
        {badge && <span className="badge badge--primary">{badge}</span>}
      </div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureText}>{description}</p>
    </div>
  );
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div data-aos="zoom-in">
          <h1 className={styles.heroTitle}>
            <TypeAnimation
              sequence={[
                "السلام عليكم",
                2000,
                "Nahw School",
                2000,
                "Arabic Grammar",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.heroSubtitle}>
            A deep, systematic approach to mastering the language of the Qur'an, 
            grounded in classical scholarship and modern clarity.
          </p>
          <div className={styles.cta}>
            <Link
              className="button button--primary button--lg"
              to="/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/"
            >
              Start Learning Sughra
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="#curriculum"
            >
              View Curriculum
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-expo', once: true });
  }, []);

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Deep Arabic grammar learning grounded in classical works like Sughra and Wusta fi an Nahw."
    >
      <Hero />
      <main className="container">
        <section id="curriculum" className={styles.curriculumSection}>
          <Heading as="h2" className={styles.sectionTitle} data-aos="fade-up">Two Paths to Mastery</Heading>
          <div className={styles.grid}>
            <Feature
              title="Sughra fi an Nahw"
              description="The foundational journey. Master the core patterns of Arabic sentences, governing particles, and the essential logic of نحو until clarity becomes your natural state."
              delay={100}
              icon="🌱"
            />
            <Feature
              title="Wusta fi an Nahw"
              description="The intermediate ascent. Deepen your understanding with complex sentence parsing (Tarkib), nuanced grammatical states, and the subtle secrets of classical Arabic syntax."
              delay={300}
              icon="🌿"
              badge="Coming Soon"
            />
            <Feature
              title="Kubra fi an Nahw"
              description="The advanced mastery. Dive into the most intricate debates of grammar, comprehensive syntax rules, and complete fluency in analyzing classical Arabic texts."
              delay={500}
              icon="🌳"
              badge="Coming Soon"
            />
          </div>
        </section>

        <section className={clsx(styles.bottomSection, 'glass', 'text--center')} data-aos="fade-up">
          <Heading as="h2" style={{marginBottom: '1.5rem'}}>Classical Roots, Steady Path</Heading>
          <p className="text--italic" style={{maxWidth: '800px', margin: '0 auto 1.5rem auto', fontSize: '1.2rem', lineHeight: '1.8'}}>
            "Connection to the words of the Creator requires the language that bears them. 
            We do not take shortcuts; we walk the steady path of complete understanding."
          </p>
          <p style={{maxWidth: '800px', margin: '0 auto 2.5rem auto', color: 'hsla(0, 0%, 100%, 0.7)', fontSize: '1.05rem', lineHeight: '1.7'}}>
            Our curriculum draws directly from Qatr al-Nada, Alfiyyah Ibn Malik, and the pedagogical tradition of the subcontinent, bridging classical depth with modern pedagogy.
          </p>
          <div style={{display: 'inline-block'}}>
            <Link
              className="button button--primary button--lg"
              to="/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/"
            >
              Begin the Journey
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
