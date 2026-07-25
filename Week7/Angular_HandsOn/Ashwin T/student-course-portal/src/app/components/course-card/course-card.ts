import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({

selector:'app-course-card',

imports:[
 CommonModule,
 CreditLabelPipe
],

templateUrl:'./course-card.html',

styleUrl:'./course-card.css'

})


export class CourseCard {


@Input()
course:any;


@Output()
enrollRequested =
new EventEmitter<number>();


isExpanded=false;



get cardClasses(){

return {

'card--enrolled':
this.course.enrolled,

'card--full':
this.course.credits>=4,

'expanded':
this.isExpanded

};

}



toggleDetails(){

this.isExpanded=!this.isExpanded;

}


}