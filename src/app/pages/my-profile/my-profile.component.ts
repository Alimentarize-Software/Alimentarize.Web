import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institution } from 'src/app/core/model/institution';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceiverService } from '../receiver/receiver.service';
import { GiverService } from '../giver/giver.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {
  currentImage: File | string  = '';
  defaultImage = 'assets/images/account-profile.png';
  profileForm: FormGroup;
  loading = false;
  userID: number | null = null;
  initialData: any = {};
  file: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private receiverService: ReceiverService,
    private giverService: GiverService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');    

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = parsedUser.id;
        this.loadUserProfile();
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    } else {
      console.error('Não há usuário armazenado no localStorage.');
    }
    this.profileForm = this.formBuilder.group({
      name: [''],
      id: [this.userID],
      cep: [''],
      neighborhood: [''],
      address: [''],
      city: [''],
      state: [''],
      phoneNumber: [''],
      email: [''],
      image: [null]
    });
  }

  isFormEmpty(): boolean {
    const formValues = this.profileForm.getRawValue();
    formValues['image'] = this.file;
    return Object.keys(formValues).every(key => key === 'id' || !formValues[key] || formValues[key] === this.initialData[key]);
  }

  loadUserProfile() {
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.giverService.getDonorInfo(this.userID!).subscribe({
        next: (profileData) => {
          this.populateForm(profileData)
          if(profileData.profileImage){
            this.currentImage = this.convertBase64ToImageUrl(profileData.profileImage)

          }
        },
        error: (err) => console.error('Erro ao carregar perfil do doador:', err)
      });
    } else {
      this.receiverService.getReceiverInfo(this.userID!).subscribe({
        next: (profileData) => {
          this.populateForm(profileData)
          if(profileData.profileImage){
            this.currentImage = this.convertBase64ToImageUrl(profileData.profileImage)

          }
        },
        error: (err) => console.error('Erro ao carregar perfil do receptor:', err)
      });
    }
  }

  populateForm(profileData: any) {
    this.initialData = profileData;
    for (let key in profileData) {
      if (this.profileForm.controls[key]) {

        if(key === 'image'){
          this.profileForm.controls[key].setValue(this.convertBase64ToImageUrl(profileData[key]));
        }
        this.profileForm.controls[key].setValue(profileData[key]);
      }
    }
  }

  register() {
    this.loading = true;
    const userType = localStorage.getItem('typeUser');
    const formData = new FormData();
    const formValues = this.profileForm.getRawValue();

    for (let key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        if(key === 'image'){
          if(this.file){
            formData.append('image', this.file, this.file.name);
          }
        }
        else{
          formData.append(key, formValues[key]);

        }
      }
    }

    let updateProfileObservable;
    if (userType === 'donor') {
      updateProfileObservable = this.giverService.updateMyProfile(formData);
    } else {
      updateProfileObservable = this.receiverService.updateMyProfile(formData);
    }

    updateProfileObservable.subscribe({
      next: () => {
        this.toastr.success('Perfil salvo com sucesso!');
        this.loading = false;
      },
      error: (err) => {
        this.toastr.error('Erro ao salvar perfil. Tente novamente.');
        this.loading = false;
        console.error('Erro ao salvar perfil:', err);
      }
    });
  }

  onImageSelected(event: any) {
    this.file = event.target.files[0];
    if(this.file) {
      this.currentImage = this.file;
    } 
    const reader = new FileReader();

    reader.onloadend = () => {
      this.currentImage = reader.result as unknown as File;
    };

    if (this.file) {
      reader.readAsDataURL(this.file);
    }
  }

  convertBase64ToImageUrl(base64Data: string): string {
    return base64Data !== undefined
      ? `data:image/jpeg;base64,${base64Data}`
      : '';
  }
}
