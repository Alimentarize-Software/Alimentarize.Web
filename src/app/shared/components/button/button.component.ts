import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Output() click = new EventEmitter();
  @Input() loading = false;
  @Input() disabled = false;
  @Input() exibeEmBloco = false;
  @Input() tipo = '';
  @Input() width = '130px';
  @Input() pathIcon = '';
  @Input() onlyIcon = false;
  @Input() notificacao = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Mudou', changes);
  }
  public onClick(): void {
    if (!this.disabled) {
      this.click.emit({});
    }
  }

  public get tema() {
    return {
      'botao-primario': this.tipo.toLowerCase() === 'primary',
      'botao-secundario': this.tipo.toLowerCase() === 'secondary',
      'botao-terciario': this.tipo.toLowerCase() === 'tertiary',
      'exibe-em-bloco': this.exibeEmBloco === true,
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
