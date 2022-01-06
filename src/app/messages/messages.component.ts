import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
//import { HEROESE } from '../mock-heroes';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  hero:Hero | undefined;
 
  constructor(public messageService:MessageService,
              public heroService:HeroService,
              public route:ActivatedRoute) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero); 
  }

}
