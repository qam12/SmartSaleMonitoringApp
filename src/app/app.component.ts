import { Component , OnInit } from '@angular/core';
import { MyNewInterface } from './my-new-interface';
import { ApiService } from './api.service';
import { error } from 'util';
import {GlobalResources} from './Shared/GlobalFunctions';
import {ShopList} from './Interfaces/ShopList';
import {DistributorList} from './Interfaces/DistributorList';
import { ControlContainer } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

    // google maps zoom level
    zoom: number = 3;
  
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    markers: marker[] = [
      {
        lat: 24.9499962,
        lng: 68.438171,
        label: 'Shop 1'
      },
      {
        lat: 24.9499963,
        lng: 68.438172,
        label: 'Shop 2'
      },
      {
        lat: 24.9499964,
        lng: 68.438173,
        label: 'Shop 3'
      },
      {
        lat: 32.265396,
        lng: 72.905388,
        label: 'Shop 4'
      },
      {
        lat: 24.914440,
        lng: 67.029831,
        label: 'Shop 5'
      },
      {
        lat: 26.244221,
        lng: 68.410034,
        label: 'Shop 6'
      },
      {
        lat: 30.181459,
        lng: 71.492157,
        label: 'Shop 7'
      },
      {
        lat: 33.148392,
        lng: 73.751770,
        label: 'Shop 8'
      },
      {
        lat: 31.345394,
        lng: 73.429810,
        label: 'Shop 9'
      },
      {
        lat: 30.286415,
        lng: 71.932030,
        label: 'Shop 10'
       
      },
      {
        lat: 32.337006,
        lng: 74.903336,
        label: 'Shop 11'
  
      },
      {
        lat: 30.677717,
        lng: 73.106812,
        label: 'Shop 12'
    
      },
      {
        lat: 	30.767956,
        lng: 72.437813,
        label: 'Shop 13'
    
      }
    ];

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

