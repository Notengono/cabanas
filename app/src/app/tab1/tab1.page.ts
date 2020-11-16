import { Component, ViewChild } from "@angular/core";
import { CalendarComponent } from "ionic2-calendar";

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
}
