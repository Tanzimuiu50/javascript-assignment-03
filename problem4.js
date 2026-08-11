// Problem-04: Bonus Score Calculator
// ⚠️ Function Name Must be bonusScore()

// একটি Programming Contest-এ প্রতিটি Participant-এর Score একটি Number Array আকারে দেওয়া আছে। Contest শেষে প্রত্যেক Participant-এর Score-এর সাথে ১০ Bonus Marks যোগ করা হবে। এরপর সব Updated Score যোগ করে Total Score রিটার্ন করতে হবে।

// 📥 Input:
// একটি Number Array, যেমনঃ [80, 65, 90, 75]

// 🚀 Output:
// 350

// 🧮 Explanation:
// Updated Scores (প্রত্যেকের সাথে 10 যোগ করে): [90, 75, 100, 85] Total: 90 + 75 + 100 + 85 = 350

// 🚩 Challenge:
// যদি

// Input Array না হয়, অথবা
// Array Empty হয়, অথবা
// Array-এর মধ্যে Number ছাড়া অন্য কোনো Data Type থাকে
// তাহলে "Invalid" রিটার্ন করবে।

// 💡 Hints:
// map() এবং reduce() ব্যবহার করতে পারো।

// Test Cases
// Example 1
// Input:
// bonusScore([80,65,90,75])
// Expected Output:
// 350
// Example 2
// Input:
// bonusScore([100])
// Expected Output:
// 110
// Example 3
// Input:
// bonusScore([0,10])
// Expected Output:
// 30
// Example 4
// Input:
// bonusScore([])
// Expected Output:
// "Invalid"
// Example 5
// Input:
// bonusScore("scores")
// Expected Output:
// "Invalid"
// Example 6
// Input:
// bonusScore([80,"90",70])
// Expected Output:
// "Invalid"



function bonusScore(scores) {
    // Write your code here
    if(!Array.isArray(scores)|| scores.length === 0){
        return "Invalid";
    }
    for(let score of scores){
        if(typeof score !== "number") {
            return "Invalid";
        }
    }
    let updatedScores = scores.map(score => score +10);
    let totalScore = updatedScores.reduce((sum, score) => sum + score, 0 );
    return totalScore;
}