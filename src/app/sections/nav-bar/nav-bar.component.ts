import { Component, Input, OnInit } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() currentKarma:number = 0
  @Input() selected:Mirror[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
