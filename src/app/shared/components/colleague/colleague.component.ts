import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Colleague } from 'src/app/models/colleague';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent implements OnInit {

  @Input()person !: Colleague;

  constructor() { }

  ngOnInit(): void {
  }

  getInterface(): Colleague {
    return {
      pseudo: 'martin',
      score: 130,
      photo: ""
    }
  }

  likes(val: LikeHate) {
    if (val == LikeHate.LIKE) {
      this.person.score += 1;
    }
    else if (val == LikeHate.DISLIKE) {
      this.person.score -= 1;
    }

  }

}
