class Cuenta {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    depositar(monto) {
        if (monto <= 0) {
            document.write("El monto del depósito debe ser mayor que 0.");
            document.write(`<br>`)
            return;
        }
        document.write(`Acción: ${this.nombre}<br>`)
        const itf = this.calcularITF(monto);
        this.saldo += monto - itf;
        document.write(`Depósito: S/${monto.toFixed(2)} (ITF: S/${itf.toFixed(2)})<br>`);
        this.mostrarSaldo();
    }

    retirar(monto) {
        if (monto <= 0) {
            document.write("El monto del retiro debe ser mayor que 0.<br>");
            return;
        }
        if (monto > this.saldo) {
            document.write("Fondos insuficientes para realizar el retiro.<br>");
            return;
        }

        const itf = this.calcularITF(monto);
        this.saldo -= monto + itf;
        document.write(`Acción: ${this.nombre}<br>`)
        document.write(`Retiro: S/${monto.toFixed(2)} (ITF: S/${itf.toFixed(2)})<br>`);
        this.mostrarSaldo();
    }

    mostrarSaldo() {
        document.write(`Saldo actual: S/${this.saldo.toFixed(2)}<br><br>`);
    }

    calcularITF(monto) {
        return monto * 0.00005;
    }
}

const cuenta1 = new Cuenta("José Medina", 0);

cuenta1.depositar(1000);
cuenta1.retirar(500);
cuenta1.mostrarSaldo();
cuenta1.retirar(2000);