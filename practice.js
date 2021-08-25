/*

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




//6. [challenging] numbers of array. get odd numbers by using filter with arrow function
//৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const arrayOfNums2 = [5, 8, 6, 3, 9, 7, 1, 2, 4];
const oddNumbers = arrayOfNums2.filter(num => num % 2 != 0);
console.log(oddNumbers);





//7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
//৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 


const products = [
    { name: 'monitor', price: 10000 },
    { name: 'mobile', price: 20000 },
    { name: 'watch', price: 500 },
    { name: 'fan', price: 5000 },
    { name: 'lamp', price: 2000 }
];

const priceEqualFiveThousand = products.find(product => product.price == 5000);

console.log(priceEqualFiveThousand);





//8. You have an object. Now use destructing to create a simple variable of any property of the object.
//৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

//Difference between map and forEach is that map will loop through each element of an array and for each element of the array, it will call a function or do something with each element and after that for each element result will get pushed into an array. But if you want to do something with each element but do not wish to return like you do with map then you can use forEach instead of map.

//Difference between filter and find is that filter will say like I have some checkpoint. I will take someone only according to these checkpoint. I will not take anyone else beside it. The checkpoint condition is like the one you see inside if statements. But find will directly give you the whole element without giving it inside of an array like filter. If filter doesn't find anything that matches the checkpoint or condition then it will return an empty array whereas in case of find, it will return undefined. Filter will give you all the elements that get's matched with the checkpoint or condition whereas find will only return the first one that fulfilled the checkpoint or condition even if it finds many that fulfilled the checkpoint or condition.

//The difference between map and filter is that if the condition or checkpoint is fulfilled then it will return the whole element. and that element will be returned inside of an array. 


