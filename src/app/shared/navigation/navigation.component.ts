import { Component, OnInit } from '@angular/core';
import { LucideAngularModule , House , ChartNetwork , BookText , ArrowRightLeft , User } from 'lucide-angular';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../Services/Auth/auth-services.service';
@Component({
  selector: 'app-navigation',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  providers: [AuthService]
})
export class NavigationComponent implements OnInit {
  readonly HouseIcon = House;
  readonly WorkflowIcon = ChartNetwork;
  readonly BookTextIcon = BookText;
  readonly ArrowRightLeftIcon = ArrowRightLeft;
  readonly UserIcon = User;

  user: any = {};

  constructor(private authServices: AuthService , private router: Router) { }


  ngOnInit(): void {
    this.authServices.getUser().subscribe((res) => {
      this.user = res;
    });
  }

  viewProfile() {
    const id = this.user.id;
    this.router.navigate(['/home/profile', id]);
  }
}
