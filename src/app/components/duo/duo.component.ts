import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-duo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DuoComponent {

}
