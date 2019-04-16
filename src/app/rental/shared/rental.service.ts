import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {

  private rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment 2",
    city: "New York",
    street: "Time Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedroom: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: "2",
    title: "Central Apartment",
    city: "San Fransisco",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedroom: 2,
    description: "Very nice apartment",
    dailyRate: 12,
    shared: true,
    createdAt: "12/01/2018"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedroom: 2,
    description: "Very nice apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "20/05/2019"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedroom: 9,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: true,
    createdAt: "09/04/2018" 
  }];

  public getRentalById(rentalId: string):Observable<Rental> {
    return new Observable<Rental>((observable) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id == rentalId;
        });

        observable.next(foundRental);
      }, 500)
    })
  } 

  public getRentals(): Observable<Rental[]> {

    const rentalObservable: Observable<Rental[]> = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error("I am Error");
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    return rentalObservable;
  }






}