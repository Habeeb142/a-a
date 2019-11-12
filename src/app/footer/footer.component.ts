import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    // The location of Uluru
    var uluru = {lat: 7.4180, lng: 3.9019}
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10.4, center: uluru,
      panControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      // overviewMapControl: true,
      rotateControl: true,
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});


    var contentString = '<div id="siteNotice">'+
    '</div>'+
    '<img id="firstHeading" class="img img-rounded" src="/assets/logo.jpg" width="300" height="200">'+
    '<div id="bodyContent" style="color: black">'+
    '<p><b>A & A Attorneys</b>,The frontliner Chambers<br />' +
    'Feel free to<br /> visit us at, <br />'+
    'No 8, Oluokun Close,<br /> Old bodija. Ibadan<br /> '+
    'Oyo State, Nigeria<br />'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'A & A Attorneys'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

}

