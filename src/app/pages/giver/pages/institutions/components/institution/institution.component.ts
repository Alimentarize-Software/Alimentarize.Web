import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomColor } from 'src/app/shared/components/button/button';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.sass'],
})
export class InstitutionComponent {
  tags = ['crianças', 'mulheres', 'idosos'];
  socialMedias = [
    {
      icon: 'assets/icons/instagram.svg',
      link: 'https://www.instagram.com/ipredeoficial/',
      label: 'instagram',
    },
    {
      icon: 'assets/icons/whatsapp.svg',
      link: 'https://api.whatsapp.com/send?phone=5585987781922',
      label: 'whatsapp',
    },
    {
      icon: 'assets/icons/maps.svg',
      link: 'https://www.google.com/maps/place/O+IPREDE/@-3.7950138,-38.4850719,15z/data=!4m2!3m1!1s0x0:0x1cca359d877487d0?sa=X&ved=1t:2428&ictx=111',
      label: 'maps',
    },
  ];

  projects = [
    {
      img: 'assets/images/prato-cheio.png',
      title: 'Prato Cheio',
      description:
        'Só a solidariedade nos une. Desta troca, nasce o projeto, a Instituição, a ação, a casa que acolhe e cuida, que dá esperança. Para as barrigas vazias e mãos estendidas, queremos dar o pão, o circo, a escola, o brinquedo, o afeto, o livro, a canção, a dança, a vida, a esperança – viver bem a vida, desde a primeira infância.Nossa missão é acolher e cuidar do desenvolvimento da primeira infância com os conhecimentos da neurociência, oferecendo saúde de excelência, arte, cultura e educação para nossas crianças.Promovemos o fortalecimento de mulheres através da educação para o desenvolvimento de potencial, gerando inclusão produtiva e social. Criamos redes de apoio para a mulher, impactando famílias e seu contexto, tornando a mulher protagonista e agente de transformação.',
    },
    {
      img: 'assets/images/marias.png',
      title: 'Atenção à Mulher Cuidadora',
      description:
        'Só a solidariedade nos une. Desta troca, nasce o projeto, a Instituição, a ação, a casa que acolhe e cuida, que dá esperança. Para as barrigas vazias e mãos estendidas, queremos dar o pão, o circo, a escola, o brinquedo, o afeto, o livro, a canção, a dança, a vida, a esperança – viver bem a vida, desde a primeira infância.Nossa missão é acolher e cuidar do desenvolvimento da primeira infância com os conhecimentos da neurociência, oferecendo saúde de excelência, arte, cultura e educação para nossas crianças.Promovemos o fortalecimento de mulheres através da educação para o desenvolvimento de potencial, gerando inclusão produtiva e social. Criamos redes de apoio para a mulher, impactando famílias e seu contexto, tornando a mulher protagonista e agente de transformação.',
    },
    {
      img: 'assets/images/primeira-infancia.png',
      title: 'Desenvolvimento na Primeira Infância',
      description:
        'Só a solidariedade nos une. Desta troca, nasce o projeto, a Instituição, a ação, a casa que acolhe e cuida, que dá esperança. Para as barrigas vazias e mãos estendidas, queremos dar o pão, o circo, a escola, o brinquedo, o afeto, o livro, a canção, a dança, a vida, a esperança – viver bem a vida, desde a primeira infância.Nossa missão é acolher e cuidar do desenvolvimento da primeira infância com os conhecimentos da neurociência, oferecendo saúde de excelência, arte, cultura e educação para nossas crianças.',
    },
  ];

  images = [
    'assets/images/iprede-entrada.png',
    'assets/images/prato-cheio.png',
    'assets/images/primeira-infancia.png',
  ];

  customColor: CustomColor = {
    color: '#FFF',
    backgroundColor: '#A9320C',
  };

  constructor(private router: Router) {}

  redirect(url: string) {
    window.open(url, '_blanck');
  }

  redirectPage() {
    this.router.navigate([`/doador/instituicoes/doacao`]);
  }
}
