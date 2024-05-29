import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CustomColor } from './button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Output() onClick = new EventEmitter();
  @Input() loading = false;
  @Input() disabled = false;
  @Input() exibeEmBloco = false;
  @Input() theme = '';
  @Input() width = '130px';
  @Input() pathIcon = '';
  @Input() suffixIcon: string | null = null;
  @Input() onlyIcon = false;
  @Input() notificacao = 0;
  @Input() customColor = {} as CustomColor;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
  }
  public emitClick(): void {
    if (!this.disabled) {
      this.onClick.emit({});
    }
  }

  public get tema() {
    return {
      'botao-primario':
        this.theme.toLowerCase() === 'primary' && this.disabled === false,
      'botao-secundario':
        this.theme.toLowerCase() === 'secondary' && this.disabled === false,
      'botao-terciario':
        this.theme.toLowerCase() === 'tertiary' && this.disabled === false,
      'exibe-em-bloco': this.exibeEmBloco === true,
      disabled: this.disabled === true,
      notification: this.notificacao > 0,
    };
  }

  public get stateIcon() {
    return this.pathIcon != '' ? this.pathIcon : '';
  }

  public setWidth() {
    // switch (this.width) {
    //   case 'medium':
    //     return '32px';

    //   case 'large':
    //     return '36px';

    //   default:
    //     return '';
    // }
    return `${this.width}`;
  }

  public get marginIcon() {
    return this.onlyIcon ? '0px' : '6px';
  }

  public get classContainer() {
    return this.onlyIcon ? 'only-icon' : 'container';
  }

  public get sizeOnlyIcon() {
    return this.onlyIcon ? '32px' : '0px';
  }
}
