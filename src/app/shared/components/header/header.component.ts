import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{
  currentImage: string | null = null;
  ngOnInit(): void {
    const user = localStorage.getItem('user');    

    if (user) {
      const parsedUser = JSON.parse(user);
      console.log("parsedUser", parsedUser)
      if(parsedUser.profileImage){
        console.log("Entrou")
        this.currentImage = this.convertBase64ToImageUrl(parsedUser.profileImage);
      }
      else{
        this.currentImage = 'assets/images/account-profile.png'
      }
    }
  }

  convertBase64ToImageUrl(base64Data: string): string {
    return base64Data !== undefined
      ? `data:image/jpeg;base64,${base64Data}`
      : '';
  }
}
