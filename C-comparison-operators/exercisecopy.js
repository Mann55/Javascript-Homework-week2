// First part
let studentCount = 16;
let mentorCount = 9;

let moreStudentsThanMentors = studentCount > mentorCount;

console.log("Are there more students than mentors ?", moreStudentsThanMentors);


// Second part
let roomMaxCapacity = 25;
let peopleCount  = studentCount + mentorCount;
let enoughSpaceInRoom = peopleCount <= roomMaxCapacity;

console.log("Is there enough space in the room for all students and mentors ?", enoughSpaceInRoom);


// Third part
let personA = "Daniel";
let personB = "Irina";
let sameName = personA === personB;

console.log("Do person A and person B have the the same name ?", sameName);