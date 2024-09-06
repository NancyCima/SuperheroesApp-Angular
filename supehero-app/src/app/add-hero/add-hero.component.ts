import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHeroComponent {

}
