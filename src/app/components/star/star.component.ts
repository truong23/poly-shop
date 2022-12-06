import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.rating = 5;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
      
  }
  rate(){
    console.log('rating')
    this.ratingClicked.emit(`Rating: ${this.rating}`)
  }

}
