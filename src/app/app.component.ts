import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  Members:any = [
		{id:1, Name:'Witney Blessing', email:'WitneyBlessing@gmail.com', imgProfile:'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg'},
		{id:2, Name:'Cherly Green', email:'CherlyGreen@gmail.com', imgProfile:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80'},
		{id:3, Name:'Witney Blessing', email:'WitneyBlessing@gmail.com', imgProfile:'https://images.theconversation.com/files/497982/original/file-20221129-24-6991vn.jpg?ixlib=rb-1.1.0&rect=16%2C8%2C5486%2C3638&q=45&auto=format&w=926&fit=clip'},
	]
  
  AddedMembers = this.Members
  
  @Output() onEnter   : EventEmitter < string > = new EventEmitter();
  @Output() onDebounce: EventEmitter < string > = new EventEmitter();

  debouncer: Subject< string > = new Subject();
  termino: string = '';
  invlaidMember: boolean = false;
  
  ngOnInit() {
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

AddMemberAccount( textUser: string ) {
  this.Members.filter()
}

}
