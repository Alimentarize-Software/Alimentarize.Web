import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent {
  hoverClass = 'hover-active';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    const firstTab = this.el.nativeElement.querySelector('.tabs .tab');
    if (firstTab) {
      this.renderer.addClass(firstTab, this.hoverClass);
    }
  }

  public handleTabClick(event: MouseEvent): void {
    const clickedTab = event.currentTarget as HTMLElement;

    const tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach(tab => {
      this.renderer.removeClass(tab, this.hoverClass);
    });

    this.renderer.addClass(clickedTab, this.hoverClass);
  }

  public isAboutSelected(): boolean {
    const sobreTab = this.el.nativeElement.querySelector('.tabs .tab:nth-child(1)');
    return sobreTab ? sobreTab.classList.contains(this.hoverClass) : false;
  }

}
