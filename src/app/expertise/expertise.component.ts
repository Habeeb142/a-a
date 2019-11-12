import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function() {
      //displaying constituional details on click of its id
      $('#constitutional-law').click(function() {
        $('.expert').addClass('d-none');
        $('.constitutional-law').addClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        // scrolling to class constitutional-law
        $('html, body').animate({
          scrollTop: $('.constitutional-law').offset().top-265
        },1000)
      });

      //displaying civil-law
      $('#civil-law').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.civil-law').addClass('d-block');
        //scrolling to class civil-law
        $('html, body').animate({
          scrollTop: $('.civil-law').offset().top-335
        }, 1000)
      })

      //displaying trust and estates
      $('#trust').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.trust').addClass('d-block');
        // scrolling to class trust
        $('html, body').animate({
          scrollTop: $('.trust').offset().top-265
        }, 1000)
      })

      //displaying Criminal Laws
      $('#criminal-law').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.criminal-law').addClass('d-block');
        // scrolling to class criminal law
        $('html, body').animate({
          scrollTop: $('.criminal-lawadministration-law').offset().top-265
        }, 1000)
      })

      //displaying Administration Laws
      $('#admin-law').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.admin-law').addClass('d-block');
        // scrolling to class administraton law
        $('html, body').animate({
          scrollTop: $('.admin-law').offset().top-295
        }, 1000)
      })

      //displaying corporate Laws
      $('#corporate-law').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.corporate-law').addClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        // scrolling to class administraton law
        $('html, body').animate({
          scrollTop: $('.corporate-law').offset().top-295
        }, 1000)
      })

      //displaying Election Petition
      $('#election-petition').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.election-petition').addClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        // scrolling to class administraton law
        $('html, body').animate({
          scrollTop: $('.election-petition').offset().top-295
        }, 1000)
      })

      //displaying Labour law
      $('#labour-law').click(() => {
        $('.expert').addClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.trust').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.labour-law').addClass('d-block');
        $('.admin-law').removeClass('d-block');
        // scrolling to class administraton law
        $('html, body').animate({
          scrollTop: $('.labour-law').offset().top-295
        }, 1000)
      })

      // going back
      $('.back').click(()=> {
        $('.expert').removeClass('d-none');
        $('.constitutional-law').removeClass('d-block');
        $('.civil-law').removeClass('d-block');
        $('.criminal-law').removeClass('d-block');
        $('.corporate-law').removeClass('d-block');
        $('.admin-law').removeClass('d-block');
        $('.election-petition').removeClass('d-block');
        $('.labour-law').removeClass('d-block');
        //scrolling to class expert
        $('html, body').animate({
          scrollTop: $('.expert').offset().top-115
        }, 1000)
      })

      $('a').click(()=> {
        $('html, body').animate({
          scrollTop: $('#expertise').offset().top-120
        },3000)
      });
  

    })

  }

}
