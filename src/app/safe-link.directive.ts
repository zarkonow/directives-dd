import { Directive } from "@angular/core";




@Directive({
    selector: 'a[appSafeLink]',
    standalone: true
})
export class SafeLinkDirective {

    constructor() {
       console.log('SafeLinkDirective initialized');
        // This directive is empty for now, but you can add functionality later if needed.
    }

}