import { Component, Input } from '@angular/core';
import { AdminModule } from '../../admin.module';

@Component({
  selector: 'app-data-table',
  imports: [AdminModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  @Input() columns!: { key: string; header: string }[];
  @Input() data!: any[];
}
