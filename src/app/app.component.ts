import { Component } from '@angular/core';
import { zoomInDelayAnimation,inOutAnimation } from './animations/animations';
import { Mirror } from './models/Mirror';
import { worlds,intros,worldTypes,types,roles,characters,perks,drawbacks,rewards } from './data/data';
import { KarmaService } from './services/karma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    zoomInDelayAnimation,inOutAnimation
  ]
})
export class AppComponent {

  types = types
  worlds = worlds
  worldTypes = worldTypes
  intros = intros
  roles = roles
  characters = characters
  perks = perks
  drawbacks = drawbacks
  rewards = rewards

  currentBackground:string =''
  currentStage:number = 0
  currentKarma:number = 0

  selections:Mirror[] = []

  constructor(private karma:KarmaService){
    karma.getValue().subscribe(data=>this.currentKarma = data)
  }

  changeStage():void{
    this.currentStage +=1
  }

  addSelection(mirror:Mirror):void{
    this.selections.push(mirror)
    console.log(mirror)
    switch(mirror.id){
      case 11:
        perks[3].selected = true
        this.selections.push(perks[3])
        break
      case 13:
        perks[23].selected = true
        this.selections.push(perks[23])
        break
      case 15:
        perks[0].selected = true
        this.selections.push(perks[0])
        break
      case 16:
        perks[20].selected = true
        this.selections.push(perks[20])
        break
      case 25:
        perks[14].selected = true
        this.selections.push(perks[14])
        break
    }
    console.log(this.selections)
    this.karma.addKarma(mirror.karmaValue)
  }
  removeSelection(id:number):void{
    const index = this.selections.findIndex(mirror=>mirror.id === id)
    this.karma.addKarma(-(this.selections[index].karmaValue))
    this.selections[index].selected = false
    this.selections[index].isBroken = false
    this.selections.splice(index,1)
  }

  addKarma(value:number):void{
    this.currentKarma += value
  }

  setBakcground(input:string):void{
   this.currentBackground = input
  }

}

