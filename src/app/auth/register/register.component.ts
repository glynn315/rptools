import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { ProfileServices } from '../../Services/Profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Models/User/user.model';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [ProfileServices]
})
export class RegisterComponent implements OnInit {

  constructor(
    private UserServices: ProfileServices, 
    private actRouter: ActivatedRoute
  ) {}

  idParam: number = 0 ;

  userInformation: User | null = null;

  fullName = '';
  contact = '';
  maskedContact = '';

  enteredContact = '';
  contactVerified = false;

  otpSent = false;
  otp = '';
  countdown = 0;
  timerInterval: any;

  ngOnInit(): void {
    this.idParam =  Number(this.actRouter.snapshot.paramMap.get('s_bpartner_employee_id'));
    this.displayUserinformation();
  }

  displayUserinformation() {
    this.UserServices.displayProfile(this.idParam).subscribe((data) => {
      this.userInformation = data;
      this.fullName = `${this.userInformation.firstname} ${this.userInformation.lastname}`;
      this.contact = this.userInformation.contact_no?.toString() || '';
      this.maskedContact = this.contact.replace(/.(?=.{4})/g, '*');
    });
  }

  verifyContact() {
    this.contactVerified = (this.enteredContact === this.contact);
  }

  sendOTP() {
    this.otpSent = true;
    this.UserServices.sentOTP(this.idParam).subscribe();
    this.countdown = 300;

    this.startCountdown();
    console.log("OTP has been sent.");
  }

  startCountdown() {
    this.timerInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  submitOTP() {
    console.log("Entered OTP:", this.otp);

  }
}
