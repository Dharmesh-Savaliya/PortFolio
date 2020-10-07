import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getPersonalDetails() {
    let personalDetails =
    {
      name: 'Dharmesh Savaliya',
      email: 'savaliyadharmesh93@gmail.com',
      mob: 9638214662,
      add: '14 , Avsar Bunglows , near patel nagar , kenal road , kamrej',
      city: 'Surat',
      state: 'Gujarat',
      pincode: 394180
    }

    return personalDetails;
  };

  getRequirement() {
    let requirementData = [
      '3 years experience with Angular2+.',
      'Extensive experience in a Angular 2+ MVC frameworks (Angular 2/4/5/6, JavaScript , jQuery, NodeJS (Express-basic)) Experience in TypeScript.',
      'Experience with complex Angular2+ Modules, Components, Services and Dependency Injections Followed Process Oriented Workflow System.',
      'Followed Process Oriented Workflow System.',
      'Critical thinking and problem-solving skills.',
      'Worked with pre-defined project architectures.'
    ]
    return requirementData;
  };

  getRoleAndRes() {
    let roleAndRes = [
      'Develop common project architectures.',
      'Develop dynamic component for infragistics grid with Angular and jQuery',
      'Developed Interceptors for set the token as well as headers.',
      'Define and used common method for each and every transaction.',
      'Used GitLab for code management and storing code on cloud.',
      'Used Jenkins for building Services and Application.',
      'Used JIRA for define user stories, development, bug solving status.',
      'Make design and technical decisions for Angular projects.'
    ]
    return roleAndRes;
  };

  getToolList() {
    let toolList = [
      'JIRA', 'GIT', 'VS CODE', 'POSTMAN', 'MSSQL', 'VISUAL STUDIO'
    ]
    return toolList;
  };

  getSkillList() {
    let skillList = [
      'Angular', 'JAVA Script', 'JQuery', 'MS-SQL', 'ASP.NET', 'NodeJs (Basic)', 'HTML-CSS'
    ]
    return skillList;
  }

  getSrkProjectResp() {
    let projectResp = [
      'Working as frontend developer(angular(2 / 4 / 6 / 7)) as well as work with SQL database.',
      'Developed multiples component for different modules.',
      'Developed services for multiple event.',
      'work with dev - extreme grid, ig grid(jQuery, Angular).',
      'Developed the theme component using primeNg.',
      'Use the Interceptors for adding headers and token.',
      'Create directives for permission and auditing of module.',
      'Create common component which is display grid table on any component.'
    ]
    return projectResp;
  }

  getNarolaProjectResp() {
    let projectResp = [
      'Worked as web developer(ASP.Net, C#) as well as work with SQL database.',
      'Developed web page with 3 - tire Architecture.',
      'Developed web - services(asmx services) for multiple event.',
      'work with kendo grid.create stored procedures in MS - SQL.'
    ]
    return projectResp;
  }

  getEducationDetailsList() {
    let educaltionDetails = [
      {
        year: '05/2014 – 05/2017',
        college: 'Indira college of engineering and management',
        qualification: 'Bachelor in Computer Engineering',
        univercity: 'S.P.P.U',
        city:'Pune',
      },
      {
        year: '05/2011 – 05/2014',
        college: 'Amrut Institute Junagadh',
        qualification: 'Diploma in Computer Engineering',
        univercity: 'G.T.U',
        city:'Junagadh',
      }
    ]
    return educaltionDetails;
  }
}
