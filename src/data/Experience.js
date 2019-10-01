export const experiencePageOne = [
  {
    id: 0,
    title: "Software Developer",
    organization: "BNL Consulting, LLC.",
    dates: {
      begin: "April 2014",
      end: "Aug. 2018"
    },
    summary: [
      { id: 0, text: "Designed, developed, or contributed to seven (7) client projects." },
      { id: 1, text: "Designed and implemented microservices to automate internal workflow components and processes for client’s existing commerical SaaS offering." },
      { id: 2, text: "Technical lead for internal R&D project that containerized our commerical SaaS application and subsequent deployment using Infrastructure-as-Code, configuration management, container orchestration, and public/private cloud platforms that was included in our product offering." },
      { id: 3, text: "Core developer for two (2)  year client project that entailed refactoring existing application from .NET to Java, implementing RESTful web services, improving ETL and analytics processes, expansive search functionality, and data modeling." },
      { id: 4, text: "Contributed to the development of business intelligence / analytics web applications utilizing NodeJS, AngularJS, and d3.js." },
      // Work around for parsing and including links - see ExperienceEntry implmentation
      // {id: 5, text: "Authored blog posts Cloud-First Microservices: AWS API Gateway and Lambda in Action</a> and <a href=\"\">Visualizing Clusters with ArcGIS for Flex</a>."}
    ]
  },
  {
    id: 1,
    title: "Open Data Specialist",
    organization: "Chattanooga Public Library",
    dates: {
      begin: "Feb. 2014",
      end: "April 2014"
    },
    summary: [
      { id: 0, text: "Coordinated with the City of Chattanooga Mayor's Office and various departments to identify and disseminate government data to the public." },
      { id: 1, text: "Evaluated available data portal solutions and managed chosen platform." },
    ]
  },
  {
    id: 2,
    title: "Consultant",
    organization: "Self-Employed",
    dates: {
      begin: "Jan. 2014",
      end: "Feb. 2014"
    },
    // todo should we add link? http://www.etowahwatertrail.org/
    summary: [
      { id: 0, text: "Configured, deployed, and designed a WordPress instance for the client." },
      { id: 1, text: "Produced thematic maps for one-hundred seventy (170) miles of the Etowah River Water Trail." }
    ]
  },
  {
    id: 4,
    title: "Graduate Research Assistant",
    organization: "University of Tennessee Chattanooga",
    dates: {
      begin: "Aug. 2012",
      end: "Aug. 2013"
    },
    summary: [
      // todo Reword first summary item
      // https://www.azavea.com/blog/2013/05/24/geotrellis-enables-fast-modeling/
      // https://www.thriveregionalpartnership.org/thrive-2055
      // https://github.com/baskinomics/Civitas
      // https://github.com/baskinomics/utc-geotrellis-demo

      { id: 0, text: "Contributed to the development of a distributed geospatial web application within the context of the Thrive 2055 initiative." },
      { id: 1, text: "Additionally, developed an Android application for the collection of WiFi signal strength and location data for the campus of the University of Tennessee at Chattanooga." }
    ]
  },
];

export const experiencePageTwo = [

  // When was this? Was it for course work or was in for GRA?
  // {
  //   id: 2,
  //   title: "Graduate Research Assistant",
  //   organization: "University of Tennessee Chattanooga",
  //   dates: {
  //     begin: "Jan. 2012",
  //     end: "May 2012"
  //   },
  //   summary: [
  //     {id: 0, text: "Conducted self-directed research on mobile indoor navigation systems using WiFi signal strength, Gaussian processes, cloud computing, the Android framework, and the R language."},
  //   ]
  // },
  // Need to refine the dates on this
  {
    id: 1,
    title: "Software Developer",
    organization: "SecondSite, LLC.",
    dates: {
      begin: "May 2012",
      end: "Aug. 2012"
    },
    summary: [
      { id: 0, text: "Contributed to the development of an augmented reality (AR) mobile application for the Smithsonian National Museum of African American History and Culture." },
      { id: 1, text: "Contributed to the development of an augmented reality (AR) mobile application that provided an innovative system for the maintenance of art and artifacts." }
    ]
  },
  {
    id: 2,
    title: "GIS Consultant",
    organization: "Self-Employed",
    dates: {
      begin: "Feb. 2012",
      end: "April 2012"
    },
    summary: [
      { id: 0, text: "Provided consulting services to SecondSite, LLC and the SimCenter Enterprise for Disaster Mitigation Plume/Evacuation Scenario Modeling as part of the U.S. Ignite Initiative." },
      { id: 1, text: "Developed custom ETL processes and three-dimensional mesh artifacts from high-precision urban LiDAR datasets." }
    ]
  },
  {
    id: 3,
    title: "Graduate Research Assistant",
    // todo consider wrapping this to two lines
    // organization: "Academic Research and Computing Services",
    organization: "University of Tennessee Chattanooga",
    dates: {
      begin: "June 2011",
      end: "Feb. 2012"
    },
    summary: [
      { id: 0, text: "Assisted in the deployment and management of ArcGIS Server and ArcSDE databases." },
      { id: 1, text: "Collected, documented, and organized spatial datasets for the Regional Resource Inventory project." },
      { id: 2, text: "Developed RESTful geoprocessing tasks and implemented ArcGIS API for Flex web application to consume them." }
    ]
  },
  {
    id: 4,
    title: "Graduate Teaching Assistant",
    organization: "University of Tennessee Chattanooga",
    dates: {
      begin: "Aug. 2011",
      end: "May 2012"
    },
    summary: [
      { id: 0, text: "Graded papers, assisted in labs, proctored exams, and on occasion stood in for my professor during class lectures." },
    ]
  },
  {
    id: 5,
    title: "Intern",
    organization: "Tennessee Valley Authority",
    dates: {
      begin: "July 2010",
      end: "Aug. 2011"
    },
    summary: [
      { id: 0, text: "Designed and implemented enterprise spatial database of sonar-generated point data for TVA’s Tennessee River system, including data management, documentation and metadata, and the production of bathymetric maps, TINs, and DEMs" },
      { id: 1, text: "Upon request, I fulfilled client tasks pertaining to the data such as cross-section analysis and spatial queries." }
    ]
  },
  {
    id: 6,
    title: "Math Tutor",
    // todo implemented component for department/org
    // UTK Math Tutorial Center
    organization: "University of Tennessee Knoxville",
    dates: {
      begin: "Aug. 2008",
      end: "May 2010"
    },
    summary: [
      { id: 0, text: "Tutored students at the UTK Math Tutorial Center on material ranging from Calculus I to Calculus II and proctored exams." },
    ]
  },
  {
    id: 7,
    title: "Lifeguard",
    organization: "Sportsbarn",
    dates: {
      begin: "May 2008",
      end: "Aug. 2008"
    },
    summary: []
  },
  {
    id: 8,
    title: "Lifeguard",
    organization: "YMCA",
    dates: {
      begin: "May 2006",
      end: "Aug. 2007"
    },
    summary: []
  },
  {
    id: 9,
    title: "Cashier",
    organization: "Carmike Cinemas",
    dates: {
      begin: "May 2005",
      end: "Aug. 2005"
    },
    summary: []
  },
  {
    id: 10,
    title: "Founder and Owner",
    organization: "LoserLabeled.com",
    dates: {
      begin: "Jan. 2003",
      end: "Dec. 2005"
    },
    summary: [
      { id: 0, text: "Loserlabeled.com was a website with a focus on skateboarding that offered original articles, tutorials, media, and a vibrant user community." },
      { id: 1, text: "It was designed and developed with two partners that utilized search engine optimization (SEO) techniques and Google Adsense program to generate profitable advertising revenue." }
    ]
  },
];