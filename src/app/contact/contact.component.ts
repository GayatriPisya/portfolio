import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public isSending: boolean = false; 
  public confirmationMessage: string | null = null;

  constructor() {
    emailjs.init('u9ilDbudfHKFmiGQT'); 
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.isSending = true; // Set sending flag to true

    emailjs.sendForm('service_052j5yu', 'template_y4gdfaz', e.target as HTMLFormElement, 'u9ilDbudfHKFmiGQT')
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', result);
        this.confirmationMessage = "Your message has been sent successfully!"; // Set confirmation message
        (e.target as HTMLFormElement).reset(); // Reset the form
      }, (error) => {
        console.error('Error sending email:', error);
        this.confirmationMessage = "There was an error sending your message. Please try again."; // Set error message
      })
      .finally(() => {
        this.isSending = false; // Reset sending flag after process is complete
      });
  }
}
