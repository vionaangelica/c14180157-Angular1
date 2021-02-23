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
    if(this.bintang[this.baris][this.kolom] == '*'){
      if (this.turn == 1) {
      this.bintang[this.baris][this.kolom] = 'x';
      this.turn=2;
      } else if (this.turn == 2) {
      this.bintang[this.baris][this.kolom] = 'o';
      this.turn=1;
      }

      var i: number = 0
      var j: number = 0
      for (i = 0; i < 5; i++) {
        var play1: number = 0
        var play2: number = 0
        for (j = 0; j < 5; j++) {
          if (this.bintang[i][j]=="x"){
            play1++
          }
          else{
            play1=0;
          }

          if(this.bintang[i][j]=="o"){
            play2++;
          }
          else{
            play2=0;
          }

          //pemenangnya
          if(play1 == 4){
            alert("Player 1 wins");
            this.reset()
          }
          if(play2 == 4){
            alert("Player 2 wins");
            this.reset()
          }
        }
      }
    }
    else{
      alert("Tempat ini sudah terisi")
    }
  }

  reset(){
     var i: number = 0
      var j: number = 0
      for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            this.bintang[i][j]='*';
        }
      }
      this.kolom =0;
      this.baris=0;
      this.turn=1;
  }
}
