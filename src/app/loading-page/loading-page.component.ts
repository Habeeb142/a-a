import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      // start of fading in and out of logo
      //setting fadeOut animated using setInterval every 2sec
      setInterval(changeLogoClass, 2000);
      function changeLogoClass() {
        $('.logo').addClass('fadeOut');
      }
      //removing class fadeOut, in other to use fadeIN
      setInterval(changeLogoClass2, 4000);
      function changeLogoClass2() {
        $('.logo').removeClass('fadeOut');
        $('.logo').addClass('fadeIn');
      }
      //end of fading in and out of logo
    })

  }

}
