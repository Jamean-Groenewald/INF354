import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class WorkoutService 
{
  private workoutPrograms = [
    {
      id: 1,
      name: 'Weight Loss',
      description: 'A program focused on burning calories and losing weight.',
      exercises: ['Running', 'Cycling', 'Jump Rope'],
      duration: '45 minutes',
      equipment: ['Treadmill', 'Jump Rope'],
    },
    {
      id: 2,
      name: 'Muscle Gain',
      description: 'A program designed to build muscle mass and strength.',
      exercises: ['Bench Press', 'Deadlift', 'Squats'],
      duration: '60 minutes',
      equipment: ['Barbell', 'Dumbbells'],
    },
    {
      id: 3,
      name: 'Cardio',
      description: 'A program to improve cardiovascular health and endurance.',
      exercises: ['Treadmill', 'Rowing', 'Swimming'],
      duration: '30 minutes',
      equipment: ['Treadmill', 'Rowing Machine'],
    },
    {
      id: 4,
      name: 'Yoga for Flexibility',
      description: 'A yoga program to improve flexibility and reduce stress.',
      exercises: ['Downward Dog', 'Child’s Pose', 'Warrior Pose'],
      duration: '40 minutes',
      equipment: ['Yoga Mat'],
    },
    {
      id: 5,
      name: 'HIIT (High-Intensity Interval Training)',
      description: 'A high-intensity workout to burn calories quickly.',
      exercises: ['Burpees', 'Mountain Climbers', 'Jump Squats'],
      duration: '20 minutes',
      equipment: ['None'],
    },
    {
      id: 6,
      name: 'Core Strength',
      description: 'A program to strengthen your core muscles.',
      exercises: ['Plank', 'Russian Twists', 'Leg Raises'],
      duration: '30 minutes',
      equipment: ['Yoga Mat'],
    },
    {
      id: 7,
      name: 'Upper Body Strength',
      description: 'A program to build strength in your upper body.',
      exercises: ['Push-ups', 'Pull-ups', 'Overhead Press'],
      duration: '50 minutes',
      equipment: ['Pull-up Bar', 'Dumbbells'],
    },
    {
      id: 8,
      name: 'Lower Body Strength',
      description: 'A program to strengthen your legs and lower body.',
      exercises: ['Lunges', 'Step-ups', 'Leg Press'],
      duration: '45 minutes',
      equipment: ['Dumbbells', 'Leg Press Machine'],
    },
    {
      id: 9,
      name: 'Full Body Workout',
      description: 'A balanced workout targeting all major muscle groups.',
      exercises: ['Squats', 'Push-ups', 'Deadlifts'],
      duration: '60 minutes',
      equipment: ['Barbell', 'Dumbbells'],
    },
    {
      id: 10,
      name: 'Stretching and Recovery',
      description: 'A program to improve flexibility and aid recovery.',
      exercises: ['Hamstring Stretch', 'Quad Stretch', 'Shoulder Stretch'],
      duration: '25 minutes',
      equipment: ['Yoga Mat'],
    },
  ];

  constructor() {}

  //Get all workout programs
  getWorkoutPrograms() 
  {
    return this.workoutPrograms;
  }

  //Mark a workout as completed
  markWorkoutAsCompleted(workoutId: number) 
  {
    const completedWorkouts = this.getCompletedWorkouts();

    if(!completedWorkouts.includes(workoutId)) 
    {
      completedWorkouts.push(workoutId);
      localStorage.setItem('completedWorkouts', JSON.stringify(completedWorkouts));
    }
  }

  //Get completed workouts
  getCompletedWorkouts(): number[] 
  {
    return JSON.parse(localStorage.getItem('completedWorkouts') || '[]');
  }

  //Reset completed workouts
  resetCompletedWorkouts() 
  {
    localStorage.removeItem('completedWorkouts');
  }
}
