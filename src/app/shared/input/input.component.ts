import { style } from '@angular/animations';
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  NgModule,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent implements OnInit {
  @ViewChild('icon') asIcon: ElementRef;
  @Input() type = 'email';
  @Input() model: any;
  @Input() name = '';
  @Input() chooseType = '';
  @Input() placeholder = '';
  @Input() errorMensagem = '';

  @Output() modelChange = new EventEmitter<any>();
  @Output() onKeyPress = new EventEmitter<any>();
  teste: string;

  iconPath = 'assets/icons/eye.svg';
  focus = false;

  constructor(private _renderer2: Renderer2) {}

  ngOnInit(): void {
    this.chooseType = this.type;
  }

  public handleChangeModel(event: any) {
    this.modelChange.emit(event.target.value);
    this.onKeyPress.emit();
  }

  public get showIcon() {
    return this.type === 'password' ? true : false;
  }

  public showHidePassword() {
    if (this.chooseType === 'password') {
      this._renderer2.addClass(this.asIcon.nativeElement, 'animation');
      this.iconPath = 'assets/icons/eye-close.svg';
    } else {
      this._renderer2.removeClass(this.asIcon.nativeElement, 'animation');
      this.iconPath = 'assets/icons/eye.svg';
    }
    this.changeTypeInput();
  }

  changeTypeInput() {
    this.chooseType === 'password'
      ? (this.chooseType = 'text')
      : (this.chooseType = 'password');
  }

  mouseOver() {
    let icon = this.asIcon.nativeElement;
    if (this.chooseType === 'password') {
      this._renderer2.setStyle(icon, 'transform', 'scale(1.1)');
    }
  }

  mouseOut() {
    var icon = this.asIcon.nativeElement;
    if (this.chooseType === 'password') {
      this._renderer2.setStyle(icon, 'transform', 'scale(1.0)');
    }
  }

  onFocus() {
    this.focus = !this.focus;
  }

  onBlur() {
    this.focus = !this.focus;
  }

  public get activeFocus() {
    return this.focus ? 'focus-div' : '';
  }
}
