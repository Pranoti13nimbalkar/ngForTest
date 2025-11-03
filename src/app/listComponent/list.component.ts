import { Component } from "@angular/core";


@Component({
    selector : "app-list",
    templateUrl: "./list.component.html",
    styleUrls : ["./list.component.scss"]
})


export class ListComponent{
     
   productsText : string = 'Top 10 Popular Products You Can Buy Online';
   products : Array<string> =  [
  'Laptop', 'Watch', 'Pen', 'Book', 'Mobile', 'Bag', 'Shoes', 'Tablet', 'Camera', 'Charger'
];

fruitsText : string = 'List of Delicious and Healthy Fruits';
 fruits :Array<string> = [
  'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Strawberry', 'Papaya', 'Watermelon', 'Kiwi'
];

colorsText : string= '10 Common Colors Used in Design';
 colors : Array<string> = [
  'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gray'
];

citiesText :string = 'Top 10 Cities in India You Should Know About';
 cities : Array<string> = [
  'Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad', 'Bangalore', 'Kolkata', 'Surat', 'Jaipur', 'Indore'
];

subjectsText :string= '10 Important School Subjects for Students';
 subjects : Array<string>= [
  'Math', 'Science', 'English', 'History', 'Geography', 'Computer', 'Economics', 'Physics', 'Chemistry', 'Biology'
];

 vehiclesText :string= 'Different Types of Vehicles We Use Every Day';
 vehicles :Array<string> = [
  'Car', 'Bike', 'Scooter', 'Bus', 'Truck', 'Train', 'Bicycle', 'Boat', 'Helicopter', 'Airplane'
];

animalsText : string= '10 Popular Animals Found Around the World';
 animals: Array<string>= [
  'Dog', 'Cat', 'Elephant', 'Tiger', 'Lion', 'Zebra', 'Horse', 'Deer', 'Monkey', 'Rabbit'
];

 sportsText: string = 'Most Popular Sports Played Globally';
sports :Array<string>= [
  'Cricket', 'Football', 'Tennis', 'Badminton', 'Hockey', 'Volleyball', 'Basketball', 'Baseball', 'Golf', 'Table Tennis'
];

countriesText :string= '10 Famous Countries Across the World';
 countries :Array<string>= [
  'India', 'USA', 'Canada', 'Japan', 'Germany', 'France', 'Brazil', 'Australia', 'China', 'Italy'
];

languagesText:string = 'Major Languages Spoken Across India';
 languages:Array<string>= [
  'English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu', 'Bengali', 'Kannada', 'Punjabi', 'Malayalam'
];
}