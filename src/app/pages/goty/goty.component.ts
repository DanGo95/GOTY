import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/game.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos : Game[] = [];
  juego !: Game;

  constructor( public _gs: GameService ) {}

  ngOnInit(): void {

    this._gs.getNominados()
            .subscribe( (resp) => {
              this.juegos = resp;
            })

  }

  votarJuego( id: string ) {

    var voto = this._gs.getJuego(id).subscribe( juego => {
      if (juego) {
        this.juego = juego;
        this.juego.votos += 1;

        this._gs.votarJuego(this.juego);

        Swal.fire('Gracias', `Gracias por votar a ${ juego.name }.`, 'success');
      }
      voto.unsubscribe();
    })

  }

}
