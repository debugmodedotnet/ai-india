import { Component } from '@angular/core';

const TAGS = [
  'signals', 'computed', 'effect', 'model input', 'ssr',
  '@if', '@for', 'change detection', 'signalstore', 'hydration',
  'perf', 'RxJS', 'component', 'testing', 'forms',
  'content projection', 'viewchild', 'contentchild', '@inject', 'services'
];

@Component({
  selector: 'app-tag-slider',
  standalone: true,
  imports: [],
  templateUrl: './tag-slider.component.html',
  styleUrl: './tag-slider.component.scss'
})
export class TagSliderComponent {

  tags = [...TAGS, ...TAGS]; 

}
