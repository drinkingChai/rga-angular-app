import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-exhibit-collection',
  templateUrl: './exhibit-collection.component.html',
  styleUrls: ['./exhibit-collection.component.scss']
})
export class ExhibitCollectionComponent implements OnInit {
  videos: Video[];

  constructor(
    private videoService: VideoService,
    public modalService: ModalService
  ) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
      .subscribe(videos => this.videos = videos);
  }

}
