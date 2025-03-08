import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgIf, NgFor } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  nombreIngresado: string = '';
  mostrarAdvertencia: boolean = false;

  mostrarBotonCanciones: boolean = false;
  mostrarCanciones: boolean = false;

  mostrarBotonCosas: boolean = false;
  mostrarListaCosas: boolean = false;

  canciones = [
    { titulo: 'UWAIE', url: 'https://youtu.be/spbagny8OjM?list=RDspbagny8OjM' },
    { titulo: 'OTRA VEZ', url: 'https://youtu.be/uhwU5jwIYO4?list=RDspbagny8OjM' },
    { titulo: 'DUELE', url: 'https://www.youtube.com/watch?v=KcUE8Vz-KMQ&list=RDspbagny8OjM&index=4&pp=8AUB' },
    { titulo: 'POR PERRO', url: 'https://www.youtube.com/watch?v=WtE011iVx1Q&list=RDspbagny8OjM&index=6&pp=8AUB' },
    { titulo: 'ENTRE NOSOTROS', url: 'https://youtu.be/sidPTvbTv9o?list=RDspbagny8OjM' },
    { titulo: 'LET ME LOVE YOU', url: 'https://youtu.be/euCqAq6BRa4?list=RDspbagny8OjM' },
    { titulo: 'AMBIENTE', url: 'https://www.youtube.com/watch?v=rzgw0XldTC0&pp=ygUUYW1iaWVudGUgZGUgaiBiYWx2aW4%3D' },
    { titulo: 'ROJO', url: 'https://www.youtube.com/watch?v=_tG70FWd1Ds&pp=ygUNcm9qbyBqIGJhbHZpbg%3D%3D' },
    { titulo: 'VENGANZA', url: 'https://www.youtube.com/watch?v=6gHnmXB4t1k&pp=ygUVdmVuZ2FuemEgbmlja2kgbmljb2xl' },
    { titulo: 'TRAS EL CRISTAL', url: 'https://www.youtube.com/watch?v=yk-gOFrRw3Q&pp=ygUVdHJhcyBlbCBjcmlzdGFsIHBvcnRh' }
  ];

  cosasQueMeGustan = [
    { nombre: 'Pizza', imagen: '/assets/pizza3.png' },
    { nombre: 'Playa', imagen: '/assets/playa2.png' },
    { nombre: 'Fútbol', imagen: '/assets/laliga.jpg' },
    { nombre: 'Música', imagen: '/assets/musica3.jpeg' },
    { nombre: 'Nacional', imagen: '/assets/nacional3.webp' }
  ];

  cosasQueNoMeGustan = [
    { nombre: 'Tráfico', imagen: '/assets/trafico2.jpeg' },
    { nombre: 'Lluvia sin paraguas', imagen: '/assets/lluvia2.jpeg' },
    { nombre: 'Pelea', imagen: '/assets/pelea.jpeg' },
    { nombre: 'Madrugar', imagen: '/assets/madrugar.png' },
    { nombre: 'Atún', imagen: '/assets/atun.jpeg' }
  ];

  enviarNombre() {
    if (!this.nombre.trim()) {
      this.mostrarAdvertencia = true;
      return;
    }
    this.mostrarAdvertencia = false;
    this.nombreIngresado = this.nombre;
    this.mostrarBotonCanciones = true;
    this.mostrarBotonCosas = true;
  }

  toggleCanciones() {
    this.mostrarCanciones = !this.mostrarCanciones;
  }

  toggleListaCosas() {
    this.mostrarListaCosas = !this.mostrarListaCosas;
  }
}
