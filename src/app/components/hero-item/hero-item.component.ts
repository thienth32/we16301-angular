import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input("data-hero") heroData: any;
  @Output('childCall') call = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  remove(){
    this.call.emit(this.heroData);
  }

}
