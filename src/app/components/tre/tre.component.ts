import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tre.component.html',
  styleUrls: ['./tre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreComponent {

}
