import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `
    <div id="map" style="height: 200px; width: 100%;"></div>
  `,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {const map = L.map('map').setView([51.505, -0.09], 20);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback=<strong>googleMapLoaded">OpenStreetMap</a> contributors'
  }).addTo(map);
}
}
