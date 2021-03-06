import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.toggleSidebarForMe.emit();
  }
  logout(){
    this.authService.logout();
  }

}
