import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    $(document).ready(function(){

      //scroll to services
      $('.service').click(()=> {
        $('html, body').animate({
          scrollTop: $('#expertise').offset().top-150
        },3000)
      });
  

      // scroll to conatact
      $('.contact').click(()=> {
        $('html, body').animate({
          scrollTop: $('#contact').offset().top
        },3000)
      });
      // end

      // scroll to conatact
      $('.home').click(()=> {
        $('html, body').animate({
          scrollTop: $('#home').offset().top-400
        },3000)
      });
      // end


      $('.home').css({'border-bottom': '1px solid grey'});
      $('.partners').css({'border-bottom': '0px'});
      $('.about').css({'border-bottom': '0px'});
      $('.service').css({'border-bottom': '0px'});
      $('.contact').css({'border-bottom': '0px'});

      $('.home-text').click(function(){
        $('.home').css({'border-bottom': '1px solid grey'});
        $('.partners').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.service').css({'border-bottom': '0px'});
        $('.contact').css({'border-bottom': '0px'});
        $('.home').addClass('bounce');
      })
      $('.partners-text').click(function(){
        $('.partners').css({'border-bottom': '1px solid grey'});
        $('.partners').addClass('bounce');
        $('.home').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.service').css({'border-bottom': '0px'});
        $('.contact').css({'border-bottom': '0px'});
      })
      $('.about-text').click(function(){
        $('.about').css({'border-bottom': '1px solid grey'});
        $('.about').addClass('bounce');
        $('.partners').css({'border-bottom': '0px'});
        $('.home').css({'border-bottom': '0px'});
        $('.service').css({'border-bottom': '0px'});
        $('.contact').css({'border-bottom': '0px'});
      })
      $('.service-text').click(function(){
        $('.service').css({'border-bottom': '1px solid grey'});
        $('.service').addClass('bounce');
        $('.partners').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.home').css({'border-bottom': '0px'});
        $('.contact').css({'border-bottom': '0px'});
      })
      $('.contact-text').click(function(){
        $('.contact').css({'border-bottom': '1px solid grey'});
        $('.contact').addClass('bounce');
        $('.partners').css({'border-bottom': '0px'});
        $('.about').css({'border-bottom': '0px'});
        $('.service').css({'border-bottom': '0px'});
        $('.home').css({'border-bottom': '0px'});
      })
    })

  }

}
