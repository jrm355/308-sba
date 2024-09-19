const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
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
    //validate the  data
    if (ag.course_id !== course.id) {
      throw new Error('Invalid input: AssignmentGroup does not belong to the provided CourseInfo.');
    }
    // Get current date to filter 
    const currentDate = new Date();
    // Create a map 
    const assignmentMap = new Map();
    ag.assignments.forEach(assignment => {
      // Ensure points are positive
      if (typeof assignment.points_possible !== 'number' || assignment.points_possible <= 0) {
        throw new Error(`Invalid points_possible for assignment with ID ${assignment.id}.`);
      }
      // Include assignments that are due
      if (new Date(assignment.due_at) <= currentDate) {
        assignmentMap.set(assignment.id, assignment);
      }
    });

    const learnerMap = new Map(); // To accumulate data for each learner
    submissions.forEach(submissionData => {
      const { learner_id, assignment_id, submission } = submissionData;
      // Check if the assignment is valid 
      const assignment = assignmentMap.get(assignment_id);
      if (!assignment) {
        // skip 
        return;
      }
      // Initialize learner's record if not already present
      if (!learnerMap.has(learner_id)) {
        learnerMap.set(learner_id, { id: learner_id, totalScore: 0, totalPossible: 0, assignments: {} });
      }
      const learnerRecord = learnerMap.get(learner_id);
      // Calculate percentage
      let score = submission.score;
      const pointsPossible = assignment.points_possible;
      // Check if late
      if (new Date(submission.submitted_at) > new Date(assignment.due_at)) {
        // Deduct 10% for late submission
        score -= pointsPossible * 0.1;
      }
      // Calculate the percentage score for the assignment
      const percentage = Math.max(0, (score / pointsPossible)); // Value between 0 and 1
      //total point
      learnerRecord.totalScore += Math.max(0, score); // Ensure no negative scores
      learnerRecord.totalPossible += pointsPossible;
      // store as a key
      learnerRecord.assignments[assignment_id] = percentage;
    });
    // calculate weight
    const result = [];
    learnerMap.forEach(learnerRecord => {
/// calculate weighted average
      learnerRecord.avg = learnerRecord.totalPossible > 0 ? (learnerRecord.totalScore / learnerRecord.totalPossible) : 0;
      // Prepare the result object
      const { id, avg, assignments } = learnerRecord;
      const learnerResult = { id, avg, ...assignments };
      // Add the learner's result to the results array
      result.push(learnerResult);
    });
  ""

// const result = getLearnerData(CourseInfo, /AssignmentGroup, LearnerSubmissions);
// console.log(result)
