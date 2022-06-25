import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { spinShow } from 'src/app/animations/animations';
import { intros } from 'src/app/data/data';

@Component({
  selector: 'app-world-setting',
  templateUrl: './world-setting.component.html',
  styleUrls: ['./world-setting.component.scss'],
  animations:[
    spinShow
  ]
})
export class WorldSettingComponent implements OnInit {

  @Output() addSelection = new EventEmitter<Mirror>()
  @Output() nextStage = new EventEmitter<number>()
  @Output() setBackground =new EventEmitter<string>()

  @Input() worlds:Mirror[] =[]
  @Input() intro:Mirror =<Mirror>{}
  @Input() selected:Mirror[] =[]

  pageTitle:string = ''
  
  showHelp = true
  currentCard:Mirror = <Mirror>{}
  showButtonText = 'Close'
  showButtonLayout = 'single'
 
  constructor() { }

  ngOnInit(): void {
   this.currentCard = this.intro
   this.pageTitle = this.currentCard.title
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
    this.showButtonText = 'Continue'
    this.showButtonLayout = 'double'
    this.onShowHelp()
  }

  onPick(currentCard:Mirror){
    this.addSelection.emit(currentCard)
    this.nextStage.emit()
    this.sendBackground()
  }

  ClearFields():void{
    this.currentCard = <Mirror>{}
  }

  sendBackground():void{
    this.setBackground.emit(this.checkBackground())
  }

  checkBackground():string{
    console.log(window.screen.width)
    if(window.screen.width >= 700){
      console.log(this.currentCard.desktopImage)
      return this.currentCard.desktopImage || ''
    }
    return this.currentCard.image
  }

}
