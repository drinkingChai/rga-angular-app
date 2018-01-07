import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-exhibit-collection',
  templateUrl: './exhibit-collection.component.html',
  styleUrls: ['./exhibit-collection.component.scss']
})
export class ExhibitCollectionComponent implements OnInit {
  videos: Video[];

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.getVideos()
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos)
  }
}
