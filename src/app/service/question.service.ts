import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question/question-dropdown';
import { QuestionBase } from '../question/question-base';
import { TextboxQuestion } from '../question/question-textbox';

import { of } from 'rxjs';
import { RadioQuestion } from '../question/question-radio';
import { CheckboxQuestion } from '../question/question-checkbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        type: 'text',
        value: '',
        required: true,
        minLength: '5',
        maxLength: '10',
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        type: 'text',
        value: '',
        required: true,
        minLength: '',
        
        order:2
      }),

      new TextboxQuestion({
        key: 'EmailAddress',
        label: 'Email',
        type: 'email',
        
        email: '@',
        order: 3
      }),

      new CheckboxQuestion({
        key: 'checkbox',
        label: 'plz select checkbox',
        type: 'checkbox',
        required: true,
        
        order: 4
      }),

      new DropdownQuestion({
        key: 'hoby',
        label: 'Hoby',
        options: [
          {key: 'coding',  value: 'Coding'},
          {key: 'traveling',  value: 'Traveling'},
          {key: 'sleeping',   value: 'Sleeping'},
          {key: 'gamming', value: 'Gamming'}
        ],
        required: true,
        
        order: 5
      }),

      new RadioQuestion({
        key: 'gender',
        label: 'Gender',
        type: 'radio',
        options:[
          {key:'male', value: 'Male'},
          {key: 'female', value: 'Female'}
        ],
        required: true,
        
        order: 6
      }),

      

      new TextboxQuestion({
        key: 'password',
        label: 'Password',
        type: 'password',
        required: true,
       
        order: 7,
      }),

      

    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}