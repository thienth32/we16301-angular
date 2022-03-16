import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input("data-hero") heroData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
