import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationModel } from '../models/reservation.model';
import { Subscription } from 'rxjs';
import { ReservationService } from '../old/reservation.service';
import * as moment from 'moment';
import { InvoiceService } from '../old/invoice.service';

@Component({
    selector: 'cow-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit, OnDestroy {

    reservation: ReservationModel;
    reservationSubscription: Subscription;

    constructor(private route: ActivatedRoute, private reservationService: ReservationService, public invoiceService: InvoiceService) {
        moment.locale('fr');
    }

    displayDate(date: Date) {
        return moment(date).format('Do MMMM YYYY');
    }

    ngOnInit() {
        this.reservationSubscription = this.reservationService.get(+this.route.snapshot.paramMap.get('id')).subscribe(reservation => this.reservation = reservation);
    }

    ngOnDestroy() {
        if (this.reservationSubscription) {
            this.reservationSubscription.unsubscribe();
        }
    }
}
