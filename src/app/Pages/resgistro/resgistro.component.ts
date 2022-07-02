import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent implements OnInit {
  //private fb:FormBuilder= new formBuilder()
  myForm:FormGroup

  constructor(
    private fb:FormBuilder
  ) {
    this.myForm= this.fb.group({
      nombre:["", [Validators.required, Validators.minLength(2)]],
      correo:["", [Validators.required]],
      clave:["", [Validators.minLength(6)]]
    })
  }

  registrarse(){
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
