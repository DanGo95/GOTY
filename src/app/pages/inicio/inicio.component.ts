import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Game } from '../../interfaces/game.interface';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor( private _gs: GameService ) { }

  ngOnInit(): void {
    this._gs.getNominados().pipe(
      map( (juegos:Game[]) => juegos.map( ({ name, votos }) => ({ name, value: votos })))
    ).subscribe( juegos => {
      this.juegos = juegos;
    });
  }

}
