import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OperationService } from '../operation.service';
import { ActivatedRoute } from '@angular/router';
import { LookupService } from '../lookup.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userDetails: any;

  constructor(
    private location: Location,
    private operationService: OperationService,
    private route: ActivatedRoute,
    private lookupService: LookupService
  ) {}

  ngOnInit(): void {
    this.userDetails = {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phoneNumber: undefined,
      address: undefined,
      city: undefined,
      taluka: undefined,
      district: undefined,
      state: undefined,
      nationality: undefined,
    };

    this.route.params.subscribe((params) => {
      console.log(params['id']);
      const incomingId = params['id'];
      if (incomingId) {
        this.lookupService
          .getUserById(incomingId)
          .subscribe((resp: HttpResponse<any>) => {
            let temp: any = {};
            this.userDetails = resp.body ? resp.body : temp;
          });
      }
    });
  }

  save() {
    if (this.userDetails.id != undefined) {
      this.operationService.updateUser(this.userDetails).subscribe(
        (res: HttpResponse<any>) => {
          console.log(res);
          this.location.back();
        },
        (error: any) => {}
      );
    } else {
      this.operationService.createUser(this.userDetails).subscribe(
        (res: HttpResponse<any>) => {
          console.log(res);
          this.location.back();
        },
        (error: any) => {}
      );
    }
  }

  previousState() {
    this.location.back();
  }
}
