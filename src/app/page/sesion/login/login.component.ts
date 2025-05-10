import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario enviado');
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
    }
  }

  loginWithGoogle() {
    console.log('Iniciar sesión con Google');
    // Aquí puedes integrar el login con Google utilizando su SDK.
  }

  loginWithFacebook() {
    console.log('Iniciar sesión con Facebook');
    // Aquí puedes integrar el login con Facebook utilizando su SDK.
  }
}
