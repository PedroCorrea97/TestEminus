import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

interface Member {
  id: number;
  Name: string;
  Email: string;
  imgProfile: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @Output() onEnter   : EventEmitter < string > = new EventEmitter();
  @Output() onDebounce: EventEmitter < string > = new EventEmitter();
  
  public Members: Member []=[]

  debouncer: Subject< string > = new Subject();
  termino: string = '';
  invlaidMember: boolean = false;

  
  ngOnInit() {
    this.Members = [      { id: 1, Name: 'Steve Roggers', Email: 'AssOfAmerica@gmail.com', 
                          imgProfile: 'https://i.pinimg.com/736x/ba/32/c3/ba32c3707b4625af137ee5892c10a36f.jpg'},
                          { id: 2, Name: 'Antonio Stark', Email: 'coolguyWsexAppeal@gmail.com', 
                          imgProfile: 'https://los40es00.epimg.net/los40/imagenes/2021/07/01/bigbang/1625165791_416626_1625166043_noticia_normal_amp.jpg'},
                          { id: 3, Name: 'Barry Allen', Email: 'thefastestmenAlive@gmail.com', 
                          imgProfile: 'https://i.pinimg.com/originals/56/61/81/566181057e964ec49a069783a71ca507.jpg'},
                          { id: 4, Name: 'Oliver Queen', Email: 'youhavefailthiscity@gmail.com', 
                          imgProfile: 'https://fotografias.antena3.com/clipping/cmsimages01/2020/01/22/9224A9F2-46D7-4573-92C2-DF90BE533E38/63.jpg'},
                          { id: 5, Name: 'Dick Grayson', Email: 'nightwing-titans@gmail.com', 
                          imgProfile: 'https://www.latercera.com/resizer/xp_o1EpRTd9fuqzZIfMbElcHPgw=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/PVKVWNP5VNA5HNR2GX364I2EFM.jpg'},
                          { id: 6, Name: 'Hal Jordan', Email: 'greenisnewstyle@gmail.com', 
                          imgProfile: 'https://preview.redd.it/i-would-have-preferred-hal-jordan-to-be-the-protagonist-of-v0-m1xop6yn31y91.jpg?auto=webp&s=5a8e8a72bfafdea27d4683a12d4eddff009ca93f'},
                          { id: 7, Name: 'Hunter Zolomon', Email: 'velocity-9@gmail.com', 
                          imgProfile: 'https://i.pinimg.com/550x/5b/f2/c8/5bf2c8484ea8261da8599fe844f7e336.jpg'},
                          { id: 8, Name: 'eboard thawne', Email: 'imthereverse@gmail.com', 
                          imgProfile: 'https://static.tvtropes.org/pmwiki/pub/images/1525451053_9c6da4a3_efca_46cb_a770_e5f892ed818a_ar608a_0230b.jpg'},
                          { id: 9, Name: 'Kara Zor-El', Email: 'impretty&stronger@gmail.com', 
                          imgProfile: 'https://tv-fanatic-res.cloudinary.com/iu/s---5r6W7q8--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1589577909/kara-zor-el-supergirl-season-5-episode-19.jpg'},
                          { id: 10, Name: 'Laurel Lance', Email: 'Blackinthenight@gmail.com', 
                          imgProfile: 'https://pyxis.nymag.com/v1/imgs/d1b/853/4c99bf2766a983fa5d6bc4e5e616c01222-laurelarms.2x.h473.w710.jpg'}
                ]
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    });
  }

buscar () {
  this.onEnter.emit( this.termino );
  console.log(this.termino);
  
}

teclaPresionada( event: any ){
  this.debouncer.next ( this.termino );
  console.log(this.termino);
  
}

AddMemberAccount( termino: any ) {
  this.invlaidMember = false;
  this.termino = termino;
    this.Members.filter(( Member ) =>  );
    console.log(this.Members);
    
  
  
}


}

