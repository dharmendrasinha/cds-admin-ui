import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-advpurposetypeedit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.creatForm();
  }

  creatForm() {
    this.editForm = this.fb.group({
      id: [this.id],
      purposeTypeCode: [null],
      purposeTypeDescription: [null]
    });
  }

  submitForm() {
    const postObj = this.editForm.getRawValue();

    // eslint-disable-next-line no-console
    console.log(postObj);
  }
}
