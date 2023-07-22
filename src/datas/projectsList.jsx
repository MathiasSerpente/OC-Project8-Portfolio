import {
  BookiBanner,
  BookiLogo,
  SophieBanner,
  SophieLogo,
  QwentaBanner,
  QwentaLogo,
  NinaBanner,
  NinaLogo,
  KasaBanner,
  KasaLogo,
  GrimoireBanner,
  GrimoireLogo,
} from '../assets/images/card';

import {
  Booki1,
  Booki2,
  Booki3,
  Booki4,
} from '../assets/images/carousel/Booki';

import {
  Sophie1,
  Sophie2,
  Sophie3,
  Sophie4,
  Sophie5,
  Sophie6,
} from '../assets/images/carousel/Sophie';

import {
  Qwenta1,
  Qwenta2,
  Qwenta3,
  Qwenta4,
  Qwenta5,
  Qwenta6,
  Qwenta7,
  Qwenta8,
  Qwenta9,
} from '../assets/images/carousel/Qwenta';

import { Nina1, Nina2, Nina3, Nina4 } from '../assets/images/carousel/Nina';

import {
  Kasa1,
  Kasa2,
  Kasa3,
  Kasa4,
  Kasa5,
  Kasa6,
} from '../assets/images/carousel/Kasa';

import {
  Grimoire1,
  Grimoire2,
  Grimoire3,
  Grimoire4,
} from '../assets/images/carousel/Grimoire';

export const projectsList = [
  {
    id: '1',
    name: 'Booki',
    banner: BookiBanner,
    logo: BookiLogo,
    date: '2023',
    technos: ['HTML', 'CSS'],
    pictures: [Booki1, Booki2, Booki3, Booki4],
    repository: 'https://github.com/MathiasSerpente/OC-Projet2-HTML-CSS',
    title:
      "Création de la page d'accueil d'une agence de voyage avec HTML & CSS",
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 2/8',
    description: {
      id: '1d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        "Ce projet est une initiation aux langages HTML et CSS, ainsi qu'à plusieurs outils tels que VSCode, Git, GitHub et Figma.",
        "On découvre également les documents des 'Spécifications fonctionnelles' et des 'Spécifications techniques'.",
        "L'objetif est de créer une page web statique et responsive qui respecte les maquettes Figma fournies",
      ],
    },
    skills: {
      id: '1s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        'Implémenter une interface responsive avec HTML et CSS',
        'Versionner son projet avec Git et Github',
        'Intégrer du contenu conformément à une maquette avec HTML et CSS',
        'Installer un environnement de développement front-end',
      ],
    },
    resources: {
      id: '1r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: ['Maquette Figma', 'Spécifications fonctionnelles/techniques'],
    },
  },
  {
    id: '2',
    name: 'Sophie Bluel',
    banner: SophieBanner,
    logo: SophieLogo,
    date: '2023',
    technos: ['JavaScript'],
    pictures: [Sophie1, Sophie2, Sophie3, Sophie4, Sophie5, Sophie6],
    repository: 'https://github.com/MathiasSerpente/OC-Projet3-JS',
    title: "Création d'une page web dynamique avec JavaScript",
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 3/8',
    description: {
      id: '2d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        'Ce projet est une initiation à JavaScript permettant de découvrir la notion de Kanban ainsi que la communication entre le back-end et le front-end notamment avec les requêtes CRUD.',
        "L'objectif est de rendre dynamique le site portfolio d'une architecte d'intérieur en lui permettant de se connecter au site afin d'accéder à la gestion de ses projets via une modale.",
      ],
    },
    skills: {
      id: '2s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        'Manipuler les éléments du DOM avec JavaScript',
        'Récupérer les données utilisateurs dans le JavaScript via des formulaires',
        'Gérer les évènements utilisateurs avec JavaScript',
      ],
    },
    resources: {
      id: '2r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: [
        'Maquette Figma',
        'Code back-end et base de code front-end',
        'Kanban de la mission',
      ],
    },
  },
  {
    id: '3',
    name: 'Menu Maker',
    banner: QwentaBanner,
    logo: QwentaLogo,
    date: '2023',
    technos: ['React'],
    pictures: [
      Qwenta1,
      Qwenta2,
      Qwenta3,
      Qwenta4,
      Qwenta5,
      Qwenta6,
      Qwenta7,
      Qwenta8,
      Qwenta9,
    ],
    repository: '',
    title: "Planification du développement d'un site en méthode Agile",
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 4/8',
    description: {
      id: '3d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        "Ce projet permet de découvrir la planification d'un projet en méthode Agile.",
        'On y découvre donc énormément de choses, notamment : la méthode Agile et plus particulièrement Scrum, les outils de gestion de projet, les outils de curation...',
        "L'objectif est de planifier le projet de développement du site Menu Maker. Pour cela il faut : remplir le document des spécifications techniques, préparer une veille informationnelle sur les technos sélectionnées pour l'équipe et bien sûr de planifier/organiser le projet en utilisant un outil comme Notion.",
        "Le projet ne présente pas de code spécifique, mais il offre l'opportunité de découvrir et de comprendre les pratiques du milieu professionnel.",
      ],
    },
    skills: {
      id: '3s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        'Suivre le déroulement du projet grâce à un outil de gestion de projet',
        "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
        'Découper une fonctionnalités en tâches pour préparer le développement',
        'Présenter la solution technique',
        'Mettre en place une méthode de veille technologique',
      ],
    },
    resources: {
      id: '3r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: [
        'Maquette Figma',
        'Spécifications fonctionnelles',
        'User stories',
        'Modèle de spécifications techniques à remplir',
      ],
    },
  },
  {
    id: '4',
    name: 'Nina Carducci',
    banner: NinaBanner,
    logo: NinaLogo,
    date: '2023',
    technos: ['Javascript'],
    pictures: [Nina1, Nina2, Nina3, Nina4],
    repository: 'https://github.com/MathiasSerpente/OC-Projet5-Optimisation',
    title: 'Débuggez et optimisez un site de photographe',
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 5/8',
    description: {
      id: '4d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        "Ce projet permet de découvrir plusieurs notions essentielles d'optimisation telles que l'accessibilité, le SEO, les performances ainsi que le débuggage en utilisant les Chrome DevTools",
        "L'objectif est de corriger les problèmes relevés par Lighthouse lors de l'audit, afin que les scores soit au minimum de 90 dans chaque catégorie. Il y a également des bugs à corriger pour que le site fonctionne correctement.",
        "On découvre donc notamment l'importance d'optimiser le contenu (format, compression, résolution...) et le code (factorisation, minification, optimisation du chargement...) pour les performances, d'améliorer le SEO (avec les balises meta pour les réseaux sociaux, les données structurées...) ainsi que d'assurer un bonne accessibilité (avec les attributs HTML 'alt' et 'aria', le contraste, ...).",
      ],
    },
    skills: {
      id: '4s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        "Optimiser les performances, le SEO et l'accessibilité d'un site web",
        'Débugger un site web grâce aux Chrome DevTools',
        'Rédiger un cahier de recette pour tester un site',
      ],
    },
    resources: {
      id: '4r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: [
        'Audit Lighthouse',
        'Code source du site web',
        'Informations personnelles de la cliente',
      ],
    },
  },
  {
    id: '5',
    name: 'Kasa',
    banner: KasaBanner,
    logo: KasaLogo,
    date: '2023',
    technos: ['React'],
    pictures: [Kasa1, Kasa2, Kasa3, Kasa4, Kasa5, Kasa6],
    repository: 'https://github.com/MathiasSerpente/OC-Projet6-React',
    title: "Création d'une application web de location immobilière en React",
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 6/8',
    description: {
      id: '5d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        "Ce projet permet de découvrir React, sa logique de fonctionnement en composants réutilisables, les 'props' pour faire ciculer les données des composants parents vers les composants enfants, son intérêt en terme de performances grâce au DOM virtuel ou encore encore la richesse de son écosystème qui comprend une multitude d'outils et de bibliothèques complémentaires.",
        "Notamment React Router que j'ai utilisé pour créer les différentes pages de l'application ainsi que les liens entre elles.",
        "L'objectif est de développer en React la partie front-end d'une application de location de logements entre particuliers. Le back-end n'étant, dans le scénario, pas terminé, les données sont stockées dans un fichier JSON.",
        "Ce projet m'a beaucoup inspiré dans la conception fonctionnelle de ce portfolio.",
      ],
    },
    skills: {
      id: '5s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        "Configurer la navigation entre les pages de l'application avec React Router",
        'Initialiser une application avec Create React App',
        "Développer des éléments de l'interface d'un site web grâce à des composants React",
        'Mettre en œuvre des animations CSS',
      ],
    },
    resources: {
      id: '5r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: [
        'Maquette Figma',
        'Coding guidelines du projet',
        'Un fichier JSON contenant les dernières annonces',
      ],
    },
  },
  {
    id: '6',
    name: 'Mon Vieux Grimoire',
    banner: GrimoireBanner,
    logo: GrimoireLogo,
    date: '2023',
    technos: ['Node.js', 'Express.js'],
    pictures: [Grimoire1, Grimoire2, Grimoire3, Grimoire4],
    repository: 'https://github.com/MathiasSerpente/OC-Projet7-Backend',
    title: "Développement du back-end d'un site de notation de livres",
    context: 'Formation : Développeur Web chez OpenClassrooms - Projet 7/8',
    description: {
      id: '6d',
      class: 'collapse-description',
      title: 'Description',
      content: [
        "Ce projet permet de découvrir Node.js et Express.js, que l'on utilise pour développer back-end d'un site de notation de livres dont le front-end est développé en React.",
        "L'ojectif est de créer une base de données MongoDB et une API qui la fasse correspondre avec le front-end en gérant les requêtes CRUD. Les utilisateurs doivent pouvoir créer un compte, se connecter, créer/modifier/supprimer leurs livres et noter ceux créés par les autres utilisateurs.",
        "La gestion des images doit être optimisée (résolution, format, compression, suppression des images inutilisées sur le serveur) afin que l'application respecte le Green Code.",
      ],
    },
    skills: {
      id: '6s',
      class: 'collapse-skills',
      title: 'Compétences',
      content: [
        'Implémenter un modèle logique de données conformément à la réglementation',
        'Stocker des données de manière sécurisée',
        'Mettre en oeuvre des opérations CRUD de manière sécurisée',
      ],
    },
    resources: {
      id: '6r',
      class: 'collapse-resources',
      title: 'Ressources',
      content: [
        'Maquette Figma',
        'Spécifications fonctionnelles',
        'Code du front-end',
        "Spécifications techniques de l'API",
      ],
    },
  },
];
