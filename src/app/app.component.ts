import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuarios/usuario';
import { UsuarioService } from './services/usuarios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-cadUsuario';
  usuarios?: Usuario[];
  currentUsuario?: Usuario;
  currentIndex = -1;
  id = '';

  constructor(private usuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.retrieveUsuario();
  }


  retrieveUsuario(): void {
    this.usuarioService.getAll()
      .subscribe(
        data => {
          this.usuarios = data;
        },
        error => {
          console.log(error);
        });
  }
  searchId(): void {
    this.currentUsuario = undefined;
    this.currentIndex = -1;

    this.usuarioService.get(this.id)
      .subscribe(
        data => {
          this.currentUsuario = data;
        },
        error => {
          console.log(error);
        });
  }

  setActiveAllocation(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;
    console.log(usuario);
  }



}


