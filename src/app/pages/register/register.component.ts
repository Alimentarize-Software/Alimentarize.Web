import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CepService } from 'src/app/core/services/cep/cep.service';
import { UserService } from 'src/app/core/services/user/user.service';

type typeInstitution = 'receiver ' | 'donor';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  currentTab = 'tab1';

  control: FormGroup;
  cpf = '';
  loadingButton = false;

  constructor(
    private cepService: CepService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.control = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      cnpj: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      addressAlias: ['teste', Validators.required],
      legalPurpose: [''],
      legalDateCreate: ['', Validators.required],
      legalNature: [''],
      complement: [''],
      cep: ['', Validators.required],
      numberAddress: [0],
      city: ['', Validators.required],
      state: ['', Validators.required],
      neighborhood: ['', Validators.required],
      typeInstitution: ['', Validators.required],
    });

    this.cpf = '06961485367';
    this.cpf = this.cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    this.cpf = this.cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    this.cpf = this.cpf.replace(/\.(\d{3})(\d)/, '.$1-$2');

    console.log('this.CPF: ', this.cpf);
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }

  onBlur(cep: any) {
    this.cepService.getCep(cep).subscribe({
      next: (data: any) => {
        this.control.patchValue({
          state: data.uf,
          neighborhood: data.bairro,
          address: data.logradouro,
          city: data.localidade,
        });
      },
    });
  }

  register() {
    this.loadingButton = true;
    this.control.removeControl('confirmPassword');
    const typeReceiver = this.control.get('typeInstitution')?.value;
    this.control.removeControl('typeInstitution');
    const clone = this.control.pristine;
    const object = this.control.getRawValue();
    console.log('Formulário tá válido? ', this.control.valid);
    console.log('Forms: ', object);
    if (typeReceiver === 'donor') {
      this.userService.createUser(object, 'donor').subscribe({
        next: (res) => {
          console.log('Res donor: ', res);
          this.router.navigateByUrl('login');
        },
        error: () => {
          this.loadingButton = false;
        },
      });
    } else {
      this.userService.createUser(object, 'receiver').subscribe({
        next: (res) => {
          console.log('Res receiver: ', res);
        },
        error: () => {
          this.loadingButton = false;
        },
      });
    }
  }

  public get formIsValid() {
    console.log('Verificando estado: ', this.control.valid);
    return this.control.valid;
  }
}
