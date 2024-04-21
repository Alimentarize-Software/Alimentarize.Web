import { Menu } from 'src/app/core/model/menuOptions';

export const DonorMenu: Menu[] = [
  {
    label: 'Dashboard',
    path: '/doador',
    src: 'assets/icons/home.svg',
  },
  {
    label: 'Instituições',
    path: '/doador/instituicoes',
    src: 'assets/icons/home.svg',
  },
];

export const InstitutionMenu: Menu[] = [
  {
    label: 'Dashboard',
    path: '/instituicao',
    src: 'assets/icons/home.svg',
  },
  {
    label: 'Configurações',
    path: '/instituicao/configuracoes',
    src: 'assets/icons/setting.svg',
  },
];
