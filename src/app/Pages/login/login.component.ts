import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
