import { Component, Input } from '@angular/core';
import { Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listatem',
    templateUrl: './listatem.component.html'
})
export class ListagemComponent {

fotos: Object[] = [];

    constructor(http:Http){
        http
        .get('v1/fotos')
        .map( res =>  res.json())
        .subscribe( fotos => {
            this.fotos = fotos;
            console.log(fotos);
        }, erro => console.log(erro));
    }
}
