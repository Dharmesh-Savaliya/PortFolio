import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/core/models/services/details.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private detailSvc : DetailsService
  ) { }

  public personalDetails : any = {};

  ngOnInit() {
    // document.getElementsByClassName('.text_wrapper').class.add.('show')
    this.personalDetails = this.detailSvc.getPersonalDetails();
    console.log(this.personalDetails);
  }

}
