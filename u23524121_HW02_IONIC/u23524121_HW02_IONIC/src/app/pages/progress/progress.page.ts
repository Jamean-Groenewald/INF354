import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: false,
})

export class ProgressPage implements OnInit 
{
  completedWorkouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() 
  {
    this.loadProgress();
  }

  loadProgress() 
  {
    const completedIds = this.workoutService.getCompletedWorkouts();
    const allWorkouts = this.workoutService.getWorkoutPrograms();
    this.completedWorkouts = allWorkouts.filter(workout => completedIds.includes(workout.id));
  }

  resetProgress() 
  {
    this.workoutService.resetCompletedWorkouts();
    this.completedWorkouts = [];
    
    alert('Progress has been reset!');
  }
}
