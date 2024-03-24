import { Component } from '@angular/core';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  currentTab = 'tab1';

  user = {
    typeInstitution: '',
    name: '',
    email: '',
    cep: '',
    numberAddress: 0,
    city: '',
    state: '',
    neighborhood: '',
    address: '',
    cnpj: '',
    legalPurpose: '',
    dateCreateInstitution: '',
    legalNature: '',
    phoneNumber: '',
    password: '',
    complement: '',
    addressAlias: '',
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
    if (this.user.typeInstitution === 'donor') {
      this.userService.createUser(this.user, 'donor').subscribe({
        next: (res) => {
          console.log('Res donor');
        },
      });
    } else if (this.user.typeInstitution === 'receiver') {
      this.userService.createUser(this.user, 'receiver').subscribe({
        next: (res) => {
          console.log('Res receiver');
        },
      });
    }
  }
}
