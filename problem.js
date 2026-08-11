// Problem-01: Student Introduction Generator
// ⚠️ Function Name Must be studentIntroduction()

// একটি Online Learning Platform নতুন Student Registration-এর পরে একটি Introduction Message তৈরি করতে চায়।

// 📥 Input:
// Function একটি Object গ্রহণ করবে, যেমনঃ

// {
//   name: "Rafi",
//   age: 18,
//   course: "JavaScript"
// }
// 🚀 Output:
// Template Literal ব্যবহার করে নিচের ফরম্যাটে একটি String রিটার্ন করবে —

// My name is Rafi. I am 18 years old. I am learning JavaScript.

// 🚩 Challenge:
// যদি

// Input Object না হয়, অথবা
// name, age অথবা course property না থাকে
// তাহলে "Invalid" রিটার্ন করবে।

// 💡 Hints:
// Backtick (`) দিয়ে Template Literal লিখে ${} এর ভেতরে property গুলো বসাও। দাঁড়ি (.) এবং space গুলো হুবহু মিলতে হবে।

// Test Cases
// Example 1
// Input:
// studentIntroduction({"name":"Rafi","age":18,"course":"JavaScript"})
// Expected Output:
// "My name is Rafi. I am 18 years old. I am learning JavaScript."
// Example 2
// Input:
// studentIntroduction({"name":"Sadia","age":22,"course":"React"})
// Expected Output:
// "My name is Sadia. I am 22 years old. I am learning React."
// Example 3
// Input:
// studentIntroduction({})
// Expected Output:
// "Invalid"
// Example 4
// Input:
// studentIntroduction("student")
// Expected Output:
// "Invalid"
// Example 5
// Input:
// studentIntroduction({"name":"Rafi","age":18})
// Expected Output:
// "Invalid"
//tanzim.uiu

function studentIntroduction(student) {
    // Write your code here
    if (typeof student !== "object" || student== null)
    {
        return "Invalid";

    }
    if(!("name is student")||
    !("age in student")||
    !("course"in student)){
        return "Invalid";
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
    
}
