const skills = [
  {
    id: 0,
    skill: "Front-end Development",
    items: [
      "ECMAScript 2016",
      "JavaScript",
      "NodeJS",
      "AngularJS",
      "d3.js",
      "Yarn",
      "Webpack",
      "Android",
      "Apache Flex",
    ]
  },
  {
    id: 1,
    skill: "Back-end Development",
    items: [
      "Java SE 12",
      "Java EE 8",
      "Maven",
      "JUnit",
      "Mockito",
      "Java Persistence API (JPA)",
      "Hibernate",
      "Spring Framework",
      "Spring Boot",
      "Spring Web MVC",
      "Spring Data",
      "Spring Security",
      "Spring Batch",
      "Quartz",
      "Apache Tomcat",
      "Apache ActiveMQ"
      // "Jetty",
      // "Web Logic"
    ]
  },
  {
    id: 2,
    skill: "Data Stores",
    items: [
      "Oracle", // \+ PL/SQL",
      "MS SQL Server", // \+ T-SQL",
      "PostgreSQL", // \+ PL/pgSQL",
      //"MySQL",
      "SQLite",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Lucene/Solr"
    ]
  },
  {
    id: 3,
    skill: "Amazon Web Services",
    items: [
      "Lambda",
      "API Gateway",
      "VPC", // "Virtual Private Cloud (VPC)",
      "EC2", // "Elastic Compute Cloud (EC2)",
      "S3", // "Simple Storage Service (S3)",
      "EBS", // "Elastic Block Store (EBS)",
      "IAM", // "Identity Access Management (IAM)",
      "ELB", // "Elastic Load Balancer (ELB)",
      "Route 53",
      "RDS", // "Relational Database Service (RDS)",
      "DynamoDB",
      "AWS CLI"
    ]
  },
  {
    id: 4,
    skill: "DevOps",
    items: [
      "Jenkins",
      "Docker",
      "Ansible",
      "Packer",
      "Terraform",
      "Consul",
      "Nomad",
      // "Configuration Management",
      // "Container Orchestration",
      // "Service Discovery",
    ]
  },
  // {
  //   id: 5,
  //   skill: "GIS",
  //   items: [
  //     "ArcGIS Pro",
  //     "ArcSDE",
  //     "QGIS",
  //     "GDAL",
  //     "PDAL",
  //     "PCL",
  //     "CGAL",
  //     "Geotrellis",
  //     "MapBox",
  //   ]
  // },
  {
    id: 6,
    skill: "Programming Languages",
    items: [
      "Java",
      "JavaScript",
      "Python",
      "C",
      "C++",
      "Go",
      "R",
      "Julia",
      "SQL",
      "Bash",
      "ActionScript",
    ]
  },
  {
    id: 7,
    skill: "Software Engineering",
    items: [
      "Agile Methodologies",
      "Test-Driven Development (TDD)",
      "Continuous Integration (CI)",
      "Continuous Deployment (CD)",
      // "12-Factor Applications",
      // "Serverless",
      // "Unified Modeling Language (UML)",
      // "Domain-Driven Design",
      "Enterprise Integration Patterns (EIP)",
      // "Business Process Modeling (BOM)",
      // "Inversion of Control (IoC)", todo determine if DI is more appropriate as it relates to Spring
      // "Aspect-Oriented Programming (AOP)",
      "Version Control Systems",
      // "SemVar"
      // Note: Wikipedia has this nested under Database
      // "Object-Relational Mapping (ORM)",
    ]
  },
  {
    id: 8,
    skill: "Computer Science",
    items: [
      "Algorithms and Datastructures",
      "Programming Methodology",
      "Systems Programming",
      "Theory of Programming Languages",
      // "Theory of Computation",
      "Computer Architecture",
      "Computer Networks",
      // "Parallel Algorithms",
      "Cloud Computing",
      "Mobile Computing",
      "Systems Software",
      "Computational Geometry",
      "Machine Learning",
    ]
  },
  {
    id: 9,
    skill: "Geographic Information Science",
    items: [
      "Cartography",
      "Coordinate Systems and Projections",
      "Spatial Data Models",
      "Remote Sensing",
      "Spatial Statistics",
      "Geostatistics",
      "Geovisualization",
      "Spatial Decision Support Systems (SDSS)",
    ]
  },
  {
    id: 10,
    skill: "Mathematics",
    // Discrete Mathematics
    // -> Theoretical Computer Science
    // ->> Automata Theory, formal language
    // ->> Computational Geometry
    // ->>> Geometric Algorithms | https://en.wikipedia.org/wiki/List_of_geometry_topics#Geometric_algorithms
    // -> Logic
    // -> Set Theory
    // -> Combinatorics
    // -> Graph Theory
    // -> Probability
    // -> Algebra
    // Numeric Analysis
    // -> Interpolation, extrapolation, and regression
    // -> Linear Algebra
    // -> Optimization
    // -> Calculus
    // -> Differential Equations
    // -> Numeric Geometry | https://en.wikipedia.org/wiki/List_of_geometry_topics#Numerical_geometry
    // Statistics
    // -> Data
    // -> Methods
    // ->> Descriptive
    // ->> Inferential
    // ->> Exploratory
    // -> Spatial Analysis
    // Machine Learning
    // -> Learning Algorithms
    // ->> Supervised
    // ->> Unsupervised
    items: [
      // "Automata Theory",
      "Set Theory",
      "Graph Theory",
      "Topology",
      "Combinatorics",
      "Probability",
      "Differential Equations",
      "Calculus",
      "Linear Algebra",
      "Statistics",
    ]
  },
];

export default skills;