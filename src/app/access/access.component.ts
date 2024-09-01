import { Component } from '@angular/core';
import { AccessdataService } from '../accessdata.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrl: './access.component.css'
})
export class AccessComponent {

  title: string = 'Access Control';
  players: any[] = [];

  constructor(private accessDataService: AccessdataService) {}

  ngOnInit(){
    this.accessDataService.getData().subscribe((response: any) => {
      console.log(response?.data);
      if(Array.isArray(response?.data)){
        console.log("calling")
        this.players = response.data.map((player: any) => ({
          ...player,
          isActive: true
        }));
      }
    });
  }

  toggleIsActive(player: any){
    console.log("toggleIsActiveBefore", player);
    const index = this.players.findIndex(i => i.id == player.id);
    console.log("index", this.players[index]);
    // this.players[index] = 
    // {
    //   ...this.players[index],
    //   //isActive: !this.players[index].isActive
    // }
    console.log("toggleIsActive After", this.players[index].isActive);

  }
  savePlayers(){
    console.log("savePlayers", this.players);
  }
}
