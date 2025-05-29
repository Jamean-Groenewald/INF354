import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
  standalone: false,
})

export class WorkoutDetailsPage implements OnInit 
{
  workout: any;
  isCompleted: boolean = false;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {}

  ngOnInit() 
  {
    const workoutId = +this.route.snapshot.paramMap.get('id')!;
    
    this.workout = this.workoutService.getWorkoutPrograms().find(w => w.id === workoutId);

    this.isCompleted = this.workoutService.getCompletedWorkouts().includes(workoutId); //Check if the workout is already completed
  }

  markAsCompleted() 
  {
    this.workoutService.markWorkoutAsCompleted(this.workout.id);
    this.isCompleted = true;

    alert('Workout marked as completed!');
  }
}
