

export interface EmployeeInfo {
    empId: number;
    empName: string;
    designation: string;
    department: string;
    salary: number;
    isPermanent: boolean;
    email: string;
    contact: number;
}

export interface studentArrIntr{
     rollNo: number;
    name: string;
    course: string;
    year: string;
    percentage: number;
    isPassed: boolean;
    email: string;
    contact: number;
}

export interface productInfo{
     prodId: number;
    prodName: string;
    category: string;
    price: number;
    stock: number;
    isAvailable: boolean;
    brand: string;
}

export interface courseInfo {
    courseId: number;
    courseName: string;
    duration: string;
    fees: number;
    mode: string;
    isActive: boolean;
    trainer: string;
}

export interface bookInfo{
    bookId: number;
    title: string;
    author: string;
    price: number;
    pages: number;
    isAvailable: boolean;
    genre: string;
}

export interface customerInfo{
    custId: number;
    name: string;
    city: string;
    age: number;
    email: string;
    isPrime: boolean;
    contact: number;
}

export interface orderInfo{
orderId: number;
    customerName: string;
    product: string;
    amount: number;
    status: string;
    date: string;
} 

export interface movieInfo{
     movieId: number;
    title: string;
    genre: string;
    rating: number;
    releaseYear: number;
    isHit: boolean;
    language: string;
}

export interface teacherInfo{
    teacherId: number;
    name: string;
    subject: string;
    experience: number;
    salary: number;
    isFullTime: boolean;
    email: string;
}

export interface vehicleInfo{
     vehicleId: number;
    brand: string;
    model: string;
    type: string;
    price: number;
    isAvailable: boolean;
    fuel: string;
}