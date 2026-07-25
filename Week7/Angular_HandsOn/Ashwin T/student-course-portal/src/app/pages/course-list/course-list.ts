import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';


@Component({
  selector: 'app-course-list',
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {


  isLoading = true;


  selectedCourseId = 0;


  courses = [

    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4,
      gradeStatus:'passed',
      enrolled:false
    },

    {
      id:2,
      name:'Java',
      code:'JAVA101',
      credits:3,
      gradeStatus:'failed',
      enrolled:true
    },

    {
      id:3,
      name:'.NET',
      code:'NET101',
      credits:4,
      gradeStatus:'pending',
      enrolled:false
    }

  ];



ngOnInit(){

  console.log("CourseList Loaded");

  console.log("Initial loading:", this.isLoading);


  setTimeout(()=>{

    this.isLoading=false;

    console.log("Loading completed:", this.isLoading);

  },5000);

}



  trackByCourseId(index:number, course:any){

    return course.id;

  }



  onEnroll(id:number){

    console.log(
      "Enrolling course : "+id
    );

    this.selectedCourseId=id;

  }


}