
let arr=[6,7,8,9,10,11];

// tổng
let sum=arr.reduce((previousValue, currentValue) => previousValue+currentValue );
console.log(sum);

//3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".

let arr2=arr.filter((item)=>item==5);
if(arr2.length==0){
    console.log("khong tim thay");
}
else {
    console.log(arr2);
}

//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
let arr3=arr.filter((item)=>item>0);
if(arr3.length==arr.length){
    console.log("Tất cả các phần tử lớn hơn 0 ");
} else {
    console.log("fail");
}

//5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let arr4=arr.filter((item)=>item>3);

console.log(arr4[0]);

//6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

let [first,...rest]=arr;
console.log(first);
console.log(rest);


//7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

let person ={
    name :'hien',
    age : 20,
}

let {name,age}=person;

console.log(name);
console.log(age);

//8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

let a=(...arr) => arr.reduce(((previousValue, currentValue) => previousValue+currentValue));

let x= a(1,2,3,4);

console.log(x);

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

let messages= (...names) => {
    if (names.length === 0) {
        return 'Không có tên nào được cung cấp.';
    }

    const formattedNames = names.join(', ');

    return 'Welcome, ' + formattedNames ;
};

let message =messages('hien', 'dao', 'duc');

console.log(message);


//10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.


const title = 'HiHi';
const author = 'Haha';
const pages = 1909;

const book = {
    title,
    author,
    pages,

    displayInfo: () => {
        console.log(title);
        console.log(author);
        console.log(pages);
    }
};

book.displayInfo();

