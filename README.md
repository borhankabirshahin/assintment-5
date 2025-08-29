1.  What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

                        Answer ----1

    getElementById---নির্দিষ্ট id দেওয়া এলিমেন্ট বের করে আনে।

getElementsByClassName---নির্দিষ্ট class নামের যতগুলো এলিমেন্ট আছে সব একসাথে বের করে আনে এবং একটা লিস্ট আকারে দেয় ।

querySelector--- এটা দিয়ে CSS এর মতো সিলেক্টর ব্যবহার করে প্রথম যে এলিমেন্ট মিলে যায় সেটাকে বের করে আনে।

querySelectorAll---এটা দিয়ে CSS সিলেক্টরের মতো সব মিলে যাওয়া এলিমেন্টকে একসাথে লিস্ট আকারে দেয়।

                        Question --2

How do you **create and insert a new element into the DOM**?

                        Answer --2

DOM হলো ওয়েবপেজের সবকিছু একটা গাছের মতো সাজানো থাকে।
এটা দিয়ে নতুন element ঢোকাতে পারি
প্রথমে document.createElement("tagName") দিয়ে নতুন এলিমেন্ট বানিয়ে নেই। তারপর .appendChild() দিয়ে কোথায় ঢোকানো হবে সেটা ঠিক করতে হয়।

                        Question --3

3.  What is **Event Bubbling** and how does it work?

                        Answer --3

    যদি বাটনে ক্লিক করি তাহলে event প্রথমে Button এ কাজ করে তার পর Div চলে যায় তার পর Body তে চলে যায় এভাবে ধারাবাহিক কাজ করে।

                        Question --4

4.  What is **Event Delegation** in JavaScript? Why is it useful?

                        Answer --4

    Event Delegation হলো parent element এ event বসিয়ে রাখা যাতে করে ভেতরের child element গুলোতে ক্লিক করলে parent এর ইভেন্ট কাজ করে।
    এর সুবিধা
    প্রতিটা child এ আলাদা event বসানো লাগে না ।
    parent এ একবার বসালেই সব child কাজ করে

                        Question --5

5.  What is the difference between **preventDefault() and stopPropagation()** methods?

                        Answer --5

preventDefault()==>Form Submit করলে পেজ একা একা রিলোড হয় সেটাকে থামানের জন্য ব্যবহার preventDefault() করা হয়।

stopPropagation()==>ইভেন্ট বাবলিংকে থামিয়ে দেয়। event কে আর তার parent পর্যন্ত যেতে দেয় না যা জায়গা থেকে তাকে ডাকা হইছে ওখানে থেমে যাবে।
