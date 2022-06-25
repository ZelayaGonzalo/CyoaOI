import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Mirror } from 'src/app/models/Mirror';
import { NgxSpinnerService } from 'ngx-spinner';
import html2canvas from 'html2canvas';
import { testSelection } from 'src/app/data/data';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.scss']
})
export class EndingComponent implements OnInit {

  @Input() selections:Mirror[] =[]

  @ViewChild('screen')
  screen!: ElementRef;
 @ViewChild('canvas')
  canvas!: ElementRef;
 @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  world:Mirror[] = []
  yourself:Mirror[] =[]
  perks:Mirror[] = []
  drawbacks:Mirror[] =[]
  reward:Mirror[] = []

  detailed = false
  loading = false
  currentQuality = 1
 
  constructor(private spinner:NgxSpinnerService){}
 
  ngOnInit(): void {
    this.selections.forEach(selection=>{
      switch(selection.type){
        case 'world':
          this.world.push(selection)
          break;
        case 'reward':
          this.reward.push(selection)
          break
        case 'perk':
          this.perks.push(selection)
          break
        case 'drawback':
          this.drawbacks.push(selection)
          break
        default:
          this.yourself.push(selection)      
      }
    })
  } 

  downloadImage() {
    this.spinner.show()
    html2canvas(this.screen.nativeElement,{useCORS:true,scale:this.currentQuality,imageTimeout:30000}).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/jpeg');
      this.downloadLink.nativeElement.download = 'your-path.jpg';
      this.downloadLink.nativeElement.click();
      this.spinner.hide()
    });
  }


}
