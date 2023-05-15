import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ParamsRedefine,
  RedefinePassword,
} from 'src/app/core/types/redefine-password';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.component.html',
  styleUrls: ['./redefine-password.component.sass'],
})
export class RedefinePasswordComponent implements OnInit {
  redefinePassword: RedefinePassword = {
    password: '',
    confirmPassword: '',
  };

  params: ParamsRedefine = {
    token: '',
    id: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.params.token = params['token'];
      this.params.id = params['id'];
    });
  }
}
