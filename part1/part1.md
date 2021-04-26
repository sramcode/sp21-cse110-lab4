## Part 1A ##

1. 20
2. 20
3. 20
4. ERROR: let only defines variables in the block scope, so result is only accessible in the if statement.
5. ERROR: cannot reassign a const variable
6. ERROR: const has the same scope as let (in the block), so result is only accessible in the if statement block

## Part 1B ##
1. Print out 3. The length of prices array is 3, and after the for loop executes, i will be the length of the prices array. Since i is a var, it is accessible anywhere in the function.
2. Print out 150. The discountPrice for the last price in the discounted array (300) is stored in discountPrice. There is a 50% discount on 300, which is 150. The discountPrice variable is type var, so it is accessible throughout the function. 
3. Print out 150. The finalPrice for the last price in the discounted array (300) is stored in finalPrice. The finalPrice is also a var, so it is accessible throughout the function. The discountPrice was a whole number, so finalPrice is equal to it despite the rounding.
4. Returns a new array called discounted with all the final discounted prices of the original prices array. Each spot in the discounted array corresponds to that of the original prices array.
5. ERROR: Since i is declared using the let keyword, it is only accessible in that for block it is defined in. 
6. ERROR: since discountedPrice is declared using the let keyword, it is only accessible in that for block it is defined in.
7. Print out 150. finalPrice is declared using the let keyword, so it is accessible in the block it is defined in, which is the whole function. Therefore, finalPrice will print out the final price of the 50% discount of 300, which is 150. 
8. Returns a new array called discounted with all the final discounted prices of the original prices array, just like the previous example with var. No error is produced because nothing is being printed out of scope. Each spot in the discounted array corresponds to that of the original prices array.
9. ERROR: Since i is declared using the let keyword, it is only accessible in that for block it is defined in. 
10. Print out 3. Since length is a const that does not change its value throughout the function, it will not produce an error. The const length is the length of the prices array, which is length 3.
11. This function returns the array containing the discounted prices of [50, 100, 150]. Since the const isnt changed after its declaration, this will not cause an error and correctly compute the discounted prices.
12. A) student.name <br>
    B) student["Grad Year"] <br>
    C) student.greeting() <br>
    D) student["Favorite Teacher"].name <br>
    E) student.courseLoad[0] <br>
13. A) 32 since integers map to their exact string representation <br>
    B) 1 since the '3' gets converted to an integer, and performs 3-2.<br>
    C) 3 since the null maps to a 0, so 3+0 is 3. <br>
    D) 3null since the null gets converted to a string, and the two strings are concatenated.<br>
    E) 4 since true maps to 1, so 1+3 is 4.<br>
    F) 0 since false and null both map to 0.<br>
    G) 3undefined since the undefined gets converted to a string, and is concatenated with the 3 string.<br>
    H) NaN since undefined is mapped to NaN and '3' maps to an integer, which you cannot subtract. <br>
14. A) true since 2 turns into a number<br>
    B) true since 2 and 12 both turn into numbers<br>
    C) true since 2 turns into a number and this is using non strict equality<br>
    D) false since this is using strict equality and 2 and '2' are different types<br>
    E) false since true maps to the number 1, which isn't equal to 2<br>
    F) true since Boolean(2) evaluates to true because 2 is not 0, and we can see that true === true. <br>
15. A strict equality operator (===) checks equality with no type conversion, while an nonstrict equality operator (==) checks equality with type conversion.
<!---->
17. The modifyArray function will return an array of [2,4,6]. It goes through each value of the original array [1,2,3] and pushes a new value to newArr that has each value at each index multiplied by 2.
<!---->
19. 1 <br>
    4 <br>
    3 <br>
    2 <br>



