import { Component, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { User } from '../../../../shared/models/user.model';
import { AdminModule } from '../../admin.module';

@Component({
  selector: 'app-user-table',
  imports: [AdminModule, DataTableComponent],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  @Input() users: User[] = [];

  columns = [
    { header: 'User', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Joined', key: 'joinedDate' },
    { header: 'Status', key: 'status' }
  ];

}
