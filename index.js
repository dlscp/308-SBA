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
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

////////////////////////////////////////////////////////////////
// The stuff above was in the provided sandbox. 

//Okay so result is just what im supposed to make it look like in the end?

//Do a valid check to the right course
// create a function to do average
// create function to subtract points if due date is late
// Want to run dateChecking first

function getAvg(){

}

let validSubmissions = [];


function dateChecking() {
    // Creates an object of learner submissions that should be included in final result. Does this by checking submitted date
    for (const idv_submission of LearnerSubmissions) {
        
        // creating variables for this block
        let assignment_id = idv_submission.assignment_id;
        let submitted_date = idv_submission.submission.submitted_at;
        
        // console.log(assignment_id,submitted_date)
        
            // Checking date
            // Checks each assignment to see if it matches the assignment id of the submissions. If it does, it adds new property - submitted_status to the learner submission object that lets us know if it is late, not due or is valid for grading reports. Then if it valid or late, the submission object is added to validSubmissions.
            // This would be good place to add error catching like if the assignment doesn't exist or if date isn't entered or if date doesn't exist and the like. 
            for (const assignment of AssignmentGroup.assignments) {

                // creating variables for this block only
                let submitted_status = "Untracked";
                let due_date = assignment.due_at;
                // let idvSubStatus = idv_submission.submission.status;

                if (assignment_id === assignment.id) {
                    switch (true) {
                        case (submitted_date > due_date ):
                            submitted_status = "Late";
                            // subtracting 10% of possible points if late 
                            idv_submission.submission.score = idv_submission.submission.score - (assignment.points_possible*.1);
                            break;
                        case (submitted_date < due_date):
                            submitted_status = "Not yet due";
                            break;                
                        default:
                            submitted_status = "Valid";
                            break;
                    }
                    // Adding property to learner submission object, only doing this if assignment id matches a learner submission id
                    idv_submission.submission.status = submitted_status;
                    idv_submission.submission.percentage = (idv_submission.submission.score/assignment.points_possible)


                } 
            }
            // console.log(idv_submission)
            if (idv_submission.submission.status === "Valid" || idv_submission.submission.status === "Late") {
                validSubmissions.push(idv_submission);
                console.log(idv_submission.submission.status,"late or valid test")
            }
            
    }
    return validSubmissions;
}

dateChecking();
console.log(validSubmissions);

function finalResult() {

    const finalResult = [];

    //Need to add checking for if learner id's match
    for (const learnerSubs of validSubmissions) {
        finalResult.id = learnerSubs.learner_id;
    }

    console.log(finalResult)
}

finalResult();


