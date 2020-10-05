import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  public personalDetails: any = {};

  getPersonalDetails() {
    this.personalDetails = 
      {name : 'Dharmesh Savaliya',
      email : 'savaliyadharmesh93@gmail.com',
      mob: 9638214662,
      add: '14 , Avsar Bunglows , near patel nagar , kemal road , kamrej',
      city : 'Surat',
      state: 'Gujarat'}
    
    return this.personalDetails;
  }
}
