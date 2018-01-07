import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  feature: Video;
  featureEmbedUrl: {};

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getFeature();
  }

  getFeature(): void {
    this.videoService.getFeature()
      .subscribe(video => {
        this.feature = video;
        this.featureEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoService.getEmbedUrl(video.youtubeId, { noInfo: true }));
      });
  }

}
