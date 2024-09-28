import TablazatModell from "../modell/TablazatModell.js";
import TablazatMegjelenit from "../view/TalazatMegjelenit.js";

export default class TablazatController {
    constructor(){
        //példányosítja a viewt és modellt
        this.tModell = new TablazatModell();
        const lista = this.tModell.getLista();
        console.log("controller", lista)
        this.tMegjelenit = new TablazatMegjelenit(lista, $(".tarolo"));
        this.torlesEsemeny();
    }

    torlesEsemeny(){
        //feliratkozunk a saját eseményre
        $(window).on("torles", (event) => {
            console.log(event.detail)
            let index = event.detail.id
            //át kell adni a modellnek az indexet
            //a modellnek törölnie kell a listából az elemet
            //újra le kell kérdezni az adatokat
            //meg kell jeleníteni az új adatokat
            this.tModell.torles(index)
            const lista = this.tModell.getLista();
            this.tMegjelenit = new TablazatMegjelenit(lista, $("tarolo"))
        })
    }

}

