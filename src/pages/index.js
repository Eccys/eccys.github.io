import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {TypeAnimation} from 'react-type-animation';
import { useHistory } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Feature({title, description, icon, delay, badge, children}) {
  return (
    <div className={clsx(styles.card, 'glass', 'glow-on-hover')} data-aos="fade-up" data-aos-delay={delay}>
      <div className={styles.featureHeader}>
        <div className={styles.featureIcon}>{icon}</div>
        {badge && <span className="badge badge--primary">{badge}</span>}
      </div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureText}>{description}</p>
      {children}
    </div>
  );
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory();
  const isBrowser = useIsBrowser();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // DX Helper: Ctrl + Alt + R to reset animations for testing
  useEffect(() => {
    if (!isBrowser) return;
    const handleReset = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'r') {
        sessionStorage.clear();
        window.location.reload();
      }
    };
    window.addEventListener('keydown', handleReset);
    return () => window.removeEventListener('keydown', handleReset);
  }, [isBrowser]);

  useEffect(() => {
    if (isBrowser) {
      const hasAnimated = sessionStorage.getItem('hasAnimatedHero');
      if (!hasAnimated) {
        setShouldAnimate(true);
        sessionStorage.setItem('hasAnimatedHero', 'true');
      }
    }
  }, [isBrowser]);

  const handleStartLearning = (e) => {
    e.preventDefault();
    if (isBrowser) {
      const hasTransitioned = sessionStorage.getItem('hasTransitioned');
      if (hasTransitioned) {
        history.push('/docs/مقدمة/');
        return;
      }
      
      sessionStorage.setItem('hasTransitioned', 'true');
      
      // Use inline styles — CSS module class names are hashed and won't apply
      // to elements created outside the React tree after navigation unmounts.
      const overlay = document.createElement('div');
      Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '-100vw',
        width: '100vw',
        height: '100vh',
        background: '#111827',
        zIndex: '99999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'left 1.2s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.8s ease',
        opacity: '1',
      });
      
      const text = document.createElement('h2');
      text.innerText = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
      Object.assign(text.style, {
        color: 'white',
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
        margin: '0',
        textAlign: 'center',
        padding: '0 2rem',
      });
      
      overlay.appendChild(text);
      document.body.appendChild(overlay);

      // Double rAF forces browser to register initial state before transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          overlay.style.left = '0';
        });
      });

      // Wait for sweep-in, then navigate, then fade out
      setTimeout(() => {
        history.push('/docs/مقدمة/');
        setTimeout(() => {
          overlay.style.opacity = '0';
          setTimeout(() => overlay.remove(), 900);
        }, 200);
      }, 1800);
    }
  };

  const scrollToCurriculum = (e) => {
    e.preventDefault();
    const target = document.getElementById('curriculum');
    if (!target) return;

    // Offset for the sticky Docusaurus navbar (~60px)
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 60;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // heavy ease
    let start = null;
    
    const easeInOutQuart = time => time < 0.5 ? 8 * time * time * time * time : 1 - Math.pow(-2 * time + 2, 4) / 2;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutQuart(percent));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };

  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={shouldAnimate ? styles.heroFirstLoad : undefined}>
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
            <a
              className="button button--primary button--lg"
              href="/docs/مقدمة/"
              onClick={handleStartLearning}
            >
              Start Learning Sughra
            </a>
            <a
              className="button button--secondary button--lg"
              href="#curriculum"
              onClick={scrollToCurriculum}
            >
              View Curriculum
            </a>
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
          <Heading as="h2" className={styles.sectionTitle} data-aos="fade-up">
            <span>Sughra</span>
            <span style={{color: 'var(--brand-primary)', margin: '0 0.5rem'}}> ➔ </span>
            <span>Wusta</span>
            <span style={{color: 'var(--brand-primary)', margin: '0 0.5rem'}}> ➔ </span>
            <span>Kubra</span>
          </Heading>
          <div className={styles.grid}>
            <Feature
              title="Sughra fi an Nahw"
              description="The core patterns of Arabic sentences, governing particles, and the essential logic of نحو. Everything is in Arabic; basic vocabulary is highly recommended."
              delay={100}
              icon="🌱"
            >
              <div className={styles.learnMore}>
                <Link
                  className={styles.startNowLink}
                  to="/docs/%D9%85%D9%82%D8%AF%D9%85%D8%A9/"
                >
                  Start Now
                </Link>
              </div>
            </Feature>
            <Feature
              title="Wusta fi an Nahw"
              description="Complex sentence structures, advanced governing particles, and introduction of إعراب. Heavily references the qur'an. Equivalent to studying Hidayatun-Nahw and suffices for 95% of Nahw knowledge."
              delay={300}
              icon="🌿"
              badge="In Progress"
            >
              <details className={styles.learnMore}>
                <summary>Learn More</summary>
                <div className={styles.learnMoreContent}>
                  <p>This course serves as a direct replacement for traditional intermediate texts like Hidayatun Nahw or Qatr an-Nada.</p>
                  <ul>
                    <li>We found classical second-level books cumbersome to teach; students struggled to understand the dense text without relying heavily on extensive commentaries.</li>
                    <li>Instead of teaching directly from those older texts, we extracted the most important rules from major classical grammar books and compiled them into this custom "middle-level" (mutawassit) syllabus.</li>
                    <li>The course is specifically designed to make the rulings as easy to understand as possible, intentionally leaving out overly long or unnecessary grammatical debates that are common in older books.</li>
                  </ul>
                </div>
              </details>
            </Feature>
            <Feature
              title="Kubra fi an Nahw"
              description="Advanced Arabic syntax, complex grammatical governance, and semantic nuances for deep Quranic analysis. Designed for experts; prior completion of intermediate grammar is strictly required."
              delay={500}
              icon="🌳"
              badge="Coming Soon"
            />
          </div>
        </section>

        <section className={clsx(styles.bottomSection, 'glass', 'text--center')} data-aos="fade-up">
          <Heading as="h3" className={styles.featureTitle} style={{marginBottom: '1.5rem'}}>📚 Our Sources</Heading>
          <p style={{maxWidth: '800px', margin: '0 auto 2.5rem auto', color: 'hsla(0, 0%, 100%, 0.7)', fontSize: '1.05rem', lineHeight: '1.7'}}>
            Our curriculum draws directly from <a href="https://en.wikipedia.org/wiki/Qatr_al-Nada" target="_blank" rel="noopener noreferrer">Qatr al-Nada</a>, <a href="https://en.wikipedia.org/wiki/Alfiyya" target="_blank" rel="noopener noreferrer">Alfiyyah Ibn Malik</a>, <a href="https://en.wikipedia.org/w/index.php?search=Hidayat+al-Nahw" target="_blank" rel="noopener noreferrer">Hidayatun Nahw</a>, and the pedagogical tradition of the subcontinent, bridging classical depth with modern pedagogy.
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
