import { Component } from '@angular/core';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { UserService } from 'src/app/core/services/user/user.service';

type typeInstitution = 'receiver ' | 'donor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  currentTab = 'tab1';
  typeInstitution: typeInstitution = {} as typeInstitution;

  user = {
    email: '',
    name: '',
    password: '',
    cnpj: '',
    address: '',
    phoneNumber: '',
    addressAlias: '',
    legalPurpose: '',
    legalDateCreate: '',
    legalNature: '',
    complement: '',
    cep: '',
    numberAddress: 0,
    city: '',
    state: '',
    neighborhood: '',
  };

  confirmPassword = '';

  constructor(
    private cepService: CepService,
    private userService: UserService
  ) {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }

  onBlur(cep: any) {
    this.cepService.getCep(cep).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log('Cidade: ', this.user.city);
        this.user.state = data.uf;
        this.user.neighborhood = data.bairro;
        this.user.address = data.logradouro;
        this.user.city = data.localidade;
      },
    });
  }

  register() {
    if (this.typeInstitution === 'donor') {
      this.userService.createUser(this.user, 'donor').subscribe({
        next: (res) => {
          console.log('Res donor');
        },
      });
    } else {
      this.userService.createUser(this.user, 'receiver').subscribe({
        next: (res) => {
          console.log('Res receiver');
        },
      });
    }
  }
}
