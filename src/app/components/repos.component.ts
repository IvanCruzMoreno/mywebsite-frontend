import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  titulo: string = 'hi pretty flacko';

  constructor() { }

  ngOnInit(): void {
  }

}
