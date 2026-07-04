/* ============================================
   AADYAM MAGAZINE — DATA SEPARATION
   ============================================ */

const magazines = [
  {
    id: 'latest',
    issue: 'XVII',
    year: '2026',
    title: 'Viksit Bharat @ 2047',
    subtitle: 'Building a Developed Nation',
    color: ['#07162c', '#020914'],
    accent: '#eab308',
    featured: true,
    pdfPath: 'Aadyam 2026.pdf',
    pages: [
      {
        type: 'cover',
        title: 'AADYAM',
        theme: 'VIKSIT BHARAT @ 2047',
        issue: 'ISSUE XVII · 2026'
      },
      {
        type: 'toc',
        title: 'Table of Contents',
        items: [
          { title: 'Bharat Quantum Grid: Unhackable India', page: 3 },
          { title: 'Smart India Hackathon 2025: Team SpiritX', page: 4 },
          { title: 'Hacknexus 2026: Ketan Lohakare', page: 5 },
          { title: 'Best Paper Award: PUNE CON-2025', page: 6 },
          { title: 'Department Highlights: ICON 25.0', page: 7 },
        ]
      },
      {
        type: 'research',
        title: 'Bharat Quantum Grid: Unhackable India',
        author: 'DEPARTMENT OF ELECTRONICS ENGINEERING & VLSI',
        text: 'The dream of a developed India goes far beyond economic growth. It represents a nation that is technologically self-reliant and secure.\n\nThe Bharat Quantum Grid is designed to combine quantum-secure fiber links between major cities with satellite-based quantum communication for long-distance and remote connectivity. Ground stations will distribute quantum keys to local secure networks.\n\nWhile classical data still travels normally, its encryption keys are generated and refreshed using quantum principles, making India\'s digital infrastructure virtually unhackable.',
        quote: 'Security is not just a feature, it is the foundation of a modern developed nation.'
      },
      {
        type: 'news',
        title: 'Team SpiritX Shines at SIH 2025',
        summary: 'Yeshwantrao Chavan College of Engineering represents at the Grand Finale of Smart India Hackathon 2025.',
        text: 'Lakshya Gupta and Omprakash Rahangdale, 3rd-year students from the Department of Electronics Engineering (Team SpiritX), represented the institute at the Grand Finale of Smart India Hackathon 2025 organized by AICTE.\n\nThey presented an innovative ML-based solution under the guidance of the department faculty, showcasing the division\'s strength in machine learning and real-world engineering problem solving.'
      },
      {
        type: 'news',
        title: 'Department Achievements & Innovation',
        summary: 'Ketan Lohakare secures First Prize in Hacknexus 2026; Dr. Ankita Tijare wins Best Paper Award.',
        text: 'The academic year 2025-2026 marked massive milestones for the department. Ketan Lohakare secured the First Prize in Hacknexus, organized by the Department of Computer Technology on 31st January 2026, for his exceptional coding and problem-solving skills.\n\nAdditionally, Dr. Ankita Tijare along with student researchers received the prestigious Best Paper Award at PUNE CON-2025, cementing our department\'s research credentials.'
      },
      {
        type: 'backcover',
        title: 'AADYAM',
        next: 'ISSUE XVIII · 2027',
        tagline: '"Knowledge shared is knowledge multiplied"'
      }
    ]
  },
  {
    id: 'issue-16',
    issue: 'XVI',
    year: '2025',
    title: 'Electronics in Music',
    subtitle: 'The Fusion of Electronics and Music',
    color: ['#1b0c30', '#0a0314'],
    accent: '#ec4899',
    featured: false,
    pdfPath: 'Aadyam_2025.pdf',
    pages: [
      {
        type: 'cover',
        title: 'AADYAM',
        theme: 'ELECTRONICS IN MUSIC',
        issue: 'ISSUE XVI · 2025'
      },
      {
        type: 'toc',
        title: 'Table of Contents',
        items: [
          { title: 'Electronics in Music: Harmony of Innovation', page: 3 },
          { title: 'AI Meets Electronics & VLSI Systems', page: 4 },
          { title: 'Semiconductors & India\'s Growth', page: 5 },
          { title: 'The Impact of IoT on Modern Life', page: 6 },
        ]
      },
      {
        type: 'research',
        title: 'Electronics in Music: Harmony of Innovation',
        author: 'DEPARTMENT OF ELECTRONICS ENGINEERING',
        text: 'Delving into the fascinating intersection of electronics and music, we celebrate how technology not only enhances but also redefines the way we create and experience sound.\n\nFrom analog synthesizers and digital audio workstations to AI-driven audio processing and acoustic engineering, the fusion of electronics and music stands as a testament to human creativity. In this edition, our students explore the tech-driven sounds of the future.',
        quote: 'Electronics and music share a common frequency — both translate waves of energy into human emotion.'
      },
      {
        type: 'research',
        title: 'Semiconductors & India\'s Growth',
        author: 'VAISHNAVI DATE, BTech Year 4',
        text: 'As global supply chains shift, India is positioning itself as a major hub for semiconductor design and fabrication. With the India Semiconductor Mission (ISM) receiving massive funding, the future is bright for VLSI engineers.\n\nOur department is training the next generation of engineers in chip design, microcontrollers, and embedded systems to support the country\'s tech-driven growth.'
      },
      {
        type: 'backcover',
        title: 'AADYAM',
        next: 'ISSUE XVII · 2026',
        tagline: '"Knowledge shared is knowledge multiplied"'
      }
    ]
  },
  {
    id: 'issue-15',
    issue: 'XV',
    year: '2024',
    title: 'Neural Frontiers',
    subtitle: 'The AI Revolution',
    color: ['#1a0b2e', '#2d1254'],
    accent: '#818cf8',
    pdfPath: '#'
  },
  {
    id: 'issue-14',
    issue: 'XIV',
    year: '2024',
    title: 'Green Circuits',
    subtitle: 'Sustainable Engineering',
    color: ['#0a1f0f', '#0d3321'],
    accent: '#22c55e',
    pdfPath: '#'
  },
  {
    id: 'issue-13',
    issue: 'XIII',
    year: '2023',
    title: 'Cyber Minds',
    subtitle: 'Security in the Digital Age',
    color: ['#1f1206', '#3a2010'],
    accent: '#f97316',
    pdfPath: '#'
  },
  {
    id: 'issue-12',
    issue: 'XII',
    year: '2023',
    title: 'Nano Worlds',
    subtitle: 'Engineering at the Atomic Scale',
    color: ['#061f1f', '#0e3330'],
    accent: '#06b6d4',
    pdfPath: '#'
  },
  {
    id: 'issue-11',
    issue: 'XI',
    year: '2022',
    title: 'Space Protocols',
    subtitle: 'Systems for the Final Frontier',
    color: ['#0a0a1f', '#12125a'],
    accent: '#a78bfa',
    pdfPath: '#'
  },
  {
    id: 'issue-10',
    issue: 'X',
    year: '2022',
    title: 'BioMachine',
    subtitle: 'Where Biology Meets Engineering',
    color: ['#1f0610', '#3a0a1e'],
    accent: '#f43f5e',
    pdfPath: '#'
  },
  {
    id: 'issue-9',
    issue: 'IX',
    year: '2021',
    title: 'Data Rivers',
    subtitle: 'The Science of Information Flow',
    color: ['#06101f', '#0e2040'],
    accent: '#38bdf8',
    pdfPath: '#'
  },
  {
    id: 'issue-8',
    issue: 'VIII',
    year: '2021',
    title: 'Robotic Dawn',
    subtitle: 'Autonomous Systems Rising',
    color: ['#141206', '#2e2a0a'],
    accent: '#facc15',
    pdfPath: '#'
  },
  {
    id: 'issue-7',
    issue: 'VII',
    year: '2020',
    title: 'Signal & Noise',
    subtitle: 'Communications Engineering',
    color: ['#061f15', '#0a3322'],
    accent: '#34d399',
    pdfPath: '#'
  },
  {
    id: 'issue-6',
    issue: 'VI',
    year: '2020',
    title: 'Voltage Dreams',
    subtitle: 'Power Systems of Tomorrow',
    color: ['#1f1006', '#3a2205'],
    accent: '#fb923c',
    pdfPath: '#'
  },
  {
    id: 'issue-5',
    issue: 'V',
    year: '2019',
    title: 'Genesis',
    subtitle: 'The Beginning of Aadyam',
    color: ['#060e1f', '#0c1a38'],
    accent: '#60a5fa',
    pdfPath: '#'
  }
];

// Fallback default page data for older issues
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
    text: 'Topological qubits promise inherently fault-tolerant quantum computation. Unlike gate-based systems, topological quantum information is stored non-locally, making it resistant to local perturbations.'
  },
  {
    type: 'backcover',
    title: 'AADYAM',
    next: 'ISSUE XIII · 2026',
    tagline: '"Knowledge shared is knowledge multiplied"'
  }
];
