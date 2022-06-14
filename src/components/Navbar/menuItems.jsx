
export const menuItems = [
  { title: 'Accueil', url: '/' },
  {
    title: 'Galerie',
    submenu: [
      {
        title: 'Disponibles',
        url: '/Galerie/dispo',
      },
      {
        title: 'Réalisations',
        url: '/Galerie/work',
      },
      {
        title: 'Conventions',
        url: '/Galerie/convention',
      },
    ],
  },
  { title: 'Contact', url: '/contact' },
];
