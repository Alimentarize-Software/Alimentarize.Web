import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institution } from 'src/app/core/model/institution';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceiverService } from '../receiver/receiver.service';
import { GiverService } from '../giver/giver.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {
  currentImage = '';
  defaultImage = 'assets/images/account-profile.png';
  profileForm: FormGroup;
  loading = false;
  userID: number;
  initialData: any = {};

  constructor(
    private formBuilder: FormBuilder, 
    private receiverService: ReceiverService, 
    private giverService: GiverService,
    private route: ActivatedRoute,
  ) {
    
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    this.profileForm = this.formBuilder.group({
      name: [''],
      id: this.userID,
      cep: [''],
      neighborhood: [''],
      address: [''],
      city: [''],
      state: [''],
      phoneNumber: [''],
      email: ['']
    });

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = parsedUser.id;
        this.loadUserProfile();
        this.giverService.getInstitution(this.userID).subscribe((data: Institution) => {
          if (data && data.profileImage) {
            this.currentImage = this.convertBase64ToImageUrl(data.profileImage);
          } else {
            this.currentImage = this.defaultImage;
          }
        }, (error) => {
          this.currentImage = this.defaultImage;
        });
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    } else {
      console.error('Não há usuário armazenado no localStorage.');
    }

    // const userType = localStorage.getItem('typeUser');

    // if (userType === 'donor') {
    //   // colocar campos do donor
    // } else if (userType === 'receiver') {
    //   // colocar compos do receiver
    // }
  }

  convertBase64ToImageUrl(base64Data: string): string {
    return `data:image/jpeg;base64,${base64Data}`;
  }

  isFormEmpty(): boolean {
    const formValues = this.profileForm.getRawValue();

    return Object.keys(formValues).every(key => key === 'id' || !formValues[key] || formValues[key] === this.initialData[key]);
  }

  loadUserProfile() {
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.giverService.getDonorInfo(this.userID).subscribe({
        next: (profileData) => this.populateForm(profileData),
        error: (err) => console.error('Erro ao carregar perfil do doador:', err)
      });
    } else {
      this.receiverService.getReceiverInfo(this.userID).subscribe({
        next: (profileData) => this.populateForm(profileData),
        error: (err) => console.error('Erro ao carregar perfil do receptor:', err)
      });
    }
  }

  populateForm(profileData: any) {
    console.log('Dados do perfil recebidos:', profileData); 
    this.initialData = profileData;
    for (let key in profileData) {
      if (this.profileForm.controls[key]) {
        this.profileForm.controls[key].setValue(profileData[key]);
        console.log(`Campo ${key} atualizado com valor: ${profileData[key]}`);  // Adicione este log
      }
    }
    console.log('Formulário após preenchimento:', this.profileForm.getRawValue());  // Adicione este log
  }


  register() {
    this.loading = true;
    const userType = localStorage.getItem('typeUser');
    // const clone = this.profileForm.pristine;
    const object = this.profileForm.getRawValue();
    console.log('Formulário tá válido? ', this.profileForm.valid);
    console.log('Forms: ', object);
    if (userType === 'donor') {
      this.giverService.updateMyProfile(object).subscribe({
        next: (res) => {
          console.log('Dados perfil donor: ', res);
          // colocar toast de salvo com sucesso
        },
        error: () => {
          this.loading = false;
          // colocar toast de erro
        },
      });
    } else {
      this.receiverService.updateMyProfile(object).subscribe({
        next: (res) => {
          console.log('Dados perfil receiver: ', res);
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }
}
