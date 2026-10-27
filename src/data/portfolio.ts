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
  resumeUrl: '', // Replace with the supplied PDF path, for example /resume.pdf.
  socialLinks: {
    email: '', // Replace with your real email address.
    github: '', // Replace with your GitHub URL, for example https://github.com/your-username.
    linkedin: '',
    instagram: '',
  },
  seo: {
    title: 'Makarand pashilkar — Frontend Developer & Creator',
    description: 'The portfolio of Makarand pashilkar: a frontend developer, creator, and problem solver building web experiences that feel alive.',
    siteUrl: '',
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
    { id: 'kirana-connect', name: 'Kirana Connect', description: 'Local grocery and vendor management platform with responsive web workflows for managing local grocery inventory and customer orders.', thumbnail: '', thumbnailAlt: 'Kirana Connect project preview', tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'], category: 'Web platform', featured: true, published: true, status: 'Project work' },
    { id: 'portfolio-website', name: 'Portfolio website', description: 'Responsive personal portfolio work focused on React.js, Tailwind CSS, JavaScript, and a pixel-art interface.', thumbnail: '', thumbnailAlt: 'Portfolio website project preview', tags: ['React.js', 'Tailwind CSS', 'JavaScript'], category: 'Web', featured: true, published: true, status: 'Project work' },
    { id: 'madhura-puranpoli', name: 'Madhura Puranpoli', description: 'Promotional reel and social content concept for a local food business.', thumbnail: '/project-food.svg', thumbnailAlt: 'Warm food photography-inspired pixel artwork', tags: ['Video editing', 'Social media'], category: 'Creative', featured: true, published: false, status: 'Draft concept' },
    { id: 'crt-anime-extension', name: 'CRT Anime Extension', description: 'A browser extension concept for a nostalgic CRT-inspired anime viewing effect.', thumbnail: '/project-crt.svg', thumbnailAlt: 'Pixel-art CRT monitor with anime-inspired colors', tags: ['Browser extension', 'JavaScript'], category: 'Web', featured: true, published: false, status: 'Draft concept' },
    { id: 'goodboygrub', name: 'GoodBoyGrub', description: 'Food business branding and digital presence concept for a local restaurant.', thumbnail: '/project-grub.svg', thumbnailAlt: 'Pixel-art plate of colorful food', tags: ['Branding', 'Marketing'], category: 'Creative', featured: true, published: false, status: 'Draft concept' },
    // Add another project here by copying the documented Project shape above.
  ],
};
