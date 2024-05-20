import { Menu } from 'src/app/core/model/menuOptions';

export const DonorMenu: Menu[] = [
  {
    label: 'Início',
    path: '/doador/home',
    src: 'assets/icons/home.svg',
    srcActive: 'assets/icons/home-white.svg',
  },
  {
    label: 'Instituições',
    path: '/doador/instituicoes',
    src: 'assets/icons/house.svg',
    srcActive: 'assets/icons/house-white.svg',
  },
  {
    label: 'Meu Perfil',
    path: '/doador/meu-perfil',
    src: 'assets/icons/profile.svg',
    srcActive: 'assets/icons/profile-white.svg',
  },
];

export const InstitutionMenu: Menu[] = [
  {
    label: 'Dashboard',
    path: '/instituicao',
    src: 'assets/icons/home.svg',
    srcActive: 'assets/icons/home-white.svg',
  },
  {
    label: 'Configurações',
    path: '/instituicao/configuracoes',
    src: 'assets/icons/setting.svg',
    srcActive: 'assets/icons/home-white.svg',
  },
  {
    label: 'Meu Perfil',
    path: '/instituicao/meu-perfil',
    src: 'assets/icons/profile.svg',
    srcActive: 'assets/icons/profile-white.svg',
  },
];
