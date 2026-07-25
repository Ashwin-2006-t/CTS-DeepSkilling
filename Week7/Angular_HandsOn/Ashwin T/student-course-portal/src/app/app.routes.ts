import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';

export const routes = [
{
 path:'courses',
 loadComponent:()=>import('./pages/course-list/course-list')
 .then(m=>m.CourseList)
}
];