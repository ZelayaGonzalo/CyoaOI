import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { perks,drawbacks } from 'src/app/data/data';
import { spinShow,inOutAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-perks-drawbacks',
  templateUrl: './perks-drawbacks.component.html',
  styleUrls: ['./perks-drawbacks.component.scss'],
  animations:[
    spinShow,inOutAnimation
  ]
})
export class PerksDrawbacksComponent implements OnInit {

  @Output() addSelection = new EventEmitter<Mirror>()
  @Output() removeSelection = new EventEmitter<number>()
  @Output() nextStage = new EventEmitter()
  @Input() perks:Mirror[] = []
  @Input() drawbacks:Mirror[] = []
  @Input() selected:Mirror[] = []
  @Input() intro:Mirror =<Mirror>{}
  @Input() background:string = ''



  showDrawbacks = false
  showHelp = true

  currentCard:Mirror = <Mirror>{}
  showButtonText = 'Close'
  showButtonLayout = 'single'
  constructor() { }

  ngOnInit(): void {
    this.currentCard = this.intro
  }

  onChangeShow(){
    this.showDrawbacks = !this.showDrawbacks
  }
  onShowHelp():void{
    this.showHelp = true
  }
  onHideHelp():void{
    this.ClearFields()
    this.showHelp = false
  }
  openMirror(selected:Mirror){
    this.currentCard = selected
    this.showButtonText = 'Select'
    this.showButtonLayout = 'double'
    this.onShowHelp()
  }

  onPick(currentCard:Mirror){
    this.addSelection.emit(currentCard)
    this.onHideHelp()
  }
  onRemove(id:number){
    this.removeSelection.emit(id)
    this.onHideHelp()
  }

  ClearFields():void{
    this.currentCard = <Mirror>{}
  }
  onContinue():void{
    this.ClearFields()
    this.showButtonLayout = 'double'
    this.currentCard.image = this.intro.image
    this.currentCard.type = 'ignore'
    if(this.intro.id == 5){
      this.showButtonText = 'Continue'
      this.currentCard.title = 'Before moving foward'
      this.currentCard.description = "Are you sure you want to continue? You won't be able to come back."
    }
    else{
      this.showButtonText = 'Farewell'
      this.currentCard.description ="Finally, we reached the end of the crossroads. Before you is your final destination. You don’t need to do anything special.  All you need to do is take a deep breath, close your eyes, and step forward. When you open them again, you’ll find yourself in your new world. Good luck and farewell. <br> "
      this.currentCard.title = 'The end'

    }
    this.onShowHelp()
  }
  toNextStage():void{
    this.nextStage.emit()
  }
}
