import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';
import { Service } from './service';

@Injectable()
export class HeroService extends Service {
  private heroesUrl = `${this.baseUrl}/heroes`;

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(response => {
      return response.json() as Hero[]
    })
    .catch(this.handleError);
  };
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, hero, {headers: this.headers})
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    name = name.trim();
    if (!name) {
      return Promise.reject('Invalid property `name`');
    }
    const url = `${this.heroesUrl}/add`;
    const hero = new Hero();
    hero.name = name;
    return this.http
    .post(url, hero, {headers: this.headers})
    .toPromise()
    .then(response => response.json() as Hero)
    .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
