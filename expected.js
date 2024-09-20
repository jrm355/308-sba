// // given answers 
// function getLearnerData(course, ag, submissions) {
//     //     // here, we would process this data to achieve the desired result.
//     //     const result = [
    //       {
    //         id: 125,
    //         avg: 0.985, // (47 + 150) / (50 + 150)
    //         1: 0.94, // 47 / 50
    //         2: 1.0 // 150 / 150
    //       },
    //       {
    //         id: 132,
    //         avg: 0.82, // (39 + 125) / (50 + 150)
    //         1: 0.78, // 39 / 50
    //         2: 0.833 // late: (140 - 15) / 150
    //       }
    //     ];
      
//     //     return result;
//     //   }
      
//       const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
      
//       console.log(result);




//   {
//     // the ID of the learner for which this data has been collected
//     "id": number,

//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
//     "avg": number,

//     // each assignment should have a key with its ID,

//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
//     <assignment_id>: number,

//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// }

//keep in mind
//If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error,
//letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.
//You should also account for potential errors in the data that your program receives. What if points_possible is 0?
 //You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 



  

