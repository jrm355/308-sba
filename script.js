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


  // processing data
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

      // Use switch
      switch (true) {
        case !submission.submission: // No submission data
          console.error(`No submission data for learner ID ${submission.learner_id} and assignment ID ${submission.assignment_id}.`);
          hasError = true; // Set the boolean flag
          break;

        default: // on time
          processedScore = submission.submission.score;
          break;
      }

      // Calculate  percentage 
      const percentage = processedScore / assignment.points_possible;

      // Storing in an arry
      let learnerData = processedData.find(d => d.id === submission.learner_id);
      if (!learnerData) {
        learnerData = { id: submission.learner_id, avg: 0 };
        processedData.push(learnerData);
      }

      // Add the percentage score to the learner
      learnerData[submission.assignment_id] = percentage;
    }

    // if there's an error
    if (hasError) {
      return [];
    }

    return processedData;

  } catch (error) {
    console.error(error.message);
    return [];
  }
}

// Testing with the provided data
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);