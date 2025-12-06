import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  clinic: string;
  location: string;
  content: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export enum StarRating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}