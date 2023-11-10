import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { LuStar } from "react-icons/lu";

export const educationData = [
  {
    title: "Diploma in Information Technology",
    institute: "VPM Polytechnic Thane",
    location: "India",
    description:
      "Completed Diploma in Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2015",
  },
  {
    title: "Certified Ethical Hacker V9",
    institute: "EC Council",
    location: "India",
    description:
      "Took a certification course from EC Council",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2019",
  },
] as const;

export const extraData = [
  {
    title: "OWASP Member",
    organization: "Open Web Application Security Project",
    description:
      "Joined OWASP as a member to learn more about Web Application Security",
    icon: React.createElement(LuStar),
    date: "2021-2023",
  },
] as const;

export const workData = [
  {
    type: "Freelance WordPress Developer and Blogger",
    cname: "Founder of Anime media blog - Otaku Vines | Founder of Tech blog - Geek Magazine",
    location: "India",
    tech: "HTML, CSS, JS, JQuery, Bootstrap, Materialize CSS, PHP, MySQL WordPress, CPanel, Plesk Planel",
    description:
      "Mainly worked as Freelance WordPress theme developer, I have experience working with WordPress Starter Template from Underscores.me and Developing Custom theme from scratch (This was before the Elementor Era). Also Founded and Worked on two Adsense Approved Blogs made with WordPress, mainly to learn more about SEO and Pagespeed Optimization.",
    icon: React.createElement(CgWorkAlt),
    date: "2015-2017",
  },
  {
    type: "Krytech Web Security Solutions Pvt. Ltd.",
    cname: "Co-Founder and Chief Technology Officer",
    location: "India",
    tech: "HTML, CSS, JS, JQuery, Bootstrap, Materialize CSS, PHP, MySQL, CodeIgniter 3 & 4, Open AI API, Ajax, JSON, Node JS, EJS, Ionic 3, Nessus, Burpsuite, Nmap, SQLMap, Dirbuster",
    description:
      "Co-Founded Development & Web Security Agency with friend and was In-charge of Web Development and Web Security, lead a team of 8 web developers. Our job was to develop custom web applications for our clients as well as maintain it's security and integrity. Came up with 360 Vigilance Framework, a security practise to test the web applications adapted from OWASP.",
    icon: React.createElement(CgWorkAlt),
    date: "2017-2023",
  },
  {
    type: "Krytech Digital",
    cname: "Technical Lead",
    location: "India",
    tech: "WordPress, Elementor, WP Bakery, Canva Pro",
    description:
      "Digital Marketing Subsidiary of Krytech Web Security Solutions Pvt. Ltd. Formed in the period of Pandemic to counter buiness loss, Developed WordPress websites (Ecommerce, Business, Lead Funnels, Landing Pages). Also, solved technical issues related to themes and hosting, as well as maintained the Security of WordPress infrastructure, since WordPress is the CMS which is visited many people trying SQL Injections and Cross Site Scripting attacks.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2023",
  },
] as const;

export const stackData = [
  {
      title: "Learning and Exploring",
      date: "2013-2016",
      tech: "HTML, CSS, JavaScript and JQuery",
      frameworks: "Bootstrap, Materializecss",
      learning: "PHP, MySQL",
      projects: "Dynamic Website and CMS Development, also started as a freelance WordPress Developer.",
  },
  {
      title: "Doing Serious Freelancing",
      date: "2016-2019",
      tech: "HTML, CSS, JavaScript, JQuery, PHP, MySQL, WordPress 4-5",
      frameworks: "Bootstrap, Materialize CSS, CodeIgniter 3",
      learning: "Ionic hybrid app development, API and Web Application Security.",
      projects: "Developed Mobile application of WordPress blogs using Ionic and WordPress API.",
  },
  {
      title: "Running Web Development Agency",
      date: "2019-2021",
      tech: "HTML, CSS, JS, JQuery, PHP, MySQL, Open AI API, Ajax, JSON, Node JS, EJS, Ionic 3, Nessus, Burpsuite, Nmap, SQLMap, Dirbuster",
      frameworks: "Bootstrap, Materialize CSS, CodeIgniter 3 & 4",
      learning: "Node JS, EJS, Ajax",
      projects: "Multivendor Ecommerce applications, B2B Wholesale Ecommerce Applications, Open AI based tools, Ionic Applications, WordPress Websites and Custom Themes.",

  },
  {
    title: "Recovering from Covid-19 Loss & Facing Medical Issues",
    date: "2021-2023",
    tech: "HTML, CSS, JS, JQuery, PHP, MySQL, Open AI API, Ajax, JSON, Ionic 3, Nessus, Burpsuite, Nmap, SQLMap, Dirbuster, WordPress, Elementor, WP Bakery, Canva Pro",
    frameworks: "Bootstrap, Materialize CSS, CodeIgniter 3 & 4",
    learning: "Mostily focus on learning new technologies - Tailwind CSS, React JS, Vue JS, Next JS, Nuxt JS, MongoDB, Postgre SQL",
    projects: "Open AI SaaS (Available on GitHub), Ecommmerce Development and WordPress Development.",
  },
  {
    title: "Quit the agency now building products and open for opportunities",
    date: "2023",
    tech: "HTML, CSS, Sass, JavaScript, EJS, NodeJS, PHP, MySQL, PostgreSQL, React JS, Vue JS, Netlify, Vercel",
    frameworks: "Bootstrap, Materialize CSS, Tailwind CSS, CodeIgniter 4, Next JS, Nuxt JS",
    learning: "Azure, AWS",
    projects: "Building Stack UI (https://stackui.co) and Agency Manager Boilerplate as Indie Hacker.",
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "JQuery",
  "TypeScript",
  "PHP",
  "CodeIgniter 4",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MaterializeCSS",
  "StackUI",
  "Prisma",
  "MongoDB",
  "EJS",
  "PostgreSQL",
  "MySQL",
  "WordPress",
  "Cpanel",
  "Plesk Panel",
  "Vercel",
  "Netlify",
  "Figma",
  "Adobe XD",
  "Canva Pro",
] as const;

export const devSocial = [
  {
    title: "GitHub",
    link: "https://github.com/kaustubhdevstack",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/kaustubh-shinde-wcss3/",
  },
  {
    title: "CodePen",
    link: "https://codepen.io/stack-ui",
  },
  {
    title: "JSFiddle",
    link: "https://jsfiddle.net/user/sonciai/",
  },
  {
    title: "Hashnode",
    link: "https://stackui.hashnode.dev/",
  },
  {
    title: "Dev.to",
    link: "https://dev.to/krybone",
  },
  {
    title: "Twitter X",
    link: "https://twitter.com/krybone",
  },
  {
    title: "Sanchar",
    link: "https://www.sanchar.xyz/sonicai7179",
  },
  {
    title: "Product Hunt",
    link: "https://www.producthunt.com/@kaustubhdevstack",
  },
  {
    title: "Email Me",
    link: "mailto:sonicai.me@gmail.com",
  },
] as const;