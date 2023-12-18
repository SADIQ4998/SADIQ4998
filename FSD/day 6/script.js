// Write a “person” class to hold all the details


class Person{ 
    constructor(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
    }
    getName(){
    return this.name;
    }
    getAge(){
    return this.age;
    }
    getAddress(){
    return this.address;
    }
    }
    
    let p1 = new Person('sadiq',25,'jaya Nagar');
    let p2 = new Person('sathish',31,'periyar Nagar');
    console.log(p1.getName()+" " +p1.getAge());
    console.log(p2.getName()+" "+p2.getAddress());

   // write a class to calculate the uber price

    class Uber {
        static BaseFare = 10;
        static CostPerMile = 2;
        static CostPerMinute = 1;
        static BookingFee = 6;
        constructor(time=1,mile=1){
            this.time=time;
            this.mile=mile;
        }
        totalPrice(time=this.time , mile=this.mile){
            console.log(`the total price is ${(Uber.BaseFare)+(Uber.BookingFee)+((Uber.CostPerMinute)*time)+((Uber.CostPerMile)*mile)} only`);
        }
    }
    let bike = new Uber();
    bike.totalPrice(15,10);
    bike.totalPrice(10,10);