import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { BookStoreService } from '../../shared/book-store.service';
import { BooksActionTypes } from '../actions/books.actions';
import * as booksActions from '../actions/books.actions';

/**
 * Effects offer a way to isolate and easily test side-effects within your application.
 */
@Injectable()
export class BooksEffects {

  // TODO_10: load book list and dispatch LoadBooksSuccess action
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BooksActionTypes.LoadBooks),
    switchMap(() => this.bs.getAll()),
    map(books => new booksActions.LoadBooksSuccess(books))
  );


  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
  ) { }
}
