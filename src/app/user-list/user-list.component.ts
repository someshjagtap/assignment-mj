import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LookupService } from '../lookup.service';
import { HttpResponse } from '@angular/common/http';

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  address: string;
  city: string;
  taluka: string;
  district: string;
  state: string;
  nationality: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'address',
    'city',
    'taluka',
    'district',
    'state',
    'nationality',
    'action',
  ];
  dataSource: any = [];

  constructor(private router: Router, private lookupService: LookupService) {}

  ngOnInit() {
    this.lookupService
      .queryUserDetails()
      .subscribe((res: HttpResponse<any[]>) => {
        let temp: any[] = [];
        this.dataSource = res.body ? res.body : temp;
      });
  }

  openUserDetails() {
    this.router.navigateByUrl('user');
  }

  editUserDetails(user: any) {
    this.router.navigateByUrl('users/' + user.id);
  }
}
