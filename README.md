# Nahw School — الصغرى في النحو

A Docusaurus-powered documentation site for learning Arabic grammar (نحو), grounded in classical texts.

**Live site**: [arabic.ecys.xyz](https://arabic.ecys.xyz)

## Getting Started

### Prerequisites

- Node.js ≥ 18

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Starts a local development server at `http://localhost:3000`. Most changes are reflected live without restarting.

### Production Build

```bash
npm run build
```

Generates static content into the `build/` directory.

### Serve Production Build Locally

```bash
npm run serve
```

## Project Structure

```
docs/               → Arabic grammar content (الصغرى في النحو)
  مقدمة/             → Introduction (الكلمة، الجملة، العامل)
  المقصد الأول/       → العامل (Operators)
  المقصد الثاني/      → المعمول (Operands)
  المقصد الثالث/      → الإعراب (Declension)
src/
  pages/            → Custom homepage
  css/              → Global styles
static/img/         → Images and favicon
```

## Acknowledgements

With gratitude to Al-Qalam Institute and Hashim Mohamed.

Built with [Docusaurus](https://docusaurus.io/).
