import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
import { DetailsService } from 'src/app/core/services/details.service';
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class ProfessionalComponent implements OnInit {

  constructor(
    private detailSvc : DetailsService
  ) { }
  public companyRequirement: any = [];
  public companyRoleResp: any = [];
  public toolList: any = [];
  public skillList: any = [];
  public srkProjectResp: any = [];
  public narolaProjectResp: any = [];

  ngOnInit() {
    this.companyRequirement = this.detailSvc.getRequirement();
    this.companyRoleResp = this.detailSvc.getRoleAndRes();
    this.toolList = this.detailSvc.getToolList();
    this.skillList = this.detailSvc.getSkillList();
    this.srkProjectResp = this.detailSvc.getSrkProjectResp();
    this.narolaProjectResp = this.detailSvc.getNarolaProjectResp();
  }

}
