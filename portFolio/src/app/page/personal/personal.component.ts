import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/core/services/details.service';
import { Details } from 'src/app/core/models/details'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(
    private detailSvc : DetailsService
  ) { }

  public personalDetails: any = {};
  public languageList: any = ['English' , 'Hindi' , 'Gujarati' , 'Marathi']

  ngOnInit() {
    const personalDetails = this.detailSvc.getPersonalDetails();
    this.setPersonDetails(personalDetails);
  }

 // Check the type of personal details using interface 

  setPersonDetails(personDetails: Details) {
    this.personalDetails = personDetails;
  }

}
