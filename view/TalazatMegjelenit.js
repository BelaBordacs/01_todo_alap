import Sor from "./Sor.js";

export default class TablazatMegjelenit {
    #lista=[];
    constructor(lista, szuloElem){
        console.log(lista);
        this.#lista = lista;
        this.szuloElem = szuloElem
        this.szuloElem.empty();
        this.tablazatKiir();
        this.tbodyElem = $(".sorok");
        this.sorokLetrehozasa();
    }

    sorokLetrehozasa(){
        // itt fojuk pélányosítani a Sor osztályunkat, ami egyetlen táblázat sort jelent az adatokkal
        this.#lista.forEach ((elem, index)=> {
            elem.id = index;
            new Sor(elem, this.tbodyElem)
        })
        
    }

    tablazatKiir(){
        this.szuloElem.append(`
            <table class= "table table-stripped">
                <thead>
                    <tr>
                        <th>Szakdolgozat lépés</th>
                        <th>Határidő</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="sorok">
                        
                </tbody>
            </table>
         `)
    }


}