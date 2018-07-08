import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageUrls;
  config;
  letter;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.letter = params['letter'];
    });

    if (this.letter === 'one') {
      this.imageUrls = [
        {
          image: '../assets/imgs/CombtypeMRTaxial.jpg',
          title: 'Combtype axial'
        },
        {
          image: '../assets/imgs/FlattypeMRTsag.jpeg',
          title: 'Flattype sagittal'
        },
        {
          image: '../assets/imgs/HilltypeCTaxial.jpg',
          title: 'Hilltype axial'
        },
        {
          image: '../assets/imgs/PosttypeMRTaxial.jpg',
          title: 'Posttype axial'
        }
      ];
    } else if (this.letter === 'seven') {
      this.imageUrls = [
        {
          image: '../assets/imgs/KLinesw.jpg',
          title: 'K-line'
        }
      ];
    }
    // this.config = {
    //   width: '100%',    // width of slides defaults to 800px
    //   // height: '3',    // height of slides defaults to 300px
    //   autoPlay: true,    // autoplay required or not defaults to false
    //   delay: 3000       // delay for autoplay
    // };
  }

}
