import type { Icon } from "@phosphor-icons/react";
import { ArrowsClockwise, Hammer, House, HouseLine, MagnifyingGlass, Shield } from "@phosphor-icons/react";

export interface ServiceData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  icon: Icon;
  included: string[];
  whyChoose: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "flat-roof-installation",
    name: "Flat Roof Installation",
    shortDesc: "Complete new flat roof installations using high-quality materials and proven techniques. We handle everything from residential extensions to commercial buildings with precision and care.",
    heroDesc: "Complete new flat roof installations using high-quality materials and proven techniques. We handle everything from residential extensions to commercial buildings with precision and care. Strandek Flat Roofing Bristol provides professional flat roof installation services across Bristol.",
    icon: HouseLine,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does flat roof installation cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Flat Roof Installation in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional flat roof installation in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "flat-roof-repairs",
    name: "Flat Roof Repairs",
    shortDesc: "Quick and effective repairs for leaks, cracks, and weather damage on all types of flat roofing. Our experienced team identifies the root cause and provides lasting solutions.",
    heroDesc: "Quick and effective repairs for leaks, cracks, and weather damage on all types of flat roofing. Our experienced team identifies the root cause and provides lasting solutions. Strandek Flat Roofing Bristol provides professional flat roof repairs services across Bristol.",
    icon: ArrowsClockwise,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does flat roof repairs cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Flat Roof Repairs in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional flat roof repairs in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-waterproofing",
    name: "Roof Waterproofing",
    shortDesc: "Professional waterproofing services to protect your property from water damage and leaks. We use advanced materials and techniques to ensure your roof stays watertight.",
    heroDesc: "Professional waterproofing services to protect your property from water damage and leaks. We use advanced materials and techniques to ensure your roof stays watertight. Strandek Flat Roofing Bristol provides professional roof waterproofing services across Bristol.",
    icon: Shield,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof waterproofing cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Waterproofing in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional roof waterproofing in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-inspections",
    name: "Roof Inspections",
    shortDesc: "Thorough roof inspections to identify potential problems before they become costly repairs. We provide detailed reports with clear recommendations for any necessary work.",
    heroDesc: "Thorough roof inspections to identify potential problems before they become costly repairs. We provide detailed reports with clear recommendations for any necessary work. Strandek Flat Roofing Bristol provides professional roof inspections services across Bristol.",
    icon: MagnifyingGlass,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof inspections cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Inspections in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional roof inspections in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "emergency-roof-repairs",
    name: "Emergency Roof Repairs",
    shortDesc: "Fast response emergency repairs for urgent roofing problems that can\'t wait. Available for storm damage, sudden leaks, and other roofing emergencies across Bristol.",
    heroDesc: "Fast response emergency repairs for urgent roofing problems that can\'t wait. Available for storm damage, sudden leaks, and other roofing emergencies across Bristol. Strandek Flat Roofing Bristol provides professional emergency roof repairs services across Bristol.",
    icon: Hammer,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does emergency roof repairs cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Emergency Roof Repairs in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional emergency roof repairs in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  },
  {
    slug: "roof-maintenance",
    name: "Roof Maintenance",
    shortDesc: "Regular maintenance services to extend the life of your flat roof and prevent costly problems. We keep your roof in excellent condition with scheduled inspections and upkeep.",
    heroDesc: "Regular maintenance services to extend the life of your flat roof and prevent costly problems. We keep your roof in excellent condition with scheduled inspections and upkeep. Strandek Flat Roofing Bristol provides professional roof maintenance services across Bristol.",
    icon: House,
    included: [
      "Free initial consultation and assessment",
      "Fully qualified and experienced tradespeople",
      "Quality materials from trusted suppliers",
      "Full clean-up on completion",
      "Workmanship guarantee on all work",
      "Fully insured for your peace of mind"
    ],
    whyChoose: [
      "Experienced local team with an excellent reputation.",
      "We use only high-quality materials for lasting results.",
      "Transparent pricing with no hidden costs.",
      "Fully insured and guaranteed work."
    ],
    faqs: [
      { q: "How much does roof maintenance cost?", a: "Every job is different. We offer free, no-obligation quotes so you know exactly what to expect before any work begins." },
      { q: "How long does the work usually take?", a: "Timescales depend on the scope of the job. We will give you a clear timeline during your free consultation." },
      { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance and all our work is guaranteed." }
    ],
    relatedSlugs: [],
    metaTitle: "Roof Maintenance in Bristol | Strandek Flat Roofing Bristol",
    metaDesc: "Professional roof maintenance in Bristol and Bristol. Strandek Flat Roofing Bristol offers free quotes, quality workmanship, and fully insured services."
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}
