import { Router, ActivationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

// el decorador Injectable(), permite injecar servicios en el constructor
// en otras palabras puede recibir otros servicios por medio del contructor
@Injectable({
    // tree-shaking ( Decorador Inyectable - Después de Angular 6 )
  providedIn: 'root'
})
export class TitleService {

  // Subject: puede manejar multiples subscripciones, ademas es capas de emitir eventos.
  private titleSubject: Subject<string> = new Subject();
  public title$: Observable<string> = this.titleSubject.asObservable();

  constructor(private router: Router,
              private title: Title) {
    this.init();
  }

  init(): void {
    this.router.events.pipe(
      filter((event => event instanceof ActivationEnd)),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    ).subscribe(data => {
      this.title.setTitle(data.title);
      this.titleSubject.next(data.title);
    });

  }
}
