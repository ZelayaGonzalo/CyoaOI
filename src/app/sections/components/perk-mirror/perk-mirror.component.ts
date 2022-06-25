import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-perk-mirror',
  templateUrl: './perk-mirror.component.html',
  styleUrls: ['./perk-mirror.component.scss']
})
export class PerkMirrorComponent implements OnInit,DoCheck {

  @Input() data:Mirror =<Mirror>{}
  @Input() selections:Mirror[] = []
  @Input() index:number = 0


  @Output() showCard = new EventEmitter<Mirror>()
  @Output() deleteUnavaliable= new EventEmitter<number>()

  selected = true
  broken = false
  iterableDiffer:any

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(undefined);
  }

  ngOnInit(): void {
    this.selected = this.data.selected || false
    let metRequirements = false
    if(this.data.requires.length > 0){
      let found = false
      this.data.requires.forEach(requirement=>{
        if(this.selections.findIndex(item=>item.title === requirement) >= 0){
          found = true
        }
      })
      if(!found){
        this.broken = true
        this.data.isBroken = true
        metRequirements = false
      }
      else{
        this.broken = false
        this.data.isBroken = false
        metRequirements = true
      }
    }
    else{
      metRequirements = true
    }
    if(this.data.incompatible.length > 0){
      let found = false
      this.data.incompatible.forEach(incompatible=>{   
        if(this.selections.findIndex(item=>item.title === incompatible) >= 0){
          found = true
        }    
      }
      )
      if(found){
        this.broken = true
        this.data.isBroken = true
      }
      else if(metRequirements){
        this.broken = false
        this.data.isBroken = false
      }
    }
  }

  ngDoCheck():void{
    this.selected = this.data.selected  || false
    const changes = this.iterableDiffer.diff(this.selections);
    if (changes) {
      let metRequirements = true
      if(this.data.requires.length > 0){
        let found = false
        this.data.requires.forEach(requirement=>{
          const index =this.selections.findIndex(item=>item.title === requirement) 
          if(index >= 0){
              found = true
          }
        })
        if (!found){
          this.broken = true
          this.data.isBroken = true
          metRequirements = false
        }
        else{
          this.broken = false
          this.data.isBroken = false
          metRequirements = true
        }
      }
      if(this.data.incompatible.length > 0){
        let found = false
        this.data.incompatible.forEach(incompatible=>{   
          if(this.selections.findIndex(item=>item.title === incompatible) >= 0){
            found = true
          }    
        }
        )
        if(found){
          this.broken = true
          this.data.isBroken = true
        }
        else{
          if(metRequirements){
            this.broken = false
            this.data.isBroken = false
            }
          }
      }
    }
  }

  onClick(){
    this.showCard.emit(this.data)
  }

  


}
