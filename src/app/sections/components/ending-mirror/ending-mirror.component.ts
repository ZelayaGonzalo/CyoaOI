import { Component, Input, OnInit } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';

@Component({
  selector: 'app-ending-mirror',
  templateUrl: './ending-mirror.component.html',
  styleUrls: ['./ending-mirror.component.scss']
})
export class EndingMirrorComponent implements OnInit {

  @Input() data:Mirror =<Mirror>{}
  @Input() detailed:boolean = false

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
   
  }

}
