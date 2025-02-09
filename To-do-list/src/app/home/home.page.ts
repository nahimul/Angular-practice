import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonList,
  IonInput,
  IonLabel,
  IonGrid,
} from '@ionic/angular/standalone';

import { ListArray } from '../services/interfaces';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',

  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonList,
    IonLabel,
    [ReactiveFormsModule],
  ],
})
export class HomePage {
  public error = null;
  public todos: ListArray[] = [];
  public countDo = 0;
  public toUpdate = -1;
  public inValue = '';

  public todoForm: FormGroup = new FormGroup({
    doType: new FormControl('', [Validators.required]),
  });

  constructor() {}
  addTodo(event: Event) {
    const formValue = this.todoForm.value;
    console.log(formValue.doType);

    if (this.inValue) {
      const index = this.toUpdate;

      if (formValue.doType) {
        this.todos[index] = {
          doType: formValue.doType,
          id: this.todos[this.toUpdate].id,
        };
        this.todoForm.reset();
      } else {
        console.log('Do Required!');
      }

      this.inValue = '';
      this.toUpdate = -1;
    } else {
      if (formValue.doType) {
        this.todos.push({ doType: formValue.doType, id: this.countDo });
        this.countDo++;
        this.todoForm.reset();
      } else {
        console.log('Do Required!');
      }
    }
    event.preventDefault();
  }

  updateTodo(item: ListArray) {
    this.toUpdate = this.todos.indexOf(item);
    this.inValue = item?.doType;
    this.todoForm.setValue({
      doType: this.inValue,
    });
    console.log(this.inValue);
  }

  deleteDo(item: ListArray) {
    const index = this.todos.indexOf(item);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
