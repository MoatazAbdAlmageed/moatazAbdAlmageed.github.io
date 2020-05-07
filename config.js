module.exports = {
  siteTitle: 'Moataz Mohammady Resume', // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Moataz',
  lastName: 'Mohammady',
  description: `👋 Hi! this is Moataz, I am Web Developer, tech addicted, open-source lover. I blog about things related to web that I find worth sharing with the community. I also share my side projects and stuff that I am currently working on. Thanks for dropping by!`,
  jobs: [
    {
      company: "Wuilt",
      url: "http://wuilt.com/",
      begin: {
        month: 'Jan',
        year: '2020'
      },
      fromTO: 'Jan 2020 - Present',
      occupation: "Full-Stack PHP Developer",
      description: "",
      projects: [
        {
          name: 'wuilt.com',
          url: "http://wuilt.com/",
          img: "mockup.jpg",
          type: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'reactJS',
            'PHP',
            'Laravel',],
        },


      ],

    },

    {
      company: "camelCase",
      url: "https://camelcasetech.com/",
      begin: {
        month: 'May',
        year: '2018'
      },
      fromTO: 'May 2018 - Dec 2019',
      occupation: "Full-Stack PHP Developer",
      description: "",
      projects: [
        {
          name: 'skilledmatrix.com',
          url: "http://skilledmatrix.com/",
          img: "mockup.jpg",
          type: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Laravel',],
        },

        {
          name: 'skillsbuilderpro.com',
          url: "http://skillsbuilderpro.com/",
          img: "mockup.jpg",
          type: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Zend',],
        }, {
          name: 'knowledgeworkerspro.com',
          url: "http://knowledgeworkerspro.com/",
          img: "mockup.jpg",
          type: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Zend',
          ],
        },
      ],

    },

    {
      company: "Nile Bits",
      url: "https://www.nilebits.com/",
      begin: {
        month: 'Jan',
        year: '2017'
      },
      fromTO: 'Jan 2017 - Apr 2018',
      occupation: "Front-End developer",
      description: "",
      projects: [
        {
          name: 'netscribe',
          url: "https://viqsolutions.com/solutions/netscribe/",
          img: "mockup.jpg",
          type: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'angularjs'
          ],
        },
      ],


    },

    {
      company: "TIE",
      url: "http://tie.com.eg/",
      begin: {
        month: 'Sep',
        year: '2016'
      },
      fromTO: 'Sep 2016 - Jan 2017',
      occupation: "WordPress developer",
      description: "",
      projects: [],


    },

    {
      company: "EgyCoders",
      url: "http://www.egycoders.com/",
      begin: {
        month: 'Mar',
        year: '2016'
      },
      fromTO: 'Mar 2016 - JUN 2016',
      occupation: "Front-End developer",
      description: "",
      projects: [],


    }, {
      company: "Orchtech",
      url: "https://www.orchtech.com/",
      begin: {
        month: 'Dec',
        year: '2015'
      },
      fromTO: 'Dec 2015 - May 2016',
      occupation: "WordPress Developer",
      description: "",
      projects: [
        {
          name: 'sevensprings.ch',
          url: "https://sevensprings.ch/",
          img: "mockup.jpg",
          owner: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Wordpress'
          ],
        },
        {
          name: 'shapwasco.com',
          url: "http://shapwasco.com.eg",
          img: "mockup.jpg",
          owner: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Wordpress'
          ],
        },
        {
          name: 'uacciap.org',
          url: "http://uacciap.org",
          img: "mockup.jpg",
          owner: "freelance",
          skills: [
            'HTML',
            'CSS',
            'JS',
            'PHP',
            'Wordpress'
          ],
        },
      ],

    }, {
      company: "LeoGami",
      url: "http://leogami.com/",
      begin: {
        month: 'Oct',
        year: '2015'
      },
      fromTO: 'Oct 2015 - Nov 2015',
      occupation: "WordPress Developer",
      description: "",
      projects: [],


    },
    /* ... */
  ],
  // social
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
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/MoatazMohammady',
    },
    {
      icon: 'fa-facebook-f',
      name: 'Facebook',
      url: 'https://www.facebook.com/moataz.mohammady.3',
    },
  ],
  email: 'moataz.mohammady@gmail.com',
  phone: '+201150064746',
  address: 'Mansouria,Giza,Egypt',
};
