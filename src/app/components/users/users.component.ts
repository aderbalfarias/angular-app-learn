import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    users: User[];
    showExtended: boolean = true;
    loaded: boolean = false;
    enableAdd: boolean = true;
    currentClasses = {};
    currentStyles = {};

    constructor() { }

    ngOnInit() {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Doe',
                age: 70,
                address: {
                    street: '50 Main st',
                    city: 'Boston',
                    state: 'MA'
                },
                image: '../../assets/images/img1.jpg',
                isActive: true
            },
            {
                firstName: 'Kevin',
                lastName: 'Johnson',
                age: 34,
                address: {
                    street: '20 School st',
                    city: 'Lynn',
                    state: 'MA'
                },
                image: '../../assets/images/img2.jpg',
                isActive: false
            },
            {
                firstName: 'Karen',
                lastName: 'Williams',
                age: 26,
                address: {
                    street: '55 Mill st',
                    city: 'Miami',
                    state: 'FL'
                },
                image: '../../assets/images/img3.jpg',
                isActive: true
            }
        ];

        this.loaded = true;

        // this.addUser({
        //   firstName: 'David',
        //   lastName: 'Jackson'
        // });

        this.setCurrentClasses();
        this.setCurrentStyles();
    }

    addUser(user: User) {
        this.users.push(user);
    }

    setCurrentClasses() {
        this.currentClasses = {
            'btn-success': this.enableAdd,
            'big-text': this.showExtended
        }
    }

    setCurrentStyles() {
        this.currentStyles = {
            'padding-top': this.showExtended ? '0' : '40px',
            'font-size': this.showExtended ? '' : '40px'
        }
    }
}
