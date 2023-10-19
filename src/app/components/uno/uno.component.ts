import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnoComponent {

}
