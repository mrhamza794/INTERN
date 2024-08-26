const student = [
     { id: 1, name: "ashar", gpa: 3.4,  doc:[{city:"karachi",provice:"sindh"}]},
     { id: 2, name: "ahemd", gpa: 3.5, },
     { id: 3, name: "bilal", gpa: 3.6,doc:["lahore","punjab"] },
     { id: 4, name: "hamza", gpa: 3.4, doc:["lahore","punjab"] },
     { id: 5, name: "ayan", gpa: 3.4,doc:["lahore","punjab"] }
];



// using foreach

student.forEach((studentDetail) => {
    studentDetail.doc?.forEach((location) => {
    console.log(location.city);
    });

    // console.log(studentDetail);
});



// other functions practice

// const num1 = "abcd";
// const num2 = "efg";

// function addition(a, b) {
//     const result = a + b;
//     return (result);
// }

// alert(addition(num1 , num2))
// setTimeout(() => {
    
// }, timeout);

// sort(arr)

// other functions practice