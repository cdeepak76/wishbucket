import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goalList', [
      transition('* => *', [
        query(':enter', style({opacity:0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
            ]))]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  count: number = 4;
  btnText: string = 'Add My Goal';
  goalText: string = 'Learn to play Guitar';
  goalList = [];

  constructor() { }

  ngOnInit() {
    this.goalList.push('Learn to play Guitar and violin');
    this.goalList.push('Learn to swimm');
    this.goalList.push('improve volleyball');

    this.count = this.goalList.length;
  }

  addItem() {
    if(this.goalText!='' && !this.goalList.find(t => t == this.goalText)) {
      this.goalList.push(this.goalText);
      this.goalText = '';
      this.count = this.goalList.length;
    }
  }

  removeItem(i) {
    this.goalList.splice(i, 1);
    this.count = this.goalList.length;
  }

}
