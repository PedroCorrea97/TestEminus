import { Component, EventEmitter, Output,Input, OnInit } from '@angular/core';
import { debounceTime} from 'rxjs/operators';
import { Subject } from 'rxjs';

import { MemberService } from './services/Member.service';
import { Member } from './member.interface';

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

  textUser: string = '';
  members: Member[] = [];
  membersSuggested: Member [] = [];
  invalidMember: boolean = false;
  theresMembers: boolean = false;
  showSuggestions: boolean = false;
  debouncer: Subject< string > = new Subject();

  constructor ( private MemberService: MemberService ) { }

  ngOnInit() {
    this.debouncer
    .pipe( debounceTime (300) )
    .subscribe( valor => {
      console.log(valor);
      
    });
  }
  suggestions( textUser: string ){
    this.debouncer.next ( textUser );
    this.invalidMember = false;
    this.MemberService.searhcMember(textUser)
      .subscribe({
        next: (members) =>{
        console.log(members);
        this.membersSuggested = members
        this.membersSuggested = members.splice(0,4)
      },
    });
  }

  searchMember(textUser: string) {
    console.log(this.textUser);
    this.invalidMember = false;
    this.textUser = textUser;
    this.MemberService.searhcMember( textUser )
      .subscribe({
        next: (members) => {
        console.log(members);
        this.members = members.splice(0,1);
        this.theresMembers = true;
      },
      error: (err) => {
        this.invalidMember = true;
        this.members = [];
      }
      });
  }

  DeleteMember(member:any){
	this.members.splice(this.members.indexOf(member),1)
	}
}