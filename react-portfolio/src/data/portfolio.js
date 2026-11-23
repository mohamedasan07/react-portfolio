import {
  Atom,
  Braces,
  CodeXml,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Terminal,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* No CV file exists in the project yet.
   Add one to `public/` (for example `public/cv.pdf`) and set this to "/cv.pdf"
   to reveal the Download CV button in the About section. */
export const cvUrl = null;

export const skills = [
  { name: "HTML", icon: CodeXml, tone: "orange" },
  { name: "CSS", icon: Palette, tone: "blue" },
  { name: "JavaScript", icon: Braces, tone: "yellow" },
  { name: "React", icon: Atom, tone: "cyan" },
  { name: "Python", icon: Terminal, tone: "green" },
];

/* No live or repository URLs were present in the original project, so none are
   invented here. Add real links below when they are available; the buttons
   will become active automatically. */
export const projects = [
  {
    id: "chronosguard",
    title: "ChronosGuard",
    description: "Web3 intellectual property protection project.",
    tags: ["Web3", "React", "JavaScript"],
    icon: ShieldCheck,
    theme: "violet",
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: "unsorted",
    title: "Unsorted",
    description: "E-commerce platform.",
    tags: ["E-commerce", "React", "CSS"],
    icon: ShoppingBag,
    theme: "blue",
    liveUrl: null,
    repoUrl: null,
  },
];
