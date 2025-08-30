const dayjs = require('dayjs');

const kids = [{ name: 'Hamza' }, { name: 'Belal' }];
const skills = [
  {
    title: 'Front-end',
    skills: [
      {
        title: 'HTML',
        icon: 'html5',
        url: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        title: 'CSS',
        icon: 'css3-alt',
        url: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        title: 'Sass',
        icon: 'sass',
        url: 'https://sass-lang.com/#',
      },
      {
        title: 'Javascript',
        icon: 'js-square',
        url: 'https://www.javascript.com/',
      },
      {
        title: 'Typescript',
        icon: 'ts',
        url: 'https://www.typescriptlang.org/',
      },
      {
        title: 'ReactJS',
        icon: 'react',
        url: 'https://reactjs.org/',
      },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      {
        title: 'NodeJS',
        icon: 'node-js',
        url: 'https://nodejs.org/en/',
      },
      {
        title: 'PHP',
        icon: 'php',
        url: 'https://www.php.net/',
      },
      {
        title: 'Laravel',
        icon: 'laravel',
        url: 'https://laravel.com/',
      },
    ],
  },
  {
    title: 'Database',
    skills: [
      {
        title: 'MySQL',
        icon: 'database fa',
        url: 'https://www.mysql.com/',
      },
      {
        title: 'MongoDB',
        icon: 'database fa',
        url: 'https://www.mongodb.com/',
      },
    ],
  },
  // {
  //   title: 'Mobile',
  //   skills: [
  //     {
  //       title: 'React Native',
  //       icon: 'react',
  //       url: 'https://reactnative.dev/',
  //     },
  //   ],
  // },
  {
    title: 'Other',
    skills: [
      {
        title: 'Wordpress',
        icon: 'wordpress',
        url: 'https://wordpress.org/',
      },
      {
        title: 'Gatsby',
        icon: 'rocket fa',
        url: 'https://www.gatsbyjs.org/',
      },
      {
        title: 'GraphQL',
        icon: 'graphql fa',
        url: 'https://graphql.org/',
      },
      {
        title: 'ElectronJS',
        icon: 'desktop fa',
        url: 'https://www.electronjs.org/',
      },
      {
        title: 'Linux',
        icon: 'linux',
        url: 'https://www.linux.org/',
      },
      {
        title: 'Git',
        icon: 'git',
        url: 'https://git-scm.com/',
      },
      {
        title: 'Photoshop',
        icon: 'adobe',
        url: 'https://www.adobe.com/mena_en/products/photoshopfamily.html',
      },
    ],
  },
];

const interests = [
  {
    url: '#',
    title: 'Blogging',

    sites: [
      {
        url: 'https://moatazworld.wordpress.com/',
        title: 'moatazworld',
      },
      {
        url: 'https://caramellaapp.com/moatazmohammady',
        title: 'caramellaapp',
      },
      {
        url: 'https://dev.to/moatazabdalmageed',
        title: 'dev.to',
      },
    ],
  },

  {
    url: 'https://www.goodreads.com/user/show/92723087-moataz-mohammady',
    title: 'Reading',
  },
  {
    url: '#',
    title: 'Running && Walking in the countryside with my family or friends.',
  },
];
const socialLinks = {
  github: {
    icon: 'fa-github',
    name: 'Github',
    url: 'https://github.com/MoatazAbdAlmageed',
    show: true,
  },
  linkedin: {
    icon: 'fa-linkedin',
    url: 'https://www.linkedin.com/in/moatazabdelmageed',
    show: true,
  },
  stackoverflow: {
    icon: 'fa-stack-overflow',
    url: 'https://stackoverflow.com/users/2524043/moataz-mohammady',
    show: false,
  },
  codepen: {
    icon: 'fa-codepen',
    url: 'https://codepen.io/Moataz-Mohammady/pens/public',
  },
  edabit: {
    icon: 'fa-trophy',
    name: 'edabitK',
    url: 'https://edabit.com/user/NcL6egjCcAi5zR9k2',
    show: false,
  },
  behance: {
    icon: 'fa-behance',
    url: 'https://www.behance.net/moatazmohammady',
    show: true,
  },
  wordpress: {
    icon: 'fa-wordpress',
    url: 'https://profiles.wordpress.org/moataz-mohammady/',
    show: false,
  },
  goodreads: {
    icon: 'fa-book',
    url: 'https://www.goodreads.com/user/show/92723087-moataz-mohammady',
    show: false,
  },
  caramellaapp: {
    icon: 'fas fa-tint',
    url: 'https://caramellaapp.com/moatazmohammady',
    show: false,
  },
  youtube: {
    icon: 'fa-youtube',
    url: 'https://www.youtube.com/@moatazMohamady',
    show: false,
  },
  upwork: {
    icon: 'fa-upwork',
    url: 'https://www.upwork.com/freelancers/~014cb5bb210055661c',
    show: false,
  },
};
// eslint-disable-next-line no-sparse-arrays
const certifications = [
  {
    place: 'Udemy',
    title: 'Introduction to TypeScript',
    description:
      'This certificate above verifies that Moataz Mohammady successfully completed the course Introduction to TypeScript on 07/26/2021',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-f4d3813f-511b-405d-971b-b0f88039ec7b.pdf',
    issued: 'July 2021',
  },
  {
    place: 'Udacity',
    title: 'Web Development Professional',
    description: 'Nanodegree',
    url: 'https://graduation-api.udacity.com/api/certificate/A57FXWSR/download',
    issued: 'Aug 2020',
  },

  {
    place: 'futurelearn.com',
    title: "BASIC ENGLISH 2: PRE-INTERMEDIATE KING'S COLLEGE LONDON",
    description:
      'This online course helped you to demonstrate understanding of language that can help you progress along the path to studying at a university.',
    url: 'https://www.futurelearn.com/certificates/d829clk',
    issued: 'Jan 2020',
  },

  {
    place: 'Udacity',
    title: 'Front End Development Track',
    description: 'One Million Arab Coders',
    url: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/8274026e-a9af-49ba-b82b-66b5824b65fe.pdf',
    issued: 'May 2019',
  },

  {
    place: 'futurelearn.com',
    title: "BASIC ENGLISH 1: ELEMENTARY KING'S COLLEGE LONDON",
    description:
      'This course helped you develop your use of English in a range of everyday situations and built your confidence by improving your listening skills.',
    url: 'https://www.futurelearn.com/certificates/tl15gwi',
    issued: 'Dec 2018',
  },

  {
    place: 'Freecodecamp',
    title: 'Responsive Web Design',
    description:
      'Developer Certification, representing approximately 300 hours of coursework',
    url: 'https://www.freecodecamp.org/certification/fcc319f679c/responsive-web-design',
    issued: 'Jun 2018',
  },

  ,
  {
    place: 'Sololearn',
    title: 'HTML Fundamentals course',
    url: 'https://www.sololearn.com/Certificate/1014-1342830/pdf/',
    issued: 'Jan 2017',
  },
  ,
  {
    place: 'Sololearn',
    title: 'PHP Fundamentals course',
    url: 'https://www.sololearn.com/Certificate/1059-1342830/pdf/',
    issued: 'July 2016',
  },
  ,
  {
    place: 'Sololearn',
    title: 'JavaScript Fundamentals course',
    url: 'https://www.sololearn.com/Certificate/1024-1342830/pdf/',
    issued: 'Sept 2016',
  },
];
const colors = [
  {
    primary: '#4b4b4b',
    secondary: '#f09733',
  }, //sublime
  {
    primary: '#252526',
    secondary: '#007acc',
  }, //vscode
  {
    primary: '#4d4d4d',
    secondary: '#22a3dc',
  }, //brackets
  {
    primary: '#24292e',
    secondary: '#2ea44f',
  }, //github
  {
    primary: '#000000',
    secondary: '#e16259',
  }, //notion
  // { primary: '#DC2167', secondary: '#0F1237' },
  // { primary: '#CD2731', secondary: '#96CBBB' },
  // { primary: '#E9C121', secondary: '#010101' },
  // { primary: '#EEC710', secondary: '#0D1239' },
  // { primary: '#1D3D59', secondary: '#FE6F42' },
  // { primary: '#DFB891', secondary: '#1D817F' },
  // { primary: '#CE9CAA', secondary: '#1769A4' },
  // { primary: '#782049', secondary: '#1E2963' },
  // { primary: '#7F307F', secondary: '#6781B3' },
  // { primary: '#1D3B45', secondary: '#C65F1D' },
  // { primary: '#1E1E1E', secondary: '#D5A06B' },
  // { primary: '#D5D274', secondary: '#196537' },
  // { primary: '#C43C9A', secondary: '#FFE005' },
  // { primary: '#D01B3B', secondary: '#4104C6' },
  // { primary: '#1FBBB4', secondary: '#1979A1' },
  // { primary: '#316072', secondary: '#F67D80' },
  // { primary: '#54BABF', secondary: '#ADDBD9' },
  // { primary: '#99BC44', secondary: '#DB2977' },
];

const projects = [
    {
    title: 'Ozn Waeiah Institute',
    url: 'https://oznwaeiah.com/',
    tools: ['WordPress'],
    year: '2025',
    icon: 'fa-wordpress',
    show: true,
    description: 'Website for Ozn Waeiah Institute',
  },
  {
    title: 'in Quran Academy',
    url: 'https://inquranacademy.com/',
    tools: ['WordPress'],
    year: '2025',
    icon: 'fa-wordpress',
    show: true,
    description: 'Website for In Quran Academy',
  },
  {
    title: 'Quranst Website',
    url: 'https://quranst.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2024',
    show: true,
    description: 'Website for Quranst Institute',
  }, {
    title: 'Diwan Academy Website',
    url: 'https://diwanacademy.net/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2024',
    show: true,
    description: 'Website for diwan academy',
  },

  {
    title: 'Alawal Academy Website',
    url: 'https://alawalacademy.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2024',
    show: true,
    description: 'Website for alawal academy',
  },
  {
    title: 'Ahlan Academy Website',
    url: 'https://ahlanacademy.net/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2024',
    show: true,
    description: 'Website for ahlan academy',
  },

  {
    title: 'Inarah Academy Website',
    url: 'https://inarahacademy.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2024',
    show: true,
    description: 'Website for inarah academy',
  },

  {
    title: 'Quran Spring Website',
    url: 'https://quranspring.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2023',
    show: true,
    description: 'Website for Quran Spring company',
  },
  {
    title: 'Quran Moddaker Website',
    url: 'https://quranmoddaker.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2023',
    show: true,
    description: 'Website for Quran Moddaker company',
  },




 
  {
    title: 'Mansouria Directory',
    url: 'https://directory.egycodecrafters.com/',
    tools: ['Laravel'],
    icon: 'fa-laravel',
    year: '2024',
    show: true,
    description: 'Our application is a comprehensive and innovative platform that aims to simplify your daily life and save time and effort by offering a wide range of services under one roof. The application is designed to be the perfect solution for all your daily needs, providing quick and easy access to a variety of services covering various aspects of life.',
  },



 
  {
    title: 'moneyManger',
    url: 'https://github.com/MoatazAbdAlmageed/adonis-moneyManger',
    tools: ['adonis', 'mysql', 'TypeScript'],
    icon: 'fa-nodejs',
    year: '2021',
    show: true,
    description: 'simple moneyManger using adonisJs',
  },
  {
    title: 'Az-Translation',
    url: 'https://az-translation.com/',
    tools: ['WordPress'],
    icon: 'fa-wordpress',
    year: '2017',
    show: false,
    description: 'Website for Az-Translation company',
  },
  {
    title: 'CodingDir',
    url: 'https://codingdir.gatsbyjs.io/',
    icon: 'fa-globe',
    tools: ['gatsbyjs', 'chakra-ui'],
    year: '2021',
    show: true,
    description: 'Simple website for list Youtube channels (Arabic,English)',
  },
  {
    title: 'News aggregator',
    url: 'https://github.com/MoatazAbdAlmageed/news-server',
    demo: 'https://www.loom.com/share/1522833ee84e403588bf6cacb0629aea',
    icon: 'fa-globe',
    tools: ['laravel', 'chakra-ui', 'react'],
    year: '2023',
    show: true,
    description: 'News aggregator',
    server: 'https://github.com/MoatazAbdAlmageed/news-server',
    client: 'https://github.com/MoatazAbdAlmageed/news-client',
  },
];
const jobs = [

  {
    company: 'Wuilt',
    logo: 'https://assets-global.website-files.com/614319338322d2f96eb4dd96/615c930a565cd057bcdc8df3_Wuilt%20Logo%20W%20Colored.svg',
    url: 'http://wuilt.com/',
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'typescript',
      'react',
      'PHP',
      'mysql',
      'Laravel',
      'wordPress',
      'graphql',
      'nodejs',
      'mongodb',
    ],
    period: '',
    startDate: dayjs('2020-01-01'),
    endDate: dayjs('2025-05-31'),
    present: false,
    occupation: 'Backend web developer',
    responsibilities: [
  "Developed and maintained server-side logic using PHP and Laravel.",
  "Built and maintained RESTful APIs for internal and external use.",
  "Resolved system issues to ensure platform stability and performance.",
  "Enhanced Builder API performance, significantly improving speed and reliability.",
  "Delivered high-quality, scalable web applications aligned with business needs.",
  "Optimized Google Translation API integration by switching from single to bulk translation, improving UX, reducing bugs, and cutting external API costs.",
  "Wrote unit and integration tests using PHPUnit to ensure code reliability and reduce bugs during development.",
  "Mentored junior developers through code reviews, architectural discussions, and pair programming sessions.",
  "Integrated Laravel queues to asynchronously send customer behavior events to HubSpot, improving reliability and decoupling external API calls from the main application flow.",
  "Integrated external APIs including Stripe (for billing and subscription management), Google Translation API (for multilingual support), and Pixabay (for image search and content enrichment).",
  "Operated within Agile development teams using sprint-based workflows to deliver iterative features and improvements.",
  "Built a proof of concept (POC) integrating AI tools like Mistral.ai into the page builder platform to explore automated content generation, enhancing efficiency for a potential user base of over 200,000 clients."
    ],
    description: '',
    projects: [
      {
        name: 'Wuilt blog',
        url: 'https://wuilt.com/blog/ar/',
        technologies: ['WordPress'],
      },
      {
        name: 'Wuilt Builder',
        url: 'https://app.wuilt.com/',
        technologies: ['PHP', 'Laravel', 'reactJS'],
      },
      {
        name: 'Wuilt Store',
        url: 'http://store.wuilt.com/',
        technologies: ['nodeJS', 'mondoDB', 'graphql', 'reactJS'],
      },
    ],
  },
  {
    company: 'camelCase',
    logo: 'https://camelcasetech.com/assets/img/logo_camelcasetech.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'mysql', 'Laravel'],
    responsibilities: [
  "Building UI using HTML, CSS, JS.",
  "Building Web applications using PHP, Laravel, Zend.",
  "Collaborate with other team members and stakeholders.",
  "Stay up-to-date on emerging technologies.",
  "Wrote unit and integration tests using PHPUnit to ensure code reliability and reduce bugs during development."

    ],
    url: 'https://camelcasetech.com/',
    period: 'May 2018 - Dec 2019',
    startDate: dayjs('2018-05-01'),
    endDate: dayjs('2019-12-30'),
    occupation: 'Backend web developer',
    description: '',
    projects: [
      {
        name: 'skilledmatrix.com',
        url: 'http://skilledmatrix.com/',
        technologies: ['PHP', 'Laravel'],
      },

      {
        name: 'skillsbuilderpro.com',
        url: 'http://skillsbuilderpro.com/',

        technologies: ['PHP', 'Zend'],
      },
      {
        name: 'knowledgeworkerspro.com',
        url: 'http://knowledgeworkerspro.com/',

        technologies: ['PHP', 'Zend'],
      },
    ],
  },

  {
    company: 'Nile Bits',
    logo: 'https://www.nilebits.com/wp-content/uploads/2020/09/styick.png',
    url: 'https://www.nilebits.com/',
    technologies: ['HTML', 'CSS', 'Javascript', 'angularjs', 'angular'],
    period: 'Jan 2017 - Apr 2018',
    startDate: dayjs('2017-01-1'),
    endDate: dayjs('2018-04-30'),
    occupation: 'Front-End developer',
    responsibilities: [
      'Created custom AngularJS components for internal framework',
      'Build reusable code and libraries for future use',
      'Collaborate with other team members and stakeholders',
    ],
    description: '',
    projects: [
      {
        name: 'netscribe',
        url: 'https://viqsolutions.com/solutions/netscribe/',

        technologies: ['angularjs'],
      },
    ],
  },

  {
    company: 'TIE',
    logo: 'https://tie.sa/wp-content/uploads/2024/09/4-eng-1.png',
    url: 'http://tie.com.eg/',
    technologies: [
      'HTML',
      'CSS',
      'Javascript',
      'PHP',
      'mysql',
      'Laravel',
      'rails',
      'angularjs',
    ],
    period: 'Sep 2016 - Jan 2017',
    startDate: dayjs('2016-08-1'),
    endDate: dayjs('2017-01-01'),
    occupation: 'WordPress developer',
    responsibilities: [
      'Generating WordPress themes and plugins.',
      'Troubleshooting content issues.',
      'Conducting website performance tests.',
    ],
    description: '',
    projects: [
      {
        name: 'la creation',
        url: 'https://www.instagram.com/la__creation/',
        technologies: ['PHP', 'Wordpress'],
      },
      {
        name: 'Transportation project',
        url: '#',
        technologies: ['Ruby on Rails', 'angularjs'],
      },
    ],
  },

  {
    company: 'EgyCoders',
    url: 'http://www.egycoders.com/',
    technologies: ['HTML', 'CSS', 'Javascript', 'angularjs'],
    period: 'Mar 2016 - Jun 2016',
    startDate: dayjs('2016-03-1'),
    endDate: dayjs('2016-06-01'),

    occupation: 'Front-End developer',
    responsibilities: [
      'Develop new user-facing features',
      'Assure that all user input is validated before submitting to back-end',
    ],
    description: '',
    projects: [
      {
        name: 'hotel reservation project',
        url: '#',
        technologies: ['angularjs'],
      },
    ],
  },
  {
    company: 'Orchtech',
    logo: 'https://cdn.shortpixel.ai/spai/w_491+q_lossy+ret_img+to_webp/https://orchtech.com/wp-content/uploads/2019/07/orchtech_Logo-01.png',
    url: 'https://www.orchtech.com/',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'mysql', 'wordPress'],
    period: 'Dec 2015 - May 2016',
    startDate: dayjs('2015-12-01'),
    endDate: dayjs('2016-05-01'),

    occupation: 'WordPress Developer',
    responsibilities: [
      'Generating WordPress themes and plugins.',
      'Troubleshooting content issues.',
      'Conducting website performance tests.',
    ],
    description: '',
    projects: [
      {
        name: 'sevensprings.ch',
        url: 'https://sevensprings.ch/',

        technologies: ['PHP', 'Wordpress'],
      },
      {
        name: 'shapwasco.com',
        url: 'http://shapwasco.com.eg',

        technologies: ['PHP', 'Wordpress'],
      },
      {
        name: 'uacciap.org',
        url: 'http://uacciap.org',

        technologies: ['PHP', 'Wordpress'],
      },
    ],
  },
  {
    company: 'Leogami',
    logo: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/348428110_1316224438977334_4606188085044298261_n.png?stp=dst-png_s480x480&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=ZTleuczNtcQQ7kNvwG2r_BH&_nc_oc=AdlXEyhB_MNWEg2jOcVSs9LSHPr9PYu_kSo-QTU38OgczgUKsPSrWqx4DLOIoRL01NA&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2OXzWPKCVtBdO0tfhCl4AA&oh=00_AfLST0ZD_7yE6UWOxJJ-IZaMRvzIowyUBrM-35I0QA-9gw&oe=683C6220',
    url: 'http://leogami.com/',
    technologies: ['HTML', 'CSS', 'Javascript', 'PHP', 'mysql', 'wordPress'],
    period: 'Oct 2015 - Nov 2015',
    startDate: dayjs('2015-08-01'),
    endDate: dayjs('2015-11-01'),

    occupation: 'WordPress Developer',
    responsibilities: [
      'Designing and building the website front-end.',
      'Creating the website architecture.',
      'Generating WordPress themes and plugins.',
    ],
    description: '',
    projects: [
      {
        name: 'contraplanii',
        url: 'http://www.contraplanii.com',
        icon: 'fa-globe',
        tools: ['wordpress'],
        year: '2015',
        show: true,
        description: 'contraplanii website',
      },
      {
        name: 'https://fiestaegypt.com/',
        url: 'http://www.fiestaegypt.com',
        icon: 'fa-globe',
        tools: ['wordpress'],
        year: '2015',
        show: true,
        description: 'fiestaegypt website',
      },
    ],
  },
  /* ... */
];

module.exports = {
  siteTitle: 'Moataz Mohammady | Senior PHP Laravel Developer', // <title>
  description: "Back-End Web Developer specializing in PHP and Laravel, with experience building scalable, secure applications and designing RESTful APIs. Skilled in MySQL, MongoDB, and third-party integrations. Proficient in authentication, security, and familiar with HTML, CSS, JavaScript, React, and Angular for effective front-end collaboration. Also familiar with basic DevOps practices such as Docker, server setup, and CI/CD pipelines.",
  manifestName: 'Resume',
  manifestShortName: 'Moataz Mohammady', // max 12 characters
  manifestStartUrl: 'https://moatazabdalmageed.github.io/',
  manifestBackgroundColor: '#1D3D59',
  manifestThemeColor: '#FE6F42',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/avatar.png',
  pathPrefix: '/',
  firstName: 'Moataz',
  lastName: 'Mohammady',
  githubUsername: 'MoatazAbdAlmageed',
  position: 'Senior PHP Laravel Developer',
  site_img:
    'https://avatars2.githubusercontent.com/u/17373050?s=460&u=b26d5f5d825283b7b067e10a46add610b512cb26&v=4',

  keywords:
    'developer,web,code,programming,html,css,js,react,php,mysql,docker,nodejs,mongodb',
  TRACKING_ID: process.env.TRACKING_ID,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  FORMSPREE: 'xgenoded', // create your form from => https://formspree.io
  colors,
  education: [
    {
      place: 'Cairo University',
      url: 'https://cu.edu.eg/Home',
      title: "Bachelor's Degree in Commerce",
      period: '2008 - 2013',
    },
  ],
  skills,
  kids,
  volunteerActivities: [
    {
      title: 'Resala Charity Organization | جمعية رسالة للأعمال الخيرية',
      url: 'https://resala.org/',
    },
  ],
  interests,
  socialLinks,
  certifications,
  email: 'moataz.mohammady@gmail.com',
  whatsapp: 'https://wa.me/201150064746',
  phone: '+201150064746',
  phone2: '+201067869404',
  address: 'Mansouria,Giza,Egypt',
  location: 'https://goo.gl/maps/QHh4H4eYJMByuneC8',
  REACT_APP_SITE_KEY: '6Lep6c0iAAAAAKc4uMszguapnASF0Yi0gdRm9ZGi',
  projects,
  jobs,
};
