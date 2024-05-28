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
  currentImage: File;
  defaultImage = 'assets/images/account-profile.png';
  profileForm: FormGroup;
  loading = false;
  userID: number | null = null;
  initialData: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private receiverService: ReceiverService,
    private giverService: GiverService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    this.profileForm = this.formBuilder.group({
      name: [''],
      id: [null],
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
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    } else {
      console.error('Não há usuário armazenado no localStorage.');
    }
  }

  isFormEmpty(): boolean {
    const formValues = this.profileForm.getRawValue();
  
    return Object.keys(formValues).every(key => key === 'id' || !formValues[key] || formValues[key] === this.initialData[key]);
  }

  loadUserProfile() {
    const userType = localStorage.getItem('typeUser');

    if (userType === 'donor') {
      this.giverService.getDonorInfo(this.userID!).subscribe({
        next: (profileData) => this.populateForm(profileData),
        error: (err) => console.error('Erro ao carregar perfil do doador:', err)
      });
    } else {
      this.receiverService.getReceiverInfo(this.userID!).subscribe({
        next: (profileData) => this.populateForm(profileData),
        error: (err) => console.error('Erro ao carregar perfil do receptor:', err)
      });
    }
  }

  populateForm(profileData: any) {
    this.initialData = profileData;
    for (let key in profileData) {
      if (this.profileForm.controls[key]) {
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
        formData.append(key, formValues[key]);
      }
    }

    if (this.currentImage) {
      formData.append('profileImage', this.currentImage);
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
    const file: File = event.target.files[0];
    this.currentImage = file;
    const reader = new FileReader();

    reader.onloadend = () => {
      this.currentImage = reader.result as unknown as File;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
