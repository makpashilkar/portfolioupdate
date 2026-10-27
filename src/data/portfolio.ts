export type SkillCategory = 'Frontend' | 'Backend' | 'AI' | 'Creative';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: string;
  description?: string;
  url?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  type?: string;
  location?: string;
  url?: string;
  published: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  thumbnailAlt?: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  published: boolean;
  status?: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  instagram?: string;
}

export interface PortfolioConfig {
  name: string;
  shortName: string;
  headline: string;
  intro: string;
  about: string;
  location: string;
  availability: string;
  interests: string;
  resumeUrl?: string;
  socialLinks: SocialLinks;
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
  };
  visibility: {
    about: boolean;
    skills: boolean;
    experience: boolean;
    projects: boolean;
    contact: boolean;
  };
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

// EDIT THIS FILE TO UPDATE PORTFOLIO CONTENT, CONTACT LINKS, EXPERIENCE, PROJECTS, AND RESUME.
export const portfolio: PortfolioConfig = {
  name: 'Makarand Pashilkar',
  shortName: 'Makarand',
  headline: 'Software Developer · Creator · Problem Solver',
  intro: 'I build web experiences that feel alive. Currently exploring GenAI, good food, and a better tomorrow.',
  about: "I'm a B.Tech graduate with a passion for building useful things on the web. I enjoy coding, creating content, and exploring new technologies — especially AI. When I'm not at my laptop, you'll probably find me cooking something, climbing mountains, or thinking about my next idea.",
  location: 'Thane, India',
  availability: 'Open to opportunities',
  interests: 'AI, web development, design, food, and creative projects',
  resumeUrl: '/MAKARAND_PASHILKAR_RESUME_8779878628.pdf', // Replace with the supplied PDF path, for example /resume.pdf.
  socialLinks: {
    email: 'makpashilkar@gmail.com', // Replace with your real email address.
    github: 'https://github.com/makpashilkar', // Replace with your GitHub URL, for example https://github.com/your-username.
    linkedin: 'https://www.linkedin.com/in/makarand-pashilkar/',
    instagram: '',
  },
  seo: {
    title: 'Makarand pashilkar — Frontend Developer & Creator',
    description: 'The portfolio of Makarand pashilkar: a frontend developer, creator, and problem solver building web experiences that feel alive.',
    siteUrl: 'https://makpashilkar.vercel.app/',
    ogImage: '',
  },
  visibility: {
    about: true,
    skills: true,
    experience: true,
    projects: true,
    contact: true,
  },
  skills: [
    { id: 'javascript', name: 'JavaScript', category: 'Frontend', icon: 'JS', description: 'Building clear, useful interactions.' },
    { id: 'react', name: 'React', category: 'Frontend', icon: 'R', description: 'Component-driven interfaces.' },
    { id: 'html-css', name: 'HTML & CSS', category: 'Frontend', icon: '</>', description: 'Accessible, expressive foundations.' },
    { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', icon: 'TW', description: 'Fast visual iteration.' },
    { id: 'supabase', name: 'Supabase', category: 'Backend', icon: 'SB', description: 'Practical product foundations.' },
    { id: 'git', name: 'Git', category: 'Backend', icon: 'G', description: 'Small, dependable changes.' },
    { id: 'vercel', name: 'Vercel', category: 'Backend', icon: 'V', description: 'Shipping projects simply.' },
    { id: 'genai', name: 'Generative AI', category: 'AI', icon: 'AI', description: 'Exploring helpful AI workflows.' },
    { id: 'llm-tools', name: 'LLM tools', category: 'AI', icon: 'LL', description: 'Making ideas easier to prototype.' },
    { id: 'prompting', name: 'Prompt engineering', category: 'AI', icon: 'P', description: 'Better questions, better outcomes.' },
    { id: 'video', name: 'Video editing', category: 'Creative', icon: 'VE', description: 'Storytelling through motion.' },
    { id: 'content', name: 'Content creation', category: 'Creative', icon: 'CC', description: 'Ideas made easy to share.' },
    { id: 'ui-design', name: 'UI design', category: 'Creative', icon: 'UI', description: 'Interfaces with a point of view.' },
  ],
  experience: [
    {
      id: 'freelance',
      role: 'Freelance',
      organization: 'Madhura Puranpoli',
      startDate: 'Feb 2026',
      endDate: 'Present',
      summary: 'Maintain and enhance an existing e-commerce website by implementing AI-assisted code changes and updating storefront features based on business requirements. Support online ordering workflows for a live business, collaborate with the owner to improve the customer experience, and create AI-assisted social media content and promotional videos to increase online visibility and drive customer orders.',
      responsibilities: ['Maintain and enhance an existing e-commerce website by implementing AI-assisted code changes and updating storefront features based on business requirements. Support online ordering workflows for a live business, collaborate with the owner to improve the customer experience, and create AI-assisted social media content and promotional videos to increase online visibility and drive customer orders.'],
      skills: ['Requirements analysis', 'Next.js', 'React', 'REST APIs', 'Tailwind CSS', 'JavaScript','AI-Assisted Development'],
      type: 'Part-time',
      location: 'India',
      published: true,
    },
    {
      id: 'infosys-systems-engineer',
      role: 'Systems Engineer',
      organization: 'Infosys',
      startDate: 'Dec 2021',
      endDate: 'May 2024',
      summary: 'Supported a telecom billing and digital experience project with requirements analysis, documentation, testing, and API-focused troubleshooting.',
      responsibilities: ['Worked with development and business teams to understand requirements and assist with functional testing.', 'Supported release coordination for 70+ microservices by tracking version upgrades, monitoring build and test results, and documenting issues.', 'Participated in Agile ceremonies, stand-up meetings, backlog discussions, and status tracking activities.', 'Performed basic API testing and data validation using Postman and JSON responses.'],
      skills: ['Requirements analysis', 'Agile', 'Jira', 'Postman', 'REST APIs', 'React.js', 'Java', 'JavaScript','Excel'],
      type: 'Full-time',
      location: 'India',
      published: true,
    },
    
    // Add another entry here by copying the documented Experience shape above.
  ],
  projects: [
    {
  id: 'goodboygrub',
  name: 'Good Boy Grub',
  description: 'A full-stack food ordering platform featuring product browsing, cart and checkout workflows, an admin dashboard, kitchen display system (KDS), order status management, and email notifications.',
  thumbnail: '/project-gbg-ss.png',
  thumbnailAlt: 'Pixel-art food plate representing the Good Boy Grub online ordering platform',
  tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'KDS', 'Resend'],
  category: 'Development',
  liveUrl: 'https://goodboygrub.vercel.app/',
  sourceUrl: 'https://github.com/makpashilkar/goodboygrub',
  featured: true,
  published: true,
  status: 'In Development | Dev Deployed'
},
{
  id: 'panna',
  name: 'Panna',
  description: 'A browser-based social media carousel creator with live slide previews, customizable themes, colors and fonts, responsive editing layouts, automatic draft saving, and high-resolution PNG and ZIP exports.',
  thumbnail: '/panna-ss.png',
  thumbnailAlt: 'Pixel-art carousel slides representing the Panna social media design tool',
  tags: ['React', 'JavaScript', 'Vite', 'html2canvas', 'JSZip', 'PWA'],
  category: 'Development',
  liveUrl: 'https://panna-editor.vercel.app/',
  sourceUrl: 'https://github.com/makpashilkar/panna',
  featured: true,
  published: true,
  status: 'Live'
},
{
  id: 'pixel-pond',
  name: 'Pixel Pond Portfolio',
  description: 'An interactive developer portfolio featuring a pixel-art landscape that transitions between dawn, day, sunset, and night, with a live pixel clock, responsive navigation, skill filtering, and an expandable project showcase.',
  thumbnail: '/pixel-pond-ss.png',
  thumbnailAlt: 'Pixel-art pond landscape representing an interactive developer portfolio',
  tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Intersection Observer API'],
  category: 'Development',
  liveUrl: 'https://makpashilkar.vercel.app/',
  sourceUrl: 'https://github.com/makpashilkar/portfolioupdate',
  featured: true,
  published: true,
  status: 'Live'
},
    
    { id: 'madhura-puranpoli', name: 'Madhura Puranpoli', description: 'Promotional reel and social content concept for a local food business.', thumbnail: '/project-food.svg', thumbnailAlt: 'Warm food photography-inspired pixel artwork', tags: ['Video editing', 'Social media'], category: 'Creative', featured: true, published: false, status: 'Draft concept' },
    { id: 'crt-anime-extension', name: 'CRT Anime Extension', description: 'A browser extension concept for a nostalgic CRT-inspired anime viewing effect.', thumbnail: '/project-crt.svg', thumbnailAlt: 'Pixel-art CRT monitor with anime-inspired colors', tags: ['Browser extension', 'JavaScript'], category: 'Web', featured: true, published: false, status: 'Draft concept' },
    // Add another project here by copying the documented Project shape above.
  ],
};
