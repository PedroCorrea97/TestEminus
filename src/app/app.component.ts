import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounceTime} from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ShareResourceService } from './services/ShareResourceService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor (private ShareResourceService: ShareResourceService) {

  }

  @Output() onEnter   : EventEmitter < any > = new EventEmitter();
  @Output() onDebounce: EventEmitter < any > = new EventEmitter();


  debouncer: Subject< string > = new Subject();
  textUser: string = '';
  invalidMember: boolean = false;
  showSuggestions: boolean = false;
  accountSuggested: any [] = []
  Members: any [] = []

  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    });
  }

Search () {
  this.onEnter.emit( this.textUser );
  console.log(this.textUser);
  
  }

teclaPresionada( event: any ){
  this.debouncer.next ( this.textUser );
  console.log(this.textUser);
  
  }

AddMember( textUser: string ) {

  this.invalidMember = false;
  this.textUser = textUser;
  
}

  Seggestions( textUser: any ){
    this.invalidMember = false;
    this.textUser = textUser;
    this.showSuggestions = true;
    const SearchMemberS = this.MembersData.filter((Member) => Member.Name === termino);
    if (SearchMemberS){
      this.accountSuggested.push(SearchMemberS)
    }
    }

  SearchSuggested( termino: any ) {
    this.AddMember( termino );
  }
}

// AddMember(termino: any) {
//   this.invalidMember = false;
//   this.termino = termino;
//   const SearchMember = this.MembersData.find((Member) => Member.Name === termino );
//   if (SearchMember) {
//     this.Members.push(SearchMember);
//     } 
//     else
//       (this.invalidMember = true,
//       this.Members = [])
//   }