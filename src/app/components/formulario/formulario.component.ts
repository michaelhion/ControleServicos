import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Formulario } from 'src/app/models/Formulario';

type Keyed<T> = {
  [key: string]: T;
};

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() fields: Formulario[]= [];

  form!: FormGroup;
  @Output() submitForm: EventEmitter<any> = new EventEmitter(); 


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    const formGroup: Keyed<any> = {};
    if(this.fields){
      for (const field of this.fields) {
        if (field.type === 'select') {
          formGroup[field.name] = ['']; // Deixe o valor vazio inicialmente
        } else {
          formGroup[field.name] = ['', field.validators ?? []];
        }
      }
    }
    

    this.form = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
 
}
