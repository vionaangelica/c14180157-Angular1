import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  bintang = [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
  ];

  kolom = 0;
  baris = 0;
  turn = 1;

  ok() {
    if (this.turn == 1) {
      this.bintang[this.baris][this.kolom] == "x";
      this.turn=2;
    } else if (this.turn == 2) {
      this.bintang[this.baris][this.kolom] == "o";
      this.turn=1;
    }
  }
}
