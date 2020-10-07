import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thm-menu',
  templateUrl: './thm-menu.component.html',
  styleUrls: ['./thm-menu.component.scss']
})
export class ThmMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToAnchor(routeName) {
    this.router.navigate(['/' +routeName])
  }

}
