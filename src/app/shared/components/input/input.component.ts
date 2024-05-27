import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('icon') asIcon: ElementRef;
  @Input() type = 'email';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() errorMensagem = '';

  chooseType = '';
  value = '';
  iconPath = 'assets/icons/eye.svg';
  focus = false;

  private onChange: (value: any) => void;
  private onTouched: () => void;

  constructor(private _renderer2: Renderer2) {}

  ngOnInit(): void {
    this.chooseType = this.type;
  }

  public handleChangeModel(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
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

  onBlurEmit(event: any) {
    this.focus = !this.focus;
    this.onTouched();
  }

  public get activeFocus() {
    return this.focus ? 'focus-div' : '';
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional: Handle the disabled state if needed
  }
}
