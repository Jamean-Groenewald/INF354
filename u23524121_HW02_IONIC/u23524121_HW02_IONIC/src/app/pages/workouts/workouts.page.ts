import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: false,
})

export class WorkoutsPage implements OnInit 
{
  workoutPrograms: any[] = []; //Array to store workout programs

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() 
  {
    this.workoutPrograms = this.workoutService.getWorkoutPrograms(); //Fetch workout programs from the service
  }
}
