import { Github, Linkedin, Mail, MapPin, Phone, Globe, Code, Layout, Database, Terminal, Cpu } from 'lucide-react';
import { Project, Skill, EducationItem, ContactInfo, SocialLink } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: "hanine.boudour@univ-constantine2.dz",
  phone: "+213 559 893 379",
  address: "04 Al-Quds Street, Constantine, Algeria",
  website: "www.reallygreatsite.com" // Placeholder from CV
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    url: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
    label: "Email Me"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/hanine-boudour-9a7474397", // Add actual link if available
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    platform: "GitHub",
    url: "https://github.com/HanineBDR", // Add actual link if available
    icon: Github,
    label: "GitHub"
  }
];

export const SKILLS: Skill[] = [
  // Programming
  { name: "Java (OOP)", category: "Languages", level: 90 },
  { name: "Python", category: "Languages", level: 85 },
  { name: "C / C++", category: "Languages", level: 80 },
  { name: "JavaScript", category: "Languages", level: 85 },
  { name: "SQL", category: "Languages", level: 80 },
  
  // Web
  { name: "React", category: "Web", level: 85 },
  { name: "Spring Boot", category: "Web", level: 80 },
  { name: "HTML & CSS", category: "Web", level: 95 },
  { name: "PHP", category: "Web", level: 70 },
  { name: "API Development", category: "Web", level: 80 },

  // Tools & Design
  { name: "Git", category: "Tools", level: 85 },
  { name: "Figma", category: "Design", level: 80 },
  { name: "Canva", category: "Design", level: 90 },
  { name: "IntelliJ / Eclipse", category: "Tools", level: 90 },
  { name: "MySQL Workbench", category: "Tools", level: 85 },

  // Core
  { name: "Algorithms", category: "Core", level: 85 },
  { name: "UML Design", category: "Core", level: 90 },
  { name: "Networking", category: "Core", level: 75 },
];

export const PROJECTS: Project[] = [
  {
    title: "DAW – Clothing Store Web App",
    description: "Led a team to design and develop a full-stack clothing store application. Modeled architecture using UML diagrams and managed tasks via MS Project.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "UML"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    type: "Web Application"
  },
  {
    title: "Text Analyzer Application",
    description: "Developed a concurrent programming application using threads and locks to analyze text efficiently. Focused on optimization and advanced Java techniques.",
    technologies: ["Java", "Concurrency", "Threads", "JavaFX"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    type: "Desktop Application"
  },
  {
    title: "UML Implementation Project",
    description: "A specialized project focused on implementing complex UML diagrams to model robust software systems, strengthening architectural design skills.",
    technologies: ["UML", "Software Design", "Documentation"],
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    type: "Architecture Design"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Licence 3 - Software Engineering",
    institution: "University of Constantine 2 Abdelhamid Mehri",
    location: "Constantine, Algeria",
    period: "2023 - Present",
    details: [
      "Top female student in the cohort (Ranked 9th/391 overall).",
      "Specialized in Software Engineering (L3 GL).",
      "Key Modules: Advanced Web App Development, Concurrent Programming, Software Quality Testing."
    ]
  },
  {
    degree: "Licence 1 & 2 - New Technology",
    institution: "University of Constantine 2 Abdelhamid Mehri",
    location: "Constantine, Algeria",
    period: "Previous Years",
    details: [
      "Faculty of New Technology, Information and Communication (NTIC).",
      "Strong foundation in Algorithms, Computer Architecture, and Mathematics."
    ]
  }
];

export const CATEGORY_ICONS: Record<string, any> = {
  Languages: Terminal,
  Web: Globe,
  Tools: Cpu,
  Core: Database,
  Design: Layout,
};