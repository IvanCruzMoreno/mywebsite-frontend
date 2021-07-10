import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Email } from '../models/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  public entity: Email = new Email();
  private redirect: string = "/intro";

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit(): void {
  }

  submitEmail(): void {
    this.emailService.sendEmail(this.entity).subscribe( emailR => {
      if(emailR != null){
        Swal.fire('Email sent successfully', 'In a moment I will contact you', 'success');
        this.router.navigate([this.redirect]);
      }else{
        Swal.fire('Email with erros', 'Try again', 'error');
      }
    }, 
    error => {
      Swal.fire('Email with errors', 'Try again', 'error');
    });
  }
}
