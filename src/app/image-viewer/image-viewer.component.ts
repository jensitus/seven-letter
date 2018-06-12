import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageUrls;
  config;

  constructor() {
    this.imageUrls = [
      {
        image: 'assets/imgs/FlattypeMRTsag.jpeg',
        title: 'flattype sagital'
      },
      {
        image: 'assets/imgs/PosttypeMRTaxial.jpg',
        title: 'Posttype axial'
      }];

    this.config = {
      width: '100%',    // width of slides defaults to 800px
      // height: '3',    // height of slides defaults to 300px
      autoPlay: true,    // autoplay required or not defaults to false
      delay: 3000       // delay for autoplay
    };
  }

  ngOnInit() {
  }

}
