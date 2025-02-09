import {
  Component,
  OnInit,
  Input,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonLabel,
  IonItem,
  IonAlert,
  IonBadge,
  IonCardContent, 
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCard,
  IonText,
  IonIcon,
} from '@ionic/angular/standalone';
import { MovieResult } from '../services/interfaces';
import { MovieService } from '../services/movie.service';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonBackButton,
    IonButtons,
    IonLabel,
    IonItem,
    IonIcon,
   IonAlert,
  //  IonBadge,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonCardSubtitle,
    IonCardHeader,
    IonText,
  ],
})
export class DetailsPage implements OnInit {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);
  public error = null;

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((mov) => {
      console.log(mov);
      this.movie.set(mov);
    });
  }
  constructor() {
    addIcons({cashOutline, calendarOutline});
  }

   
  ngOnInit() {}
}
