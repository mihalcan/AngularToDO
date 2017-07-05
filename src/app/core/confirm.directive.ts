import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appConfirm]'
})
export class ConfirmDirective implements OnInit {
    private promptText = 'Are you sure want to perform this action?';
    @Input() set appConfirm(value: string){
        if (!!value) {
            this.promptText = value;
        }
    }
    private element: HTMLElement;

    constructor(elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }

    ngOnInit(): void {
        this.element.addEventListener('mousedown', (e) => {
            if (!window.confirm(this.promptText)) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            } else {
                this.element.dispatchEvent(new Event('click'));
            }
        });
    }
}
