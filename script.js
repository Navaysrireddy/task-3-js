class Book{
    title;
    author;
    ISBN;
    constructor(title,author,ISBN){
        this.title=title;
        this.author=author;
        this.ISBN=ISBN;
    }

checkout(){
    console.log(this.title ,"is chceked ");
}
returnBook() {
    console.log("the retired book author is",this.author);
}
updateTitle(newTitle){
    console.log("title is updated as",newTitle)
}
}

var b1=new Book ("heidi","johanna spyri","3130");
b1.checkout();
b1.returnBook();
b1.updateTitle("heidi");
console.log(b1);

//question 2//

class product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    discount(amount){
        console.log("discount amount is",amount);
    }
    getPriceafterdiscount(){
        console.log("price after discount",this.price-5000);
    }
}
var p1=new product("hp","40000","laptop")
p1.discount(5000)
p1.getPriceafterdiscount();
console.log(p1);

//question 3//
class bankaccount{
    accountholdername;  
    accountNumber;
    balance;
    constructor(accountholdername,accountNumber,balance){
        this.accountholdername=accountholdername;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(amount){
        console.log(amount ,"is deposited to",this.accountNumber);
        this.balance  = this.balance + amount;
        console.log("after deposit the total balance is ", this.balance);
    }
    withdraw(amount)
    {
        console.log(amount ,"is withdraw from ",this.accountNumber);
        this.balance = this.balance - amount;
        console.log("after withdraw total balance is ",this.balance);
    }
    getBalance()
    {
        console.log("total balance is",this.balance);
    }
    }
    var acc=new bankaccount("navyasri","110187633144","4045");
    acc.deposit(1500);
    acc.withdraw(1000);
    acc.getBalance();
    console.log(acc);



    //question 4//
    class vechicle{
        model;
        licenceplate;
        mileage;
        constructor(model,licenceplate,mileage){
            this.model=model;
            this.licenceplate=licenceplate;
            this.mileage=mileage;
        }
        drive(miles){
            this.mileage=miles+this.mileage;
            console.log("mileage after increasing",this.mileage);

        }
        getmileage(){
            console.log(this.mileage);

        }
    }
    var v1=new vechicle("GT","TS09EU5588",27);
    v1.drive("50");
    // v1.mileage();
    console.log(v1);



//Question 5//
class student{
    studentname;
    grade;
    constructor(studentname,grade){
        this.studentname=studentname;
        this.grade=grade;
    }
    setgrade(newgrade){
        this.grade=newgrade;
        console.log("newgrade after updating is",newgrade);
    }
    getGrade(){
        console.log("current grade is",this.grade);
    }
}
var sud1=new student ("chinmayi","A");
sud1.setgrade("A+");
sud1.getGrade();
console.log(sud1);