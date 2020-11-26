import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from '@core/models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  backUrl: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const dataName = 'movie';
    const data = this.route.snapshot.data[dataName];
    if (data) {
      this.movie = data.movie;
      this.backUrl = data.backUrl;
    }
  }

  onBack(): void {
    this.router.navigateByUrl(this.backUrl);
  }

}
