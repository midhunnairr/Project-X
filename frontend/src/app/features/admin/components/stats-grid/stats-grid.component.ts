import { Component, Input } from '@angular/core';
import { AdminModule } from '../../admin.module';
import { StatsCardComponent } from '../stats-card/stats-card.component';

@Component({
  selector: 'app-stats-grid',
  imports: [AdminModule, StatsCardComponent],
  templateUrl: './stats-grid.component.html',
  styleUrl: './stats-grid.component.css'
})
export class StatsGridComponent {
 @Input() stats: any[] = [];
}
