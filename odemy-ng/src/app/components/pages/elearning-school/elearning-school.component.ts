import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-elearning-school',
    templateUrl: './elearning-school.component.html',
    styleUrls: ['./elearning-school.component.scss']
})
export class ElearningSchoolComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    feedbackSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ]
    }

}