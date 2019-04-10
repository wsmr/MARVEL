import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';
import { MarvelBaseResponse } from 'src/app/models/marvel-base-response';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: MarvelBaseResponse<Character>
  constructor(private marvelService: MarvelService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.marvelService
    .getSingleCharacters(Number(this.route.snapshot.paramMap.get('id')))
    .subscribe( data => {
      this.character = data;
      console.log(this.character);

    });
  }

}
