import { Directive, ElementRef, inject, input } from "@angular/core";




@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        'click': 'onConfirmLeavePage($event)',
    }
})
export class SafeLinkDirective {
    queryParam = input('myApp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor() {
       console.log('SafeLinkDirective initialized');
    
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');
       

        if(wantsToLeave){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            return
        }

        event.preventDefault(); // Prevent the default action of the link
       }

}