// https://devdactic.com/ionic-5-calendar-modal/
// https://www.youtube.com/watch?v=_hVdPEmbwA0
import { Component, ViewChild } from "@angular/core";
import { CalendarComponent } from "ionic2-calendar";

import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es-AR";
registerLocaleData(localeEs);

@Component({
    selector: "app-tab1",
    templateUrl: "tab1.page.html",
    styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
    eventSource = [];
    viewTitle: string;

    calendar = {
        mode: "month",
        currentDate: new Date(),
    };
    @ViewChild(CalendarComponent) myCal: CalendarComponent;

    constructor() {}

    next() {
        this.myCal.slideNext();
    }

    back() {
        this.myCal.slidePrev();
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    createRandomEvents() {
        var events = [];
        // for (var i = 0; i < 50; i += 1) {
        //   var date = new Date();
        //   var eventType = Math.floor(Math.random() * 2);
        //   var startDay = Math.floor(Math.random() * 90) - 45;
        //   var endDay = Math.floor(Math.random() * 2) + startDay;
        //   var startTime;
        //   var endTime;
        //   if (eventType === 0) {
        //     startTime = new Date(
        //       Date.UTC(
        //         date.getUTCFullYear(),
        //         date.getUTCMonth(),
        //         date.getUTCDate() + startDay
        //       )
        //     );
        //     if (endDay === startDay) {
        //       endDay += 1;
        //     }
        //     endTime = new Date(
        //       Date.UTC(
        //         date.getUTCFullYear(),
        //         date.getUTCMonth(),
        //         date.getUTCDate() + endDay
        //       )
        //     );
        //     events.push({
        //       title: 'All Day - ' + i,
        //       startTime: startTime,
        //       endTime: endTime,
        //       allDay: true,
        //     });
        //   } else {
        //     var startMinute = Math.floor(Math.random() * 24 * 60);
        //     var endMinute = Math.floor(Math.random() * 180) + startMinute;
        //     startTime = new Date(
        //       date.getFullYear(),
        //       date.getMonth(),
        //       date.getDate() + startDay,
        //       0,
        //       date.getMinutes() + startMinute
        //     );
        //     endTime = new Date(
        //       date.getFullYear(),
        //       date.getMonth(),
        //       date.getDate() + endDay,
        //       0,
        //       date.getMinutes() + endMinute
        //     );
        //     console.info(startTime, endTime)
        //     events.push({
        //       title: 'Event - ' + i,
        //       startTime: startTime,
        //       endTime: endTime,
        //       allDay: false,
        //     });
        //   }
        // }
        var startTime;
        var endTime;
        var date = new Date();
        // var startDay = 17;
        // var endDay = 18;

        startTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            13, 0, 0            
            );

            console.log(startTime)
            console.log(date.getMinutes())

        endTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + 4,
            10
        );

        events.push({
            ident: "1",
            title: "Alquiler - 1",
            startTime: startTime,
            endTime: endTime,
            allDay: false,
        });
        this.eventSource = events;
    }

    onEventSelected(evento) {
        console.log(evento)
    }
    removeEvents() {
        this.eventSource = [];
    }
}
