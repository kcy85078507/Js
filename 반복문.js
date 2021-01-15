// boolean true false
// 조건의 참과 거짓을 나타냅니다.

// == 동등 연산자 좌항과 우항의 값이 같느냐? 
// === 일치 연산자 좌항과 우항의 값이 같느냐?

// > 좌항이 우항보다 크냐?
// < 좌항이 우항보다 작냐?
// >= 좌항이 우항보다 크거나 같냐?
// <= 좌항이 우항보다 작거나 같냐?

// 논리 연산자
// ! not && and || or

// ! not 연산자는 기존의 boolean 결과 값을 세트하는 연산자 10 != 20 true
// 10 !== "10" false

// && 좌항과 우항의 값이 전부 true냐? true && true // true, true && false // false
// || 좌항과 우항의 값 중 true가 있느냐? true || true // true, true || false // true

// 조건문 어떤 값의 결과에 따라서 문맥을 분기하는 역할
// 즉 백설공주가 사과를 먹었다면? 먹지 않다면? 이야기가 달라지기 떄문에, 이런 조건문이 필요합니다.

// if(조건){ 실생활 코드}
// 한개의 분기문 중에서 조건을 한번 더 명시하려면 else if(조건){ 코드 }
// 모든 조건이 false인 경우 else{코드}

// switch(비교대상){
    // case 값 :
        // 코드
        // break
    // default :
    // else 역할
// }

// 삼항연산자 조건? 참인경우 반환할 값 : 거짓인 경우 반환할 값




//반복문 for, while
// for(let i = 0; i <= 100; i++){
//     console.log(i);
// }
// for(이 for문에서 사용할 변수; 조건; 루프가 실행 될 때마다 실행할 코드){
    // 실행코드
// }

// 조건이 제일 중요하다. 만약 조건을 정확히 작성하지 않았다면 무한 루프에 빠질 수 있다.
// let i = 0;
// for (;i <= 100;){
//     console.log(i);
//     i++;
// }

// i++ 후위 증감자
// ++i 전위 증감자
// i-- 후위 감소자
// --i 전위 감소자

// let i = 0;
// console.log(i);
// console.log(i++);
// console.log(i);

// console.log(i);
// console.log(++i); // i = i + 1;
// console.log(i);

// console.log(i);
// console.log(i--);
// console.log(i);

// console.log(i += 2); // i = i + 2
// i *= 2 i = i * 2;

// for(let i = 0; i < 100; i++){
//     if(i % 2 == 0){
//         console.log(i + '는 짝수입니다.');
//     }else{
//         console.log(i + '는 홀수입니다.');
//     }
// }

// for(let i = 100; i > 0; i--){
//     if(i % 2 == 0){
//         console.log(i + "는 짝수입니다.");
//     }else{
//         console.log(i + "는 홀수입니다.");
//     }
// }


// while
// // let i = 0;
// // while(i < 10){
//     console.log(i++);
    // while 조건을 명확히 하고, while문에서 조건에 해당 할 수 있도록 코드를 작성해야한다.
//}

// while(){
    // 무한 루프에 빠진다.
    // 인피니티 루프 || 이터널 루프
// }

// 이번에는 for문과 while문을 써서 각각
// Index변수가 0부터 100까지 출력하는데, 조건문을 사용해 3의 배수와 5의 배수일 경우 출력하지 않도록 해라.

// let Index = 0;
// for(; Index <= 100; Index++){
//     if(!((Index % 3 == 0) && (Index % 5 == 0))){
//         console.log(Index);
//     }
// }

// while(Index < 101){
//         if(!((Index % 3 == 0) && (Index % 5 == 0))){
//             console.log(Index);
//         }
//         Index++
//  }

 // 0부터 30까지 2씩 조건문을 쓰지 않고 출력하는 반복문을 for과 while로.

//  for(; Index < 31; Index += 2){
//      console.log(Index);
//  }

//  while( Index < 31){
//      console.log(Index);
//      Index += 2;
//  }

// 이제 반복문을 조금 더 특별하게 해줄 분기문 2개를 더 알아봅시다.

const randomValue = Math.floor(Math.random() * 10);
console.log( "오늘은 " + randomValue + " 번까지 부르고 종료해야지!");
const studentLength = 100;

let index = 0;

// for( let i = 0; i <= studentLength; i++){
//     console.log(i + "번째 학생! : 네");
//     if(i === randomValue){
//         console.log("오늘은" + i + "번까지 부르고 뒤에는 전부 출석이다!");
//         break;
//     }
// }

// whild(index <= studentLength){
//     console.log(index + "번째 학생! : 네");
//     if(index === randomValue){
//         console.log("오늘은" + index + "번까지 부르고 뒤에는 전부 출석이다!");
//         break;
//     }
//     index++;
// }

// break는 반복문 종료
// continue는 그 조건만 종료하고 다시 반복문을 실행시킨다.

// while(index <= studentLength){
//     if(index === randomValue){
//         console.log(randomValue + "번 녀석은 부를 가치가 없어!");
//         index++;
//         continue;
//     }
//     console.log(index + "번 학생! : 네");
//     index++;
// }


// 배열은 우리가 코딩을 하기 매우 편하게 만들어주고 매우 자주 쓰이는 데이터 타입입니다.
// 배열? 어떤 직선적인 구조.
// 배열은 비슷한 것들끼리 순서대로 저장되어 있는 자료구조이다.
// 굳이 배열을 왜 쓰지..?
// 배열의 리터럴 []

const numbersArray = [1,2,3,4,5,6]; // 방은 버킷 bucket안엔 value
// console.log(numbersArray[0]); //0번 방에 있는 값을 가져와라. // Index, Key

// 배열이 없다면 우리 코드는 변수들로만 이루어져서 보기 힘들다.
// 같은 데이터 타입으로만 이뤄지는게 편하고 좋다.


// 배열의 길이란? 배열 내부에 있는 버킷의 갯수
for(let i = 0; i < numbersArray.length; i++){
    console.log(numbersArray[i]);
}