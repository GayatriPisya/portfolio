import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  responseMessage: string = '';
  isSending = false;

  constructor(private http: HttpClient) {}

  sendEmail(event: Event) {
    event.preventDefault();

    const emailPayload = {
      service_id: 'service_052j5yu', 
      template_id: 'template_sk5z41q', 
      user_id: 'vtOxnCH0GzmsGRiaQ', 
      template_params: {
        from_name: this.contactData.name,
        from_email: this.contactData.email,
        subject: this.contactData.subject,
        message: this.contactData.message,
      },
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer MQwVOmZDCvfJtzY8T8cgA', 
    });

    this.isSending = true;

    this.http
      .post('https://api.emailjs.com/api/v1.0/email/send', emailPayload, {
        headers: headers,
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          this.responseMessage = 'Your message has been sent! Thank you for reaching out.';
          this.resetForm();
          this.isSending = false; // Re-enable button after success
        },
        (error) => {
          console.error('Email sending error:', error);
          this.responseMessage = 'Oops! Something went wrong. Please try again later. Error: ' + error.error; // Log detailed error
          this.isSending = false; // Re-enable button after failure
        }
      );
  }

  resetForm() {
    this.contactData = { name: '', email: '', subject: '', message: '' }; // Reset form data
  }
}
