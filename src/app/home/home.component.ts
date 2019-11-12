import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){

     
        // hiding the body of home and displaying the page loading
        $('.load-page').css('display','block');
        $('.home-body1').css('display','none');
        $('.little-about-us').css('display','none');
        $('.footer').css('display','none');
        $('.expertise').css('display','none');
        $('.card').css('display','none');
       
        $('.navbar-address').css('display','none');
        // end

        // hiding the page loading and displaying home-body after 10secs
        setTimeout(() => {
          $('.load-page').addClass('fadeOut');
          $('.load-page').css('display','none');
          $('.home-body1').css('display','block');
          $('.navbar-address').css('display','block');
          $('.little-about-us').css('display','block');
          $('.footer').css('display','block');
          $('.expertise').css('display','block');
          $('.card').css('display','block');
        }, 6000);
        // end

        // knowing when div class little-about-us reaches top of scren
        var distance = $('.card').offset().top-200;

        $(window).scroll(function() {
          if ( $(this).scrollTop() >= distance ) {
            $('.card').addClass('zoomIn');
          } 
        });
        // knowing when div class little-about-us reaches top of scren
        var distance = $('.little-about-us').offset().top-700;

        $(window).scroll(function() {
          if ( $(this).scrollTop() >= distance ) {
            $('.little-about-us').addClass('zoomIn');
          } 
        });

        // scroll to conatact
        $('.contact').click(()=> {
          $('html, body').animate({
            scrollTop: $('#contact').offset().top
          },3000)
        });
        // end
    })


  }


}
