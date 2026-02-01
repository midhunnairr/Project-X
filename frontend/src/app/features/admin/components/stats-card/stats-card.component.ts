import { Component, Input } from '@angular/core';
import { AdminModule } from '../../admin.module';

@Component({
  selector: 'app-stats-card',
  imports: [AdminModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() change!: string;
  @Input() negative = false;
}
