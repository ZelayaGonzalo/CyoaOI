import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { KarmaService } from 'src/app/services/karma.service';

@Component({
  selector: 'app-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss']
})
export class HelpWindowComponent implements OnInit {

  @Input() card:Mirror = <Mirror>{}
  @Input() selected:Mirror[] = []
  @Input() buttonText:string = ''
  @Input() buttonLayout:string = 'single'
  @Output() close = new EventEmitter()
  @Output() pick = new EventEmitter<Mirror>()
  @Output() remove = new EventEmitter<number>()
  @Output() nextStage = new EventEmitter()

  upgradePurchased = false
  warningMessage = ''
  isBroken = false
  currentKarma:number = 0

  constructor(private karma:KarmaService){
    karma.getValue().subscribe(data=>this.currentKarma = data)
  }

  ngOnInit(): void {
    if(this.card.isBroken){
      this.isBroken = this.card.isBroken
      this.buttonLayout = 'single'
      this.buttonText = 'Close'
      console.log(this.buttonLayout)
    }
    if(this.card.selected){
      if(this.card.upgrade){
        if(this.selected.findIndex(item => item.title === this.card.upgrade)>= 0){
          this.buttonLayout = 'single'
          this.buttonText ='Close'
          this.upgradePurchased = true
          this.warningMessage ='Upgrade Purchased'
        }
        else{
          this.buttonLayout = 'double'
          this.buttonText = 'Remove'
        }
      }
      else if(this.card.karmaValue > 0){
        if(this.currentKarma - this.card.karmaValue <0){
          this.buttonLayout = 'single'
          this.buttonText ='Close'
          this.upgradePurchased = true
          this.warningMessage ='Karma cannot be less than 0'
        }
        else{
          this.buttonLayout = 'double'
          this.buttonText = 'Remove'
        }
      }
      else{
        this.buttonLayout = 'double'
        this.buttonText = 'Remove'
      }
    }

    else{
      if(this.currentKarma + this.card.karmaValue < 0){
        this.upgradePurchased = true
        this.warningMessage = 'Not Enough Karma'
        this.buttonLayout = 'single'
        this.buttonText ='Close'
      }
      
    }

  }

  onClose():void{
    this.close.emit()
  }

  onPick(){
    if(this.card.type != 'ignore'){
      if(!this.card.selected){
        this.card.selected = true
        this.pick.emit(this.card)
      }
      else{
        this.card.selected = false
        this.remove.emit(this.card.id)
      }
    }
    else{
      this.nextStage.emit()
    }
  }

}
