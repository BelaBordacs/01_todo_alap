export default class Sor {
    //táblázat 1 sora az adatokkal
    #adat = {};
    constructor(adat, szuloElem){
        console.log(adat)
        this.#adat = adat;
        this.szuloElem = szuloElem;
        this.sorMegjelenit();
        this.kukaElem = $(".torol:last");
        this.kattintasEsemeny();
    }

    kattintasEsemeny(){
        this.kukaElem.on("click", () => {
            console.log(this.#adat)
            //saját esemény létreozása és ablakhoz rendelése
            const e = new CustomEvent("torles", {detail:this.#adat});
            window.dispatchEvent(e);
        })
    }

    sorMegjelenit(){
        this.szuloElem.append(`
            <tr>
                <td>${this.#adat.tevekenyseg}</td>
                <td>${this.#adat.hatarido}</td>
                <td class="torol"><img src="trash_icon.png"></th>
            </tr>
        `)
    };
}