import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent
{
  contactForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$") ,Validators.nullValidator]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern("^[a-zA-Z]+$") ,Validators.nullValidator]),
      email : new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$") ,Validators.nullValidator]),
      plan : new FormControl(''),
      message : new FormControl('', [Validators.required, Validators.maxLength(256)]),
    }
  )
  
  
}
