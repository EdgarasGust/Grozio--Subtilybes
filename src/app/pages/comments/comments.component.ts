import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommentsService } from 'src/app/shared/comments.service';
import { Message } from 'src/app/shared/thank-you/message';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  commentContainerVisible: boolean = false;
  spinner: boolean = false;
  submitted: boolean = false;
  name: any;
  resMessage: Message = {
    heading: '',
    message: '',
  };
  commentSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private commentsService: CommentsService
  ) {}

  ngOnInit(): void {
    this.getAllComments();
    this.formDetails();
  }

  formDetails() {
    this.form = this.fb.group({
      starRating: new FormControl(5),
      name: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    });
  }

  getAllComments() {
    this.commentSubscription = this.commentsService.getComments().subscribe();
  }

  onSubmit() {
    this.spinner = true;
    this.postDetails();
    this.form.reset();
  }

  postDetails() {
    this.name = this.form.value.name;
    this.commentsService.postComments(this.form.value).subscribe({
      next: (res) => {
        this.submitted = true;
        this.resMessage = {
          heading: 'Ačiū už Jūsų paliktą atsiliepimą',
          message: 'Atsiliepimas sėkmingai patalpintas',
        };
        this.spinner = false;
        this.getAllComments();
      },
      error: (err) => {
        console.error(err.message);
        this.submitted = true;
        this.resMessage = {
          heading: 'Įvyko klaida.',
          message:
            'Tinklo klaida, bandykite dar karta. Atsiprašome už nepatogumus.',
        };
      },
    });
  }

  onClose() {
    this.commentContainerVisible = false;
    this.submitted = false;
    this.name = '';
    this.resMessage = {
      heading: '',
      message: '',
    };
  }

  ngOnDestroy(): void {
    this.commentSubscription.unsubscribe();
  }
}
