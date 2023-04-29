import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb(): any {
    return {
      recipes: [
        {
          id: 1,
          name: 'Spaghetti',
          ingredients: ['a', 'b'],
          instructions: ['1', '2'],
        },
      ],
    };
  }
}
