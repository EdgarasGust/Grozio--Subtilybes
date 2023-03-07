import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactFormService } from 'src/app/shared/contact-form.service';
import { Message } from 'src/app/shared/thank-you/message';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss'],
})
export class GiftCardComponent implements OnInit {
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
    tel: new FormControl('', [Validators.required]),
    clientName: new FormControl('', [Validators.required]),
    service: new FormControl('', [Validators.required]),
    coupon: new FormControl('', [Validators.required]),
    question: new FormControl(''),
    privacy: new FormControl('', [Validators.requiredTrue]),
  });
  constructor(
    private fb: FormBuilder,
    private formService: ContactFormService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.name = this.form.value.username;
    this.isLoading = true;
    this.sendForm();
    this.form.reset();
  }

  sendForm() {
    this.formService.sendFormDetails(this.form.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.submitted = true;
        this.resMessage = {
          heading: 'Ačiū už Jūsų žinutę!',
          message: 'Mes su Jumis susisieksime, kaip galėdami greičiau.',
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
    this.submitted = false;
    this.name = '';
    this.resMessage = {
      heading: '',
      message: '',
    };
    this.router.navigate(['/']);
  }
}
