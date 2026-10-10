import esieassosMobileImage from "../assets/projects/esieassos-mobile.jpg";
import esieassosWebImage from "../assets/projects/esieassos-web.jpg";
import letsDrinkMobileImage from "../assets/projects/letsdrink-mobile.jpg";
import letsDrinkWebImage from "../assets/projects/letsdrink-web.jpg";
import portfolioImage from "../assets/projects/portfolio.jpg";
import boulderProblemImage from "../assets/projects/boulder-problem.png";
import orarimedImage from "../assets/projects/orarimed.png";
import portfolio2Image from "../assets/projects/portfolio2.png";

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  active: boolean;
  year: number;
  links: { label: string; url: string; active: boolean }[];
};

export const projects: Project[] = [
  {
    number: "08",
    category: "Orarimed (Prise de rendez-vous)",
    title: "Orarimed",
    description:
      "Application web de prise de rendez-vous médicaux auprès de médecins verifiés. Gestion de rendez-vous et d'agenda pour les professionnels de santé",
    image: orarimedImage,
    imageAlt: "Capture de l’application web Orarimed",
    tags: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "CI/CD",
    ],
    active: true,
    year: 2026,
    links: [
      {
        label: "Visiter le site",
        url: "https://orarimed.com",
        active: true,
      },
    ],
  },
  {
    number: "07",
    category: "PortFolio",
    title: "PortFolio 2",
    description:
      "Portfolio développé avec react et TypeScript pour présenter mon parcours et mes projets.",
    image: portfolio2Image,
    imageAlt: "Capture du portfolio 2",
    tags: ["TypeScript", "React", "Tailwind CSS", "Docker", "CI/CD"],
    active: true,
    year: 2026,
    links: [
      {
        label: "Visiter le site",
        url: "https://chabs.fr",
        active: true,
      },
    ],
  },
  {
    number: "06",
    category: "Boulder Problem (escalade)",
    title: "Boulder Problem",
    description:
      "Application web développée avec React et Node.js pour gérer les salles d'escalade d'un club. Elle permet de suivre les performances des grimpeurs, de gérer les voies et de générer des statistiques. Avec un front en react et une api en Node.js (Adonis JS), cette application est conçue pour être performante et évolutive.",
    image: boulderProblemImage,
    imageAlt: "Capture de l’application web Boulder Problem",
    tags: ["TypeScript", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    active: true,
    year: 2025,
    links: [
      {
        label: "Visiter le site",
        url: "https://boulder-problem.chabs.fr/",
        active: true,
      },
      {
        label: "Code source front",
        url: "https://github.com/BoulderProblem/boulder-problem-front",
        active: true,
      },
      {
        label: "Code source front",
        url: "https://github.com/BoulderProblem/boulder-problem-api",
        active: true,
      },
    ],
  },
  {
    number: "05",
    category: "Portfolio · Projet personnel",
    title: "Portfolio",
    description:
      "Portfolio développé avec Angular et JavaScript pour présenter mon parcours et mes projets.",
    image: portfolioImage,
    imageAlt: "Capture de l’ancien portfolio d’Alexandre Chabane",
    tags: ["JavaScript", "Angular"],
    active: true,
    year: 2022,
    links: [
      {
        label: "Visiter le site",
        url: "https://portfolio.chabs.fr/",
        active: true,
      },
      {
        label: "Code source",
        url: "https://github.com/alexandrechabs/portfolio",
        active: true,
      },
    ],
  },
  {
    number: "04",
    category: "Application web · Let’s Drink",
    title: "Let’s Drink Web",
    description:
      "Version web de Let’s Drink, développée avec Angular et Node.js. Cette page sert juste à présenter l'application ainsi que de fournir les liens vers les différents stores.",
    image: letsDrinkWebImage,
    imageAlt: "Capture de la version web de Let’s Drink",
    tags: ["JavaScript", "Angular", "Node.js"],
    active: true,
    year: 2020,
    links: [
      {
        label: "Visiter le site",
        url: "https://letsdrink.chabs.fr/",
        active: true,
      },
    ],
  },
  {
    number: "03",
    category: "Application mobile · Let’s Drink",
    title: "Let’s Drink Mobile",
    description:
      "Version mobile de Let’s Drink, publiée sur Android et iOS. Cette application a été développée pendant le confinement, elle permet à des utilisateurs de jouer à des jeux depuis leur téléphone et à distance.",
    image: letsDrinkMobileImage,
    imageAlt: "Capture de l’application mobile Let’s Drink",
    tags: ["JavaScript", "Ionic", "Android Studio"],
    active: false,
    year: 2020,
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=io.chabs.apero",
        active: false,
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/lets-drink/id1509347316",
        active: false,
      },
    ],
  },
  {
    number: "02",
    category: "Application web · Esieassos",
    title: "Esieassos Web",
    description:
      "Version web d’Esieassos, développée avec Angular et Node.js. Elle permet de gérer toutes les associations de l'école de mettre à jour leur page publique ainsi que de créer les évènements à destination des étudiants",
    image: esieassosWebImage,
    imageAlt: "Capture de la version web d’Esieassos",
    tags: ["JavaScript", "Angular", "Node.js"],
    active: false,
    year: 2017,
    links: [
      {
        label: "Visiter le site",
        url: "https://esieassos.chabs.fr/",
        active: false,
      },
    ],
  },
  {
    number: "01",
    category: "Application mobile · Esieassos",
    title: "Esieassos Mobile",
    description:
      "Application mobile, disponible sur iOS et Android, qui a pour but de recenser toutes les associations de l'école et de fournir un moyen de communication envers les étudiants via un système de notification, d'évènements, et de description de chaque association.",
    image: esieassosMobileImage,
    imageAlt: "Capture de l’application mobile Esieassos",
    tags: ["JavaScript", "Ionic", "Android Studio"],
    year: 2017,
    active: false,
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.corentin.esiea",
        active: false,
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/esieassos/id1441249997",
        active: false,
      },
    ],
  },
];
