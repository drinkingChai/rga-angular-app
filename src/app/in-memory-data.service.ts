import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const videos = [
      { title: "Our Viking's All Wired Up - MST3K: Devil Fish", youtubeId: "T9YHRg-pM00" },
      { title: "Deep Fried Sword - MST3K: The Magic Sword", youtubeId: "ugbXVZtw6n8" },
      { title: "MST3K ~ S08E07 - Terror from the Year 5000", youtubeId: "4Ohd--psEy4" },
    ];
    const feature = { title: "", youtubeId: "-Z1pAv9bLTc" };
    return {videos,feature};
  }

  constructor() { }

}
