// // 배열은 우리가 코딩을 하기 매우 편하게 만들어주는 데이터 타입이다.
// // 1열로 정렬된 직선구조
// // 프로그래밍에서 배열은 비슷한 것들끼리 순서대로 지정되어있는 자료구조입니다.
// // 배열에서 중요한 점은 배열은 비슷한 것들끼리 순서대로 저장된다는 것이다.
// // 우리가 알고있는 데이터 타입은 무엇이 있을까요?
// // 자료구조입니다. (추상적인 말) 실제로 존재하는 구조는 아니나, 우리가 자료를 쉽게 보관하고 사용하기 위해서 쓰는 구조.
// // 같은 데이터 타입의 값을 저장 할 수 있다.
// //  const names = ["lee", "kim", 10] 이름이라는 배열인데, 숫자 10이 포함되어 있다.

// //배열을 표현하는 방법은 대괄호 입니다. 리터럴
// // const array = []; 
// //값이 들어간다. 선언과 할당을 동시에 하는 방법.
// // const array = [10, 20, 30];
// // console.log(array);
// //값이 들어있는 공간을 버킷이라고 한다.
// //버킷은 번호가 부여된다.
// //array 변수 3번 버킷에 40이라는 값을 할당한다.
// // array[3] = 40;
// // const start = [];
// // start[0] = 10;

// // const numbers = [1];
// // numbers[1] = 2;
// // numbers[2] = 3;
// // numbers[10] = 10;
// // console.log(numbers);

// //undefined? 변수를 선언했지만 값을 할당하지 않은 값.
// //배열을 0번부터 100번방까지 0~100 숫자를 넣는 반복문
// // const numbers = [];
// // for(let i = 0; i < 100; i++){
// //     numbers[i] = i;
// // }
// // console.log(numbers);

// //length 값은 배열의 길이를 숫자 형태로 리턴한다.
// //배열.(접근연산자)length
let random = Math.floor(Math.random()*100);
// // 0~99까지의 임의의 난수
const array = [];
for(let i = 0; i < random; i++){
    array.push(Math.floor(Math.random() * 10));
    array[i] = Math.floor(Math.random() * 10);
}
//     // i번째 방마다 0~9까지의 임의의 난수가 할당된다.
// }
random=0;
// // 문제는 랜덤한 길이를 가진 이 배열의 버킷에 있는 값들을 출력하라.
for(let i = 0; i < (array.length); i++){
    console.log(array[i]);
}
// for(let i = 0; i , array.length; i++){
//     console.log(`${i}번째 방 :${array[i]} ${(array[i] % 2) ===0 ? "짝수입니다." : "홀수입니다."}` );
// }

// for(let i = array.length; i < array.length + 10; i++){
//     array[i] = Math.floor(Math.random()*10);
//     [1,2,3] // 3길이는 버킷의 수, 5번까지하려면 array[array.length] = 10;
// }
// // ``벡틱안에 ${자바스크립트 코드를 사용하여 리턴되는 값을 이용 할 수 있다.}

//push 뒤에서부터 값을 넣어준다.
// const array = [10];
// console.log(array);
// array.push(20);
// console.log(array);
//배열.push(값) 배열의 마지막 버킷 + 1 번째 방에 값을 넣어준다.

// delete array[1];
// console.log(array);

// array.pop(); // 맨 뒤의 버킷을 제거해줌과 동시에 값을 리턴한다.
// console.log(array.pop());
// console.log(array);

// slice
// 2번 버킷부터 5번 버킷만 빼서 새로운 배열을 만들고싶어!
// const names = ["lee", "kim", "pack", "hans", "ryo"]
// const age = [10, 20, 30, 40, 50];
// //slice(자를 위치, 어디까지);
// const special = names.slice(1,4);
// const ages = age.slice(1,4);
// console.log(ages);
// console.log(special);

// const nameAndAge = [...special,...ages];
// console.log(nameAndAge);