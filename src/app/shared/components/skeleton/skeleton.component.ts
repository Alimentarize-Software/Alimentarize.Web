import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.sass'],
})
export class SkeletonComponent {
  @Input() width = '252px';
  @Input() height = '190px';
}
