import heroPortrait from '../assets/hero-portrait.png';

export interface ProjectWork {
  id: string;
  year: string;
  badge: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  schematicLines: string[];
  repoUrl: string;
}

export interface SkillItem {
  id: 'cpp' | 'python' | 'leadership' | 'detail';
  title: string;
  description: string;
}

export interface EducationItem {
  number: string;
  title: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  owner: {
    topKicker: 'INFORMATICS & PROGRAMMING',
    year: '2026',
    roleKicker: 'ASPIRING SOFTWARE DEVELOPER',
    headlineLine1: 'C++ & PYTHON',
    headlineLine2: 'PROGRAMMER',
    bio: 'Freshman Informatics Engineering student at Institut Teknologi PLN. Passionate about building efficient software systems, clean logic, and practical tech solutions.',
    signatureLine1: 'GITA IRENE',
    signatureLine2: 'NATANIA TARIGAN',
    fullName: 'Gita Irene Natania Tarigan',
    shortName: 'Gita Tarigan',
    monogram: 'G/T',
    initialsSignature: 'G.T.',
    stampText: 'INFORMATICS ENGINEERING • IT PLN JAKARTA •',
    stampCenterLetter: 'G',
    email: 'tarigang632@gmail.com',
    whatsappUrl: 'https://wa.me/6281366679298',
    phoneDisplay: '+62 813-6667-9298',
    location: 'Based in Cengkareng, Jakarta Barat',
    linkedinUrl: 'https://www.linkedin.com/in/gita-tarigan-643471434',
    linkedinLabel: 'linkedin.com/in/gita-tarigan',
    githubUrl: 'https://github.com/tarigang632-netizen',
    githubLabel: 'github.com/tarigang632-netizen',
    cvUrl: 'https://drive.google.com/drive/folders/1kR6n2a08D8iQ5Z2m8i75bY6lW9pS0xT4',
    copyright: '© 2026 GITA IRENE NATANIA TARIGAN',
    affiliation: 'INFORMATICS ENGINEERING • INSTITUT TEKNOLOGI PLN',
  },
  images: {
    heroPortrait,
    quotePortraitUrl:
      'https://lh3.googleusercontent.com/aida/ALJJyrB3rLdRFgEVZi1q9StsKsbJgQPUBs7PPuUZ8L9ViqBH9kKtlmIA4CbtpRKCm9zNBOBsDd3wT4_pNy2YYW264JV0LlN-Q8MfTdmnr0axvEGYhblAWykwUM4iaHWDH9tiGAtvESZdMGQ2C6lWeN3XwVUatM1NVn64pkyzWqPcbWXYnwLqQn_p2Xx57tOWTn6UJLs-kiJff9D7fcicI17nLmlklOTpnhyBtZWHcmJw0PvTfE9tKSpqa5fHIg',
  },
  works: [
    {
      id: 'program-resto',
      year: '2026',
      badge: 'FEATURED • C++ & PYTHON',
      title: 'PROGRAM RESTO',
      category: 'C++ & PYTHON • RESTAURANT ORDERING SYSTEM',
      summary:
        'Restaurant ordering & cashier system built with C++ and Python to streamline order recording, automate billing calculations, and reduce customer queue times.',
      highlights: [
        'Structured menu & table order management with instant total calculation',
        'Automated receipt generation and tax/discount logic',
        'Modular console architecture designed for reliability and speed',
      ],
      schematicLines: [
        '$ ./program_resto --init',
        '> TABLE #04  [2x] Nasi Goreng',
        '> SUBTOTAL   IDR 70,000',
        '> STATUS     BILLING READY',
      ],
      repoUrl: 'https://github.com/tarigang632-netizen',
    },
    {
      id: 'algorithmic-logic-lab',
      year: '2026',
      badge: 'C++ • ALGORITHMS',
      title: 'ALGORITHMIC LOGIC LAB',
      category: 'C++ • DATA STRUCTURES & PROBLEM SOLVING',
      summary:
        'Collection of structured C++ algorithms, matrix operations, and numerical computation modules from applied science & informatics coursework.',
      highlights: [
        'Efficient sorting, searching, and recursion benchmarks',
        '2D matrix transformations and linear algebra utilities',
        'Memory-conscious C++ implementations with clean modular headers',
      ],
      schematicLines: [
        'template <typename T>',
        'void solveMatrix(Grid<T>& M) {',
        '  // O(n log n) structured pass',
        '}',
      ],
      repoUrl: 'https://github.com/tarigang632-netizen',
    },
    {
      id: 'python-utility-scripts',
      year: '2026',
      badge: 'PYTHON • AUTOMATION',
      title: 'PYTHON UTILITY SCRIPTS',
      category: 'PYTHON • WORKFLOW & DATA PROCESSING',
      summary:
        'Clean Python automation scripts for input validation, text/data processing, and efficient terminal workflows.',
      highlights: [
        'Automated CSV/text parsing and data normalization pipelines',
        'Strict input validation helpers for CLI utilities',
        'Lightweight zero-dependency scripts for daily engineering tasks',
      ],
      schematicLines: [
        'def validate_stream(rows):',
        '  return [clean(r) for r in rows',
        '          if r.is_valid()]',
        '# 100% pass • 0.04s',
      ],
      repoUrl: 'https://github.com/tarigang632-netizen',
    },
  ] satisfies ProjectWork[],
  skills: [
    {
      id: 'cpp',
      title: 'C++ Programming',
      description:
        'Algorithmic logic, structured data processing, and console/system applications.',
    },
    {
      id: 'python',
      title: 'Python Development',
      description:
        'Clean scripting, automation logic, and rapid application prototyping.',
    },
    {
      id: 'leadership',
      title: 'Leadership & Teamwork',
      description:
        'Proven collaboration in student committees (KPO OSIS) and event execution.',
    },
    {
      id: 'detail',
      title: 'Detail & Adaptability',
      description:
        'Strong attention to detail balanced with priority management and fast learning.',
    },
  ] satisfies SkillItem[],
  softSkillTags: [
    'Communication',
    'Problem Solving',
    'Time Management',
    'Self-Confidence',
    'Cyber Security Interest',
  ],
  education: [
    {
      number: '01',
      title: 'INSTITUT TEKNOLOGI PLN (2026 – PRESENT)',
      description:
        'S1 Teknik Informatika — Jakarta Barat. Focusing on software engineering, system development, and energy-sector tech innovation.',
    },
    {
      number: '02',
      title: 'SMA SANTO THOMAS 2 MEDAN (2023 – 2026)',
      description:
        'Applied Science & Technology (IPA / Saintek Terapan). Active in Mathematics Science Club & English Club.',
    },
    {
      number: '03',
      title: 'KOMISI PEMILIHAN OSIS (2024)',
      description:
        'Committee Member — Coordinated student election logistics, teamwork, and transparent voting execution.',
    },
    {
      number: '04',
      title: 'TRADITIONAL DANCE / TRADE (2024)',
      description:
        'Active Member — Built stage confidence, cultural discipline, and collaborative synchronization.',
    },
  ] satisfies EducationItem[],
  quote:
    'ENTHUSIASTIC TO EXPLORE AND APPLY THE LATEST INNOVATIONS IN SOFTWARE AND SYSTEMS TO CREATE EFFICIENT, PRACTICAL SOLUTIONS FOR PLN GROUP.',
};
