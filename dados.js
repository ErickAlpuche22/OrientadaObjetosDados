class jugador {
    constructor() {
        this.nombre = "";
        this.caraDado1 = 0;
        this.caraDado2 = 0;
        this.contadorVictorias = 0;
    }

    setCaraDado1(caraDado1) {
        this.caraDado1 = caraDado1;
    }
    setCaraDado2(caraDado2) {
        this.caraDado2 = caraDado2;
    }

    getCaraDado1() {
        return this.caraDado1;
    }
    getCaraDado2() {
        return this.caraDado2;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getcontadorVictorias() {
        return this.contadorVictorias;
    }
    setcontadorVictorias(contadorVictorias) {
        this.contadorVictorias = contadorVictorias;
    }
}

class JuegoDados extends jugador {
    constructor(numeroJuego, jugador1, jugador2) {
        super();
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
        this.numeroJuego = numeroJuego;
    }

    tirarDados() {
        this.jugador1.setCaraDado1(Math.round((Math.random() * 5) + 1));
        this.jugador1.setCaraDado2(Math.round((Math.random() * 5) + 1));
        this.jugador2.setCaraDado1(Math.round((Math.random() * 5) + 1));
        this.jugador2.setCaraDado2(Math.round((Math.random() * 5) + 1));
    }

    determinaGanador() {
        if (this.jugador1.getCaraDado1() + this.jugador1.getCaraDado2() == 7 && this.jugador2.getCaraDado1() + this.jugador2.getCaraDado2() != 7) {
            this.jugador1.setcontadorVictorias(this.jugador1.getcontadorVictorias() + 1);
        } else if (this.jugador2.getCaraDado1() + this.jugador2.getCaraDado2() == 7 && this.jugador1.getCaraDado1() + this.jugador1.getCaraDado2() != 7) {
            this.jugador2.setcontadorVictorias(this.jugador2.getcontadorVictorias() + 1);
        }
    }

    resultado() {
        if (this.jugador1.getcontadorVictorias() == 3) {
            console.log(this.jugador1.getNombre() + " Es el ganador");
            return false;
        } else if (this.jugador2.getcontadorVictorias() == 3) {
            console.log(this.jugador2.getNombre() + " Es el ganador");
            return false;
        } else {
            return true;
        }
    }
}

let p1 = new jugador();
let p2 = new jugador();

p1.setNombre("Pedro");
p2.setNombre("Juan");

partidas = 1;
continuar = true;

while (continuar) {
    let juego = new JuegoDados(partidas, p1, p2);

    juego.tirarDados();
    juego.determinaGanador();
    continuar = juego.resultado();
    partidas++;
}
console.log("Juegos jugados: " + partidas);
