import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';

@Component({
  selector: 'app-mirror',
  templateUrl: './mirror.component.html',
  styleUrls: ['./mirror.component.scss']
})
export class MirrorComponent implements OnInit {

  @Input() data:Mirror =<Mirror>{}
  @Input() selected:Mirror[] = []
  @Input() index:number = 0

  @Output() showCard = new EventEmitter<Mirror>()

  broken = false

  constructor() { }

  ngOnInit(): void {
    if(this.data.requires.length > 0){
      let found = false
      this.data.requires.forEach(requirement=>{
        if(this.selected.findIndex(item=>item.title === requirement) >= 0){
          found = true
        }
      })
      if (!found){
        this.broken = true
        this.data.isBroken = true
      }
    }
    if(this.data.incompatible.length > 0){
      this.data.incompatible.forEach(incompatible=>{
        if(this.selected.findIndex(item=>item.title === incompatible) != -1){
          this.broken = true
          this.data.isBroken = true
        }
      }
      )
    }
  }

  onClick(){
    this.showCard.emit(this.data)
  }

}
