module.exports = {
  siteTitle: 'Moataz Mohammady Resume', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Moataz Mohammady', // max 12 characters
  manifestStartUrl: 'https://moatazabdalmageed.github.io/',
  manifestBackgroundColor: '#99BC44',
  manifestThemeColor: '#DB2977',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: '', // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Moataz',
  lastName: 'Mohammady',
  githubUsername: 'MoatazAbdAlmageed',
  position: 'Full stack Web Developer',
  description: `With 4+ years of experience leveraging PHP & JavaScript to build responsive websites, and interactive features that drive business growth and improve UX.`,
  keywords: 'developer,web,code,programming,',
  integration: {
    TRACKING_ID: process.env.TRACKING_ID,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  education: [
    {
      place: 'Cairo University',
      url: 'https://cu.edu.eg/Home',
      title: "Bachelor's Degree in Commerce",
      period: '2008 - 2013',
    },
  ],
  skills: [
    'html5',
    'css3-alt',
    'js-square',
    'react',
    'node-js',
    'sass',
    'less',
    'php',
    'wordpress',
    'laravel',
    'gulp',
    'grunt',
    'npm',
    'linux',
    'git',
  ],

  skillsAdImag: [
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYgMjgiIGZvY3VzYWJsZT0iZmFsc2UiPgogIDxwYXRoIGQ9Ik02Mi45IDEyaDIuOHYxMGgtMi44di0xLjNjLTEgMS41LTIuMyAxLjYtMy4xIDEuNi0zLjEgMC01LjEtMi40LTUuMS01LjMgMC0zIDItNS4zIDQuOS01LjMuOCAwIDIuMy4xIDMuMiAxLjZWMTJ6bS01LjIgNWMwIDEuNiAxLjEgMi44IDIuOCAyLjggMS42IDAgMi44LTEuMiAyLjgtMi44IDAtMS42LTEuMS0yLjgtMi44LTIuOC0xLjYgMC0yLjggMS4yLTIuOCAyLjh6bTEzLjUtMi42VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRoLTEuOXptOC41IDBjLS43LS42LTEuMy0uNy0xLjYtLjctLjcgMC0xLjEuMy0xLjEuOCAwIC4zLjEuNi45LjlsLjcuMmMuOC4zIDIgLjYgMi41IDEuNC4zLjQuNSAxIC41IDEuNyAwIC45LS4zIDEuOC0xLjEgMi41cy0xLjggMS4xLTMgMS4xYy0yLjEgMC0zLjItMS0zLjktMS43bDEuNS0xLjdjLjYuNiAxLjQgMS4yIDIuMiAxLjIuOCAwIDEuNC0uNCAxLjQtMS4xIDAtLjYtLjUtLjktLjktMWwtLjYtLjJjLS43LS4zLTEuNS0uNi0yLjEtMS4yLS41LS41LS44LTEuMS0uOC0xLjkgMC0xIC41LTEuOCAxLTIuMy44LS42IDEuOC0uNyAyLjYtLjcuNyAwIDEuOS4xIDMuMiAxLjFsLTEuNCAxLjZ6bTYuMS0xLjFjMS0xLjQgMi40LTEuNiAzLjItMS42IDIuOSAwIDQuOSAyLjMgNC45IDUuM3MtMiA1LjMtNSA1LjNjLS42IDAtMi4xLS4xLTMuMi0xLjZWMjJIODNWNS4yaDIuOHY4LjF6bS0uMyAzLjdjMCAxLjYgMS4xIDIuOCAyLjggMi44IDEuNiAwIDIuOC0xLjIgMi44LTIuOCAwLTEuNi0xLjEtMi44LTIuOC0yLjgtMS43IDAtMi44IDEuMi0yLjggMi44em0xMyAzLjVMOTMuNyAxMkg5N2wzLjEgNS43IDIuOC01LjdoMy4ybC04IDE1LjNoLTMuMmwzLjYtNi44ek01NCAxMy43aC03djIuOGgzLjdjLS42IDEuOS0yIDMuMi00LjYgMy4yLTIuOSAwLTUtMi40LTUtNS4zUzQzLjEgOSA0NiA5YzEuNiAwIDMuMi44IDQuMiAyLjFsMi4zLTEuNUM1MSA3LjUgNDguNiA2LjMgNDYgNi4zYy00LjQgMC04IDMuNi04IDguMXMzLjQgOC4xIDggOC4xIDgtMy42IDgtOC4xYy4xLS4zIDAtLjUgMC0uN3oiLz4KICA8cGF0aCBkPSJNMjUgMTRoLTd2Mmg0LjhjLS43IDMtMi45IDUuNS01LjggNi41TDUuNSAxMWMxLjItMy41IDQuNi02IDguNS02IDMgMCA1LjcgMS41IDcuNCAzLjhsMS41LTEuM0MyMC45IDQuOCAxNy43IDMgMTQgMyA4LjggMyA0LjQgNi43IDMuMyAxMS42bDEzLjIgMTMuMkMyMS4zIDIzLjYgMjUgMTkuMiAyNSAxNHptLTIyIC4xYzAgMi44IDEuMSA1LjUgMy4yIDcuNiAyLjEgMi4xIDQuOSAzLjIgNy42IDMuMkwzIDE0LjF6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0iTTE0IDBDNi4zIDAgMCA2LjMgMCAxNHM2LjMgMTQgMTQgMTQgMTQtNi4zIDE0LTE0UzIxLjcgMCAxNCAwek02LjIgMjEuOEM0LjEgMTkuNyAzIDE2LjkgMyAxNC4yTDEzLjkgMjVjLTIuOC0uMS01LjYtMS4xLTcuNy0zLjJ6bTEwLjIgMi45TDMuMyAxMS42QzQuNCA2LjcgOC44IDMgMTQgM2MzLjcgMCA2LjkgMS44IDguOSA0LjVsLTEuNSAxLjNDMTkuNyA2LjUgMTcgNSAxNCA1Yy0zLjkgMC03LjIgMi41LTguNSA2TDE3IDIyLjVjMi45LTEgNS4xLTMuNSA1LjgtNi41SDE4di0yaDdjMCA1LjItMy43IDkuNi04LjYgMTAuN3oiIGZpbGw9IiM2MzkiLz4KPC9zdmc+Cg==',
  ],
  volunteerActivities: [
    {
      title: 'Resala Charity Organization | جمعية رسالة للأعمال الخيرية',
      url: 'https://resala.org/',
    },
  ],
  interests: [
    {
      url: '#',
      title: 'Blogining',

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
  ],
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/MoatazAbdAlmageed',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/moatazabdelmageed',
    },
    {
      icon: 'fa-stack-overflow',
      name: 'stackoverflow',
      url: 'https://stackoverflow.com/users/2524043/moataz-mohammady',
    },
    {
      icon: 'fa-codepen',
      name: 'codepen',
      url: 'https://codepen.io/Moataz-Mohammady/pens/public',
    },
    {
      icon: 'fa-behance',
      name: 'Behance',
      url: 'https://www.behance.net/moatazmohammady',
    },
    {
      icon: 'fa-wordpress',
      name: 'Wordpress Blog',
      url: 'https://profiles.wordpress.org/moataz-mohammady/',
    },
    {
      icon: 'fa-goodreads',
      name: 'Goodreads',
      url: 'https://www.goodreads.com/user/show/92723087-moataz-mohammady',
    },
    {
      icon: 'fas fa-tint',
      name: 'caramellaapp',
      url: 'https://caramellaapp.com/moatazmohammady',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/moataz.mohammady.3',
    },
  ],
  certifications: [
    {
      place: 'Udacity',
      title: 'Front End Development Track',
      description: 'One Million Arab Coders',
      url:
        'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/8274026e-a9af-49ba-b82b-66b5824b65fe.pdf',
      issued: 'May 2019',
    },
    {
      place: 'futurelearn.com',
      title: "BASIC ENGLISH 1: ELEMENTARY KING'S COLLEGE LONDON",
      description:
        'This course helped you develop your use of English in a range of everyday situations and built your confidence by improving your listening skills. You’ve heard people talking in a number of different situations and have had an opportunity to review the language through a series of quizzes.',
      url: 'https://www.futurelearn.com/certificates/tl15gwi',
      issued: 'Dec 2018',
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
      place: 'Freecodecamp',
      title: 'Responsive Web Design',
      description:
        'Developer Certification, representing approximately 300 hours of coursework',
      url:
        'https://www.freecodecamp.org/certification/fcc319f679c/responsive-web-design',
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
  ],
  email: 'moataz.mohammady@gmail.com',
  phone: '+201150064746',
  address: 'Mansouria,Giza,Egypt',
  location: 'https://goo.gl/maps/QHh4H4eYJMByuneC8',
  jobs: [
    {
      company: 'Wuilt',
      url: 'http://wuilt.com/',
      period: 'Jan 2020 - Present',
      occupation: 'Full-Stack Web Developer',
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable code and libraries for future use',
        'Collaborate with other team members and stakeholders',
      ],
      description: '',
      projects: [
        {
          name: 'Wuilt.com',
          url: 'https://app.wuilt.com/',
          technologies: [
            'PHP',
            'Laravel',
            'reactJS',
            'nodeJS',
            'mondoDB',
            'graphql',
          ],
        },
      ],
    },
    {
      company: 'camelCase',
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable code and libraries for future use',
        'Designing and managing the website back-end including database and server integration.',
      ],
      url: 'https://camelcasetech.com/',
      period: 'May 2018 - Dec 2019',
      occupation: 'Full-Stack PHP Developer',
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
      url: 'https://www.nilebits.com/',
      period: 'Jan 2017 - Apr 2018',
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
      url: 'http://tie.com.eg/',
      period: 'Sep 2016 - Jan 2017',
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
          url: 'https://www.picuki.com/profile/la__creation',
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
      period: 'Mar 2016 - Jun 2016',
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
      url: 'https://www.orchtech.com/',
      period: 'Dec 2015 - May 2016',
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
      url: 'http://leogami.com/',
      period: 'Oct 2015 - Nov 2015',
      occupation: 'WordPress Developer',
      responsibilities: [
        'Designing and building the website front-end.',
        'Creating the website architecture.',
        'Generating WordPress themes and plugins.',
      ],
      description: '',
      projects: [],
    },
    /* ... */
  ],
};
