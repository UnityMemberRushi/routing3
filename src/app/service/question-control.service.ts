import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../question/question-base';

@Injectable()
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '', Validators.required) 
                                              ? new FormControl(question.value || '', Validators.minLength(5))
                                              : new FormControl(question.value || '', Validators.minLength(5))
                                              ? new FormControl(question.value || '', Validators.email)
                                              : new FormControl(question.value || '', Validators.email)
                                              ? new FormControl(question.value || '', Validators.maxLength(10))
                                              : new FormControl(question.value || '', Validators.maxLength(10))
                            // question.email ? new FormControl(question.value || '', Validators.email) 
                            //                : new FormControl(question.value || '', Validators.email)
      // group[question.key] = new FormControl(question.value || '', Validators.email)                               

      // group[question.key] = question.email ? new FormControl(question.value || '', Validators.email)
      //                                      : new FormControl(question.value || '', Validators.required),

      // group[question.key] = question.minLength ? new FormControl(question.value || '', Validators.minLength(5))
      //                                          : new FormControl(question.value || '', Validators.required),
      // group[question.key] = question.maxLength ? new FormControl(question.value || '', Validators.maxLength(10))
      //                                          : new FormControl(question.value || '', Validators.required)
    });

    return new FormGroup(group);
  }
}