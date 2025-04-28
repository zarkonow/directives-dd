import { Directive } from "@angular/core";




@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        'click': 'onConfirmLeavePage($event)',
    }
})
export class SafeLinkDirective {

    constructor() {
       console.log('SafeLinkDirective initialized');
    
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Are you sure you want to leave this page?');

        if(wantsToLeave){
            const address = (event.target as HTMLAnchorElement).href;
            (event.target as HTMLAnchorElement).href = address + '?from=myapp';
            return
        }

        event.preventDefault(); // Prevent the default action of the link
       }

}