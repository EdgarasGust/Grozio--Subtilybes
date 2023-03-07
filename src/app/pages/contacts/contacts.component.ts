import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { ContactFormService } from '../../shared/contact-form.service';
import { Message } from 'src/app/shared/thank-you/message';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  name: any = '';
  submitted: boolean = false;
  isLoading: boolean = false;
  resMessage: Message = {
    heading: '',
    message: '',
  };

  form = this.fb.group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl(''),
    service: new FormControl('', [Validators.required]),
    question: new FormControl('', [Validators.required]),
    privacy: new FormControl('', [Validators.requiredTrue]),
  });

  zoom: number = 15;
  lat: number = 54.89682;
  lng: number = 23.89139;

  constructor(
    private router: Router,
    private formService: ContactFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.name = this.form.value.username;
    this.isLoading = true;
    this.submitted = true;
    this.sendForm();
    this.form.reset();
  }
  sendForm() {
    this.formService.sendFormDetails(this.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.submitted = true;
        this.resMessage = {
          heading: 'Ačiū už jūsų žinutę!',
          message: 'Atsakysime į jūsū klausimus, kaip galėdami greičiau.',
        };
      },
      error: (err) => {
        this.isLoading = false;
        this.submitted = true;
        console.error(err.message);
        this.resMessage = {
          heading: 'Įvyko klaida.',
          message:
            'Tinklo klaida, bandykite dar karta. Atsiprašome už nepatogumus.',
        };
      },
    });
  }

  onClose() {
    this.name = '';
    this.submitted = false;
    this.resMessage = {
      heading: '',
      message: '',
    };
    this.router.navigate(['/']);
  }
}
