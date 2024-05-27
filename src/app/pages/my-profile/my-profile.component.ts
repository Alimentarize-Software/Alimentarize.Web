import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Institution } from 'src/app/core/model/institution';
import { MyProfileService } from './my-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.sass']
})
export class MyProfileComponent implements OnInit {
  currentImage = '';
  defaultImage = 'assets/images/account-profile.png';

  constructor(
    private route: ActivatedRoute,
    private myProfileService: MyProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.myProfileService.getInstitution(params['receiverId']))
    ).subscribe((data: Institution) => {
      if (data && data.profileImage) {
        this.currentImage = this.convertBase64ToImageUrl(data.profileImage);
      } else {
        this.currentImage = this.defaultImage;
      }
    }, (error) => {
      this.currentImage = this.defaultImage;
    });
  }

  convertBase64ToImageUrl(base64Data: string): string {
    return `data:image/jpeg;base64,${base64Data}`;
  }
}
