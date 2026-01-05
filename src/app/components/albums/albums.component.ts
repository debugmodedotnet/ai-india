import { Component } from '@angular/core';
import { IAlbum } from '../../models/album';
import { albums } from '../../dto/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {

  albums: IAlbum[] = albums;

}
