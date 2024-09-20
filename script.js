// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    // assignment info array of objects
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

// function getLearnerData(course, , submissions) {
//   // here, we would process this data to achieve the desired result.
//   // const result = [
//   //   {
//   //     id: 125,
//   //     avg: 0.985, // (47 + 150) / (50 + 150)
//   //     1: 0.94, // 47 / 50
//   //     2: 1.0 // 150 / 150
//   //   },
//   //   {
//   //     id: 132,
//   //     avg: 0.82, // (39 + 125) / (50 + 150)
//   //     1: 0.78, // 39 / 50
//   //     2: 0.833 // late: (140 - 15) / 150
//   //   }
  // ];

  function getLearnerData(course, ag, submissions) {
    try {
   //validation to check course_id and courseinfo Id don't match
      if (ag.course_id !== course.id) {
        throw new Error('Invalid ');
      }
  
      ag.assignments.forEach(assignment => {
   // checking to see if points are positive
        if (typeof assignment.points_possible !== 'number' || assignment.points_possible <= 0) {
          throw new Error(`Invalid`);
        }
      });
  
      // console.log("working so far");
      // //abt, always be testing
      // //return an array in error
      // return []
  
  //   } catch (error) {
  //     console.error(error);
  //     //handling errors
  //   }
  // }

//processing
    const processedData = [];
    let hasError = false; 

    // looping through submissions
    for (let i = 0; i < submissions.length; i++) {
      const submission = submissions[i];
      const assignment = ag.assignments.find(a => a.id === submission.assignment_id);

      // Validatation
      // if (!assignment) {
      //   console.error(`${submission.assignment_id} not found.`);
      //   hasError = true; // boolean flag
      //   continue; //skipping 
      // }
// checking to see if assignments are due and skipping
      if (new Date(assignment.due_at) > new Date()) {
        console.log(`Assignment ID ${assignment.id} is not yet due. Skipping.`);
        continue; // Skip this assignment if it's not due yet
      }

      let processedScore = submission.submission.score;

      // handling processing
      switch (true) {
        case !submission.submission: // No submission 
          console.error(`No submission learner ID ${submission.learner_id} and assignment ID ${submission.assignment_id}.`);
          hasError = true; // boolean 
          break;
//late submission
        case submission.submission.submitted_at > assignment.due_at: 
          console.log(`Late submission for learner  ${submission.learner_id} on assignment ${submission.assignment_id}.`);
          processedScore = submission.submission.score * 0.9; // Deduct 10%
          break;

        default: // On-time submission
          processedScore = submission.submission.score;
          break;

      }
      // Calculate percentage 
      const percentage = processedScore / assignment.points_possible;

      // Storing data in an array
      let learnerData = processedData.find(d => d.id === submission.learner_id);
      if (!learnerData) {
        learnerData = { id: submission.learner_id, avg: 0 };
        processedData.push(learnerData);
      }

      // Adding percentage and learner data/ keys added using assignment_ID as key
      learnerData[submission.assignment_id] = percentage;
      
    }
// getting weighted average for each learner
    processedData.forEach(learner => {
      let totalScore = 0;
      let totalPoints = 0;

      ag.assignments.forEach(assignment => {
        if (learner.hasOwnProperty(assignment.id)) {
          totalScore += learner[assignment.id] * assignment.points_possible;
          totalPoints += assignment.points_possible;
        }
      });

      // Calculate and storing average
      learner.avg = parseFloat((totalScore / totalPoints).toFixed(3)); // Rounding 
    });

    // Error return
    if (hasError) {
      return 'you messed up';
    }

    return processedData;

  } catch (error) {
    console.error(error.message);
    return 'you.re fine';
  }
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

  


  