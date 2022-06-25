import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { spinShow } from 'src/app/animations/animations';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  animations:[
    spinShow
  ]
})
export class RoleComponent implements OnInit {

  

  @Input() roles:Mirror[] =[]
  @Output() addSelection = new EventEmitter<Mirror>()
  @Output() nextStage = new EventEmitter()

  @Input() intro:Mirror =<Mirror>{}
  @Input() background:string = ''
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
    this.showButtonText = 'Sounds Good'
    this.showButtonLayout = 'double'
    this.onShowHelp()
  }

  onPick(currentCard:Mirror){
    this.addSelection.emit(currentCard)
    this.nextStage.emit()
  }

  ClearFields():void{
    this.currentCard = <Mirror>{}
  }
}
