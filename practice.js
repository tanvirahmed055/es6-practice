/*


6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/


//1. let const
//১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const firstName = "antor";
let oilPrice = 500;
oilPrice = 900;


//2. template string
//2.a: use variable
//2.b: use object  property
//২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

const xiomiPhone = {
    model: "Redmi Note 10",
    price: 20000
};

const description = `Hi! My first name is ${firstName}. I have oil in my shopping list and it costs me ${oilPrice} per litre. My friend has bought a ${xiomiPhone.model} phone which costs around ${xiomiPhone.price} taka.`;
console.log(description);




//3. arrow function

//3.a. with one parameter. will return the number after dividing by 5
//৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 


const divideByFive = num => num / 5;
const result = divideByFive(25);
console.log(result);



//3.b. with two parameters. will add two to each number and then multiply the result.
//৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const myArrowFunction2 = (num1, num2) => (num1 + 2) * (num2 + 2);
const result2 = myArrowFunction2(5, 10);
console.log(result2);




//3.c. three parameters. will multiply all three parameters
//৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

const myArrowFunction3 = (num1, num2, num3) => num1 * num2 * num3;
const result3 = myArrowFunction3(5, 5, 5);
console.log(result3);




//3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result. make sure you return the result
//৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const myArrowFunction4 = (num1, num2) => {
    const firstSum = num1 + 2;
    const secondSum = num2 + 2;
    const multiplication = firstSum * secondSum;
    return multiplication;
}

const result4 = myArrowFunction4(5, 10);
console.log(result4);




//৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 
//4. [home work]: javascript function declaration vs arrow function

// 5 Differences Between Arrow and Regular Functions
//https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/





//৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

//Var, Let, and Const – What's the Difference?
//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/





//5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
//৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

const arrayOfNums = [5, 3, 17, 8, 4, 9, 2]
const multipliedByFive = arrayOfNums.map(num => num * 5);
console.log(multipliedByFive);


