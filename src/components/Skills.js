import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px'
  },
  header: {
    fontSize: 18,
    marginBottom: '10px',
    fontFamily: 'Open Sans Condensed Bold'
  },
  skillEntryContainer: {
    marginBottom: '10px',
    //minHeight: '50px'
  },
  skillEntryHeader: {
    marginBottom: '2px',
    fontSize: 14,
    fontFamily: 'Open Sans Condensed Bold'
  }
});

const skills = [
  {
    id: 0,
    skill: "JavaScript & Web Technologies",
    items: [
      "ES2015",
      "NodeJS",
      "Babel",
      "Yarn",
      "Webpack",
      "ReactJS",
      "CSS Preprocessors"
    ]
  },
  {
    id: 1,
    skill: "Java",
    items: [
      "JDK 11",
      "Java Persistence API (JPA)",
      "Hibernate",
      "JUnit",
      "Maven",
      "Gradle",
      "Lombak",
      "Immutables",
      "Quartz"
    ]
  },
  {
    id: 2,
    skill: "Spring",
    items: [
      "Spring Framework",
      "Spring Boot",
      "Spring Security",
      "Spring Web MVC",
      "Spring Data",
      "Spring Batch"
    ]
  },
  {
    id: 3,
    skill: "Databases & Datastores",
    items: [
      "Oracle \+ PL/SQL",
      "PostgreSQL \+ PL/pgSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "DynamoDB",
      "Lucene/Solr"
    ]
  },
  {
    id: 5,
    skill: "Amazon Web Services",
    items: [
      "Lambda",
      "API Gateway",
      "Virtual Private Cloud (VPC)",
      "Elastic Compute Cloud (EC2)",
      "Simple Storage Service (S3)",
      "Elastic Block Store (EBS)",
      "Identity Access Management (IAM)",
      "Elastic Load Balancer (ELB)",
      "Route 53",
      "Relational Database Service (RDS)",
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
      "Nomad"
    ]
  },
  {
    id: 6,
    skill: "Computer Science & Software Engineering",
    items: [
      "Inversion of Control (IoC)",
      "Aspect-Oriented Programming (AOP)",
      "Object-Relational Mapping (ORM)",
      "Continuous Integration \/ Continuous Deployment \(CI\/CD\)",
      "Configuration Management",
      "Container Orchestration",
      "Service Discovery",
      "Secrets Management",
      "Assymptotic Analysis"
    ]
  }
];

const SkillsEntry = ({ skill, items }) => (
  <View style={styles.skillEntryContainer}>
    <Text style={styles.skillEntryHeader}>{skill}</Text>
    <Text>{items.join(', ')}</Text>
  </View>
);

const Skills = () => (
  <View style={styles.skillsContainer}>
    <Text style={styles.header}>Skills</Text>
    {
      skills.map(e => (
        <SkillsEntry
          key={e.id}
          skill={e.skill}
          items={e.items}
        />
      ))
    }
  </View>
);

export default Skills;
