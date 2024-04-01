import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  mapOptions: google.maps.MapOptions = {
    zoom: 14,
    draggable: false,
    mapTypeControl: false,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  };
  mapCenter = { lat: 0, lng: 0 };
  markerPositions = { lat: 0, lng: 0 };


  
}
