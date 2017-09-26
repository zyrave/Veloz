import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isToggled: boolean = false;

    onToggle() {
        console.log(this.isToggled);
        this.isToggled = !this.isToggled;
    }
}
