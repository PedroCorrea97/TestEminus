import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { debounceTime} from 'rxjs/operators';
import { Subject } from 'rxjs';

import { MService } from './services/ResourceM.service';
import { Country } from './member.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
`
]
})

export class AppComponent implements OnInit{

  @Output() onEnter   : EventEmitter < string > = new EventEmitter();
  @Output() onDebounce: EventEmitter < string > = new EventEmitter();
	debouncer: Subject< string > = new Subject();

  textUser: string = '';
  invalidMember: boolean = false;
  @Input () paises: Country[] = [];

  membersn: Country[] = [];
  membersSuggested: Country[] = [];
  showSuggestions: boolean = false;

  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    });
  }

  search() {
    this.onEnter.emit( this.textUser );
    console.log(this.textUser);
    
  }

  keyPressed( event: any ){
    this.debouncer.next ( this.textUser );
    console.log(this.textUser);
    
    
  }
  constructor ( private MService: MService ) {}

  searchM( textUser: any ) {

    this.invalidMember = false;
    this.textUser = textUser;

    this.MService.buscarPais( textUser )
      .subscribe({
        next: (paises) => {
        console.log(paises);
        this.membersn = paises;

      },
      error: (err) => {
        this.invalidMember = true;
        this.membersn = [];
      }
      });
    
  }

  suggestions( textUser: any) {
    this.invalidMember = false;
    this.textUser = textUser;
    this.showSuggestions = true;

    this.MService.buscarPais ( textUser )
      .subscribe({ next: (paises) => {this.membersSuggested = paises.splice(0,3)},
                   error: (err) => {this.membersSuggested = []}} );
  }

  searchSuggested ( textUser:string ) {
    this.searchM( textUser );
  }
  // DeleteMember(member:any){
	// 	this.members.splice(this.members.indexOf(member),1)
	// }
}