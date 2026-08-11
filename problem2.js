// Function Name Must be filterActiveUsers()

// একটি Social Media Platform-এ User-দের Status Check করতে হবে। User List একটি Array of Object আকারে দেওয়া আছে। Function শুধুমাত্র isActive: true হওয়া User-দের Array রিটার্ন করবে।

// 📥 Input:
// একটি Array of Object যেখানে name এবং isActive property থাকবে, যেমনঃ

// [
//   { name: "A", isActive: true },
//   { name: "B", isActive: false }
// ]
// 🚀 Output:
// শুধুমাত্র isActive: true হওয়া User-দের Array, যেমনঃ

// [{ name: "A", isActive: true }]
// 🚩 Challenge:
// যদি

// Input Array না হয়, অথবা
// Array Empty হয়, অথবা
// কোনো Object-এ isActive property না থাকে
// তাহলে "Invalid" রিটার্ন করবে।

// 💡 Hints:
// filter() ব্যবহার করার চেষ্টা করো। User Object গুলো যেমন আছে তেমনই রাখতে হবে — নতুন করে বানাতে হবে না।

// Test Cases
// Example 1
// Input:
// filterActiveUsers([{"name":"A","isActive":true},{"name":"B","isActive":false}])
// Expected Output:
// [{"name":"A","isActive":true}]
// Example 2
// Input:
// filterActiveUsers([{"name":"Rafi","isActive":true},{"name":"Sadia","isActive":true}])
// Expected Output:
// [{"name":"Rafi","isActive":true},{"name":"Sadia","isActive":true}]
// Example 3
// Input:
// filterActiveUsers([])
// Expected Output:
// "Invalid"
// Example 4
// Input:
// filterActiveUsers([{"name":"A"}])
// Expected Output:
// "Invalid"
// Example 5
// Input:
// filterActiveUsers("users")
// Expected Output:
// "Invalid"
//tanzim.uiu


function filterActiveUsers(users) {
    // Write your code here
    if(!Array.isArray(users) || users.length === 0){
        return "Invalid";

    }
    for(let user of users){
        if(!("isActive" in user)){
            return "Invalid";
        }
    }
    return users.filter(user => user.isActive === true);
}
