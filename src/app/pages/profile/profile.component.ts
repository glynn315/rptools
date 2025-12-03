import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth/auth-services.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [AuthService]
})
export class ProfileComponent implements OnInit {
  
  constructor(private AuthServices : AuthService) { }
  
  ngOnInit(): void {
  }

  logout() {
    this.AuthServices.logout().subscribe(() => {
      window.location.reload();
    });
  }
}
