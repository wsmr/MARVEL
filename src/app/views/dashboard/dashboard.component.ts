import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Character } from 'src/app/models/character';
import { MarvelBaseResponse } from 'src/app/models/marvel-base-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }
  characters: MarvelBaseResponse<Character>;

  ngOnInit() {

    this.marvelService.getAllCharacters().subscribe( data => {
      this.characters = data;
      console.log(this.characters);

    });


  }

}
