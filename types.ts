import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  category: 'Languages' | 'Web' | 'Tools' | 'Core' | 'Design';
  level: number; // 0 to 100
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  type: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  website: string;
}