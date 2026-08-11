// Problem-03: Trending Hashtag Counter
// ⚠️ Function Name Must be countHashtags()

// Clipzy একটি short-video app, যা Gen Z দের মধ্যে জনপ্রিয়। এটি একটি caption কতটা "trend-friendly" তা বুঝতে caption-এ থাকা hashtag গণনা করতে চায় এবং সবচেয়ে বড় hashtag খুঁজে বের করতে চায়। প্রতিটি hashtag হলো # দিয়ে শুরু হওয়া একটি word।

// তোমার কাজ হলো এমন একটি function লেখা যা caption string স্ক্যান করে বলবে সেখানে কয়টি hashtag আছে এবং সবচেয়ে বড় hashtag কোনটি (# চিহ্ন ছাড়া)।

// 📥 Input:
// একটি String, caption, যেমনঃ "Loving this weather today #sunny #vibes #weekend"

// 🚀 Output:
// একটি Object, শেপঃ { hashtagCount: Number, longestTag: String }

// hashtagCount → মোট কতগুলো word # দিয়ে শুরু হয়েছে
// longestTag → সবচেয়ে বড় hashtag-এর টেক্সট, # ছাড়া (length সমান হলে যেটা আগে আছে সেটা)
// কোনো hashtag না থাকলে longestTag হবে ""
// 🚩 Challenge:
// যদি

// Input String না হয়
// তাহলে "Invalid" রিটার্ন করবে।

// 💡 Hints:
// caption-কে word এ ভাগ করার জন্য split(" ") ব্যবহার করো, তারপর প্রতিটা word startsWith("#") দিয়ে চেক করো। # বাদ দিতে slice(1) কাজে লাগবে।

// Test Cases
// Example 1
// Input:
// countHashtags("Loving this weather today #sunny #vibes #weekend")
// Expected Output:
// {"hashtagCount":3,"longestTag":"weekend"}
// Example 2
// Input:
// countHashtags("No hashtags here")
// Expected Output:
// {"hashtagCount":0,"longestTag":""}
// Example 3
// Input:
// countHashtags("#ai #ml data science")
// Expected Output:
// {"hashtagCount":2,"longestTag":"ai"}
// Example 4
// Input:
// countHashtags(123)
// Expected Output:
// "Invalid"
// Example 5
// Input:
// countHashtags(["#fun"])
// Expected Output:
// "Invalid"


function countHashtags(caption) {
    // Write your code here...
    if(typeof caption !=="string"){
        return "Invalid";
    }
    let words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag ="";
    for(let word of words)
    {
        if(word.startsWith("#")){
            hashtagCount++;
            let tag =word.slice(1);
            if (tag.length > longestTag.length)
            {
                longestTag = tag;
            }
        }
    }
    return {
        hashtagCount: hashtagCount,
        longestTag: longestTag
    };
}