import { HttpClient } from '@angular/common/http';
import { Injectable, ViewContainerRef } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Game } from '../interfaces/game.interface';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private itemsCollection !: AngularFirestoreCollection<Game>;
  private nominados : Game[] = [];
  private itemDoc !: AngularFirestoreDocument<Game>;
  private juego !: Game;

  constructor( private firestore: AngularFirestore,private http: HttpClient) { }


  getNominados() {
    // para evitar la recarga de los datos al cambiar de pestaña
    if ( this.nominados.length > 0 ) {
      return of(this.nominados);
    } else {
      this.itemsCollection = this.firestore.collection<Game>('goty');
      return this.itemsCollection.valueChanges()
        .pipe(
          map( (juegos: Game[]) => {
            this.nominados = juegos;
            return this.nominados;
          })
        )
    }
  }

  getJuego( id : string ) {
    this.itemDoc = this.firestore.doc<Game>(`goty/${id}`);
    return this.itemDoc.valueChanges();
  }

  votarJuego( juego: Game ) {
    this.itemDoc.update(juego);
  }
}
