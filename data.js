/* ============================================
   AADYAM MAGAZINE — DATA SEPARATION
   ============================================ */

const magazines = [
  {
    id: 'latest',
    issue: 'XII',
    year: '2025',
    title: 'Quantum Horizons',
    subtitle: 'Beyond Classical Computing',
    color: ['#060d1f', '#0e1f3a'],
    accent: '#3b82f6',
    featured: true,
    pdfPath: '#'
  },
  {
    id: 'issue-11',
    issue: 'XI',
    year: '2024',
    title: 'Neural Frontiers',
    subtitle: 'The AI Revolution',
    color: ['#1a0b2e', '#2d1254'],
    accent: '#818cf8',
    pdfPath: '#'
  },
  {
    id: 'issue-10',
    issue: 'X',
    year: '2024',
    title: 'Green Circuits',
    subtitle: 'Sustainable Engineering',
    color: ['#0a1f0f', '#0d3321'],
    accent: '#22c55e',
    pdfPath: '#'
  },
  {
    id: 'issue-9',
    issue: 'IX',
    year: '2023',
    title: 'Cyber Minds',
    subtitle: 'Security in the Digital Age',
    color: ['#1f1206', '#3a2010'],
    accent: '#f97316',
    pdfPath: '#'
  },
  {
    id: 'issue-8',
    issue: 'VIII',
    year: '2023',
    title: 'Nano Worlds',
    subtitle: 'Engineering at the Atomic Scale',
    color: ['#061f1f', '#0e3330'],
    accent: '#06b6d4',
    pdfPath: '#'
  },
  {
    id: 'issue-7',
    issue: 'VII',
    year: '2022',
    title: 'Space Protocols',
    subtitle: 'Systems for the Final Frontier',
    color: ['#0a0a1f', '#12125a'],
    accent: '#a78bfa',
    pdfPath: '#'
  },
  {
    id: 'issue-6',
    issue: 'VI',
    year: '2022',
    title: 'BioMachine',
    subtitle: 'Where Biology Meets Engineering',
    color: ['#1f0610', '#3a0a1e'],
    accent: '#f43f5e',
    pdfPath: '#'
  },
  {
    id: 'issue-5',
    issue: 'V',
    year: '2021',
    title: 'Data Rivers',
    subtitle: 'The Science of Information Flow',
    color: ['#06101f', '#0e2040'],
    accent: '#38bdf8',
    pdfPath: '#'
  },
  {
    id: 'issue-4',
    issue: 'IV',
    year: '2021',
    title: 'Robotic Dawn',
    subtitle: 'Autonomous Systems Rising',
    color: ['#141206', '#2e2a0a'],
    accent: '#facc15',
    pdfPath: '#'
  },
  {
    id: 'issue-3',
    issue: 'III',
    year: '2020',
    title: 'Signal & Noise',
    subtitle: 'Communications Engineering',
    color: ['#061f15', '#0a3322'],
    accent: '#34d399',
    pdfPath: '#'
  },
  {
    id: 'issue-2',
    issue: 'II',
    year: '2020',
    title: 'Voltage Dreams',
    subtitle: 'Power Systems of Tomorrow',
    color: ['#1f1006', '#3a2205'],
    accent: '#fb923c',
    pdfPath: '#'
  },
  {
    id: 'issue-1',
    issue: 'I',
    year: '2019',
    title: 'Genesis',
    subtitle: 'The Beginning of Aadyam',
    color: ['#060e1f', '#0c1a38'],
    accent: '#60a5fa',
    pdfPath: '#'
  }
];

const pageData = [
  {
    type: 'cover',
    title: 'AADYAM',
    theme: 'QUANTUM HORIZONS',
    issue: 'ISSUE XII · 2025'
  },
  {
    type: 'toc',
    title: 'Table of Contents',
    items: [
      { title: 'Quantum Error Correction', page: 3 },
      { title: 'The Future of Silicon: Interview', page: 4 },
      { title: 'Silicon Photonics Breakthrough', page: 5 },
      { title: 'Quantum Cryptography', page: 6 },
      { title: 'Topological Qubits', page: 7 },
    ]
  },
  {
    type: 'research',
    title: 'Quantum Error Correction: A Novel Approach',
    author: 'RAHUL SHARMA, BTech CSE Year 4',
    text: 'Quantum computers hold extraordinary promise but remain vulnerable to decoherence. This research explores surface code architectures as mechanisms for reliable quantum computation.\n\nBy implementing a threshold theorem approach, we demonstrate that quantum computation remains viable even with imperfect hardware.',
    quote: 'The fundamental challenge lies in the no-cloning theorem — unlike classical bits, quantum states cannot be copied directly.'
  },
  {
    type: 'interview',
    title: 'The Brain-Inspired Future: An Interview',
    dialog: [
      { speaker: 'AADYAM', text: 'Dr. Mehta, welcome. How close are we to true neuromorphic computing?' },
      { speaker: 'DR. MEHTA', text: 'We are closer than ever. With Intel\'s Loihi 2, we are seeing 10x energy reduction for specific AI workloads. It\'s not just about speed anymore; it\'s about efficiency mimicking the human brain.' },
      { speaker: 'AADYAM', text: 'What is the biggest hurdle for student researchers in this field?' },
      { speaker: 'DR. MEHTA', text: 'Access to high-fidelity fabrication labs. But software-defined architectures are leveling the playing field.' }
    ]
  },
  {
    type: 'news',
    title: 'Silicon Photonics Reaches Terabit Speeds',
    summary: 'Our lab has achieved a record-breaking 400 Gbps transmission rate on a 5mm² silicon die.',
    text: 'This breakthrough marks a significant step toward future data centers where light-speed interconnects replace traditional copper wiring. The team, led by Arjun Mehta, used CMOS-compatible processes to ensure scalability.'
  },
  {
    type: 'research',
    title: 'Quantum Cryptography in the Post-Quantum Era',
    author: 'SNEHA KRISHNAN, BTech CS Year 3',
    text: 'NIST\'s post-quantum cryptography standardization process concluded with CRYSTALS-Kyber. This paper analyses the implementation challenges for resource-constrained IoT devices.',
    quote: 'Security is not a feature, it is a foundation.'
  },
  {
    type: 'research',
    title: 'Topological Qubits: The Final Frontier',
    author: 'VIKRAM GUPTA, MTech VLSI Year 1',
    text: 'Topological qubits promis inherently fault-tolerant quantum computation. Unlike gate-based systems, topological quantum information is stored non-locally, making it resistant to local perturbations.'
  },
  {
    type: 'backcover',
    title: 'AADYAM',
    next: 'ISSUE XIII · 2026',
    tagline: '"Knowledge shared is knowledge multiplied"'
  }
];
