import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/core/services/details.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private detailSvc : DetailsService) { }
  public educationDetails: any= []
  ngOnInit() {
    this.educationDetails = this.detailSvc.getEducationDetailsList();
  }

}
