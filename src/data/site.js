export const site = {
  name: 'John Walther',
  role: 'Mechanical Engineering Student',
  // One plain line, written for a recruiter skimming: what he does, with what.
  summary:
    'I design and build vehicle hardware — oil systems, suspension, roll structures — in SolidWorks and Fusion, then cut, bend and weld the parts myself.',
  headshot: 'John Walther Headshot.jpg',

  // Add contact links here and they appear in the footer automatically.
  // Left empty rather than filled with a placeholder address.
  contact: [
    { label: 'Email', href: 'mailto:johncwalther@yahoo.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-c-walther/' },
    { label: 'GitHub', href: 'https://github.com/Waltherjc' },
  ],
  headshotSquare: 'John Walther Headshot Square.jpg',

  // Title-block fields. Field names are uppercase because that is the drawing
  // convention, not as decoration — they appear nowhere else on the site.
  titleBlock: [
    { field: 'DISCIPLINE', value: 'Mechanical Engineering' },
    { field: 'SCHOOL', value: 'Vanderbilt University' },
    { field: 'DEGREE', value: 'BE, expected May 2029' },
    { field: 'FOCUS', value: 'Automotive / Motorsport' },
  ],

  about: [
    'I am a sophomore at Vanderbilt University studying Mechanical Engineering, with minors in Innovation & Design Strategy, Digital Fabrication, and Engineering Management. My academic journey is driven by my interest in automotive engineering.',
    'As a member of VU Motorsports, I work on car design and metal fabrication with the end goal of successfully competing at the Formula SAE internal combustion competition in Michigan annually. When I am not studying, you can find me playing baseball for the club team at Vanderbilt, being involved with Tikkun Olam Makers (TOM): Vanderbilt to provide assistive technology for those with physical disabilities, leading a freshman orientation group, or playing sports with my friends.',
    'My overall goal is to use what I have learned to work for a racing team and design a championship winning car.',
  ],

  education: {
    school: 'Vanderbilt University',
    degree: 'BE Mechanical Engineering',
    expected: 'Expected May 2029',
    minors: ['Innovation & Design Strategy', 'Digital Fabrication', 'Engineering Management'],
    honors: ['National Merit Scholarship', 'Vanderbilt University Merit Scholarship'],
  },

  // A career history is a revision history — same shape a drawing uses.
  revisions: [
    {
      rev: 'D',
      date: 'Jun – Aug 2026',
      title: 'Undergraduate Researcher',
      org: 'Welding Automation Lab, Vanderbilt University',
    },
    {
      rev: 'C',
      date: 'Jun – Aug 2026',
      title: 'Undergraduate Researcher',
      org: 'The Frist Center for Autism and Innovation, Vanderbilt University',
    },
    {
      rev: 'B',
      date: 'Jul – Aug 2025',
      title: 'Engineering Intern',
      org: 'International Motor Sports Association (IMSA)',
      note: 'Motul SportsCar Grand Prix',
    },
    {
      rev: 'A',
      date: 'Jun 2023 – Jul 2025',
      title: 'Program Assistant',
      org: 'Northern Suburban Special Recreation Association (NSSRA)',
    },
  ],

  skills: [
    { group: 'Design', items: ['SolidWorks', 'Fusion 360'] },
    { group: 'Fabrication', items: ['MIG welding', 'TIG welding', 'Friction stir welding', 'Plasma CNC', 'Tube bending', '3D printing'] },
  ],

  organizations: [
    { org: 'VU Motorsports — Formula SAE', detail: 'Member, 2025 – present' },
    { org: 'Tikkun Olam Makers (TOM): Vanderbilt', detail: 'Member, 2025 – present' },
    { org: 'Vanderbilt Club Baseball', detail: 'Vice President, 2026 – present · Member since 2025' },
    { org: 'VUcept', detail: 'Freshman orientation leader, 2026 – present' },
  ],

  awards: [
    {
      title: '3rd Place, Efficiency — Formula SAE IC Michigan 2026',
      detail:
        'Awarded for fuel use over the set distance, helped by running the lightest car at the competition by roughly 40 lb.',
    },
  ],
};
