// 1. 랜덤한 값을 생성 후 랜덤한 길이의 배열을 만들고 각 버킷에는 랜덤한 임의 난수를 할당한 배열을 만들어라.
// -push를 사용해서
// -for문의 i값을 사용해서

// 2. 버킷의 값들을 뒤에서부터 0번째 버킷까지의 값들을 순차적으로 출력하라.
// -값이 짝수이면 짝수, 홀수이면 홀수
// -if문 사용
// -벡틱을 사용해봐라


let random = Math.floor(Math.random()*100);
const array = [];
for(let i = 0; i < random; i++){
    array.push(Math.floor(Math.random() * 10)); // push 사용해서 끝 배열에 추가.
    // array[i] = Math.floor(Math.random() * 10); // for문의 i값 사용해서 뽑아내기.
}console.log(array); // 배열 뽑아내기.
// console.log(array.reverse()); // 배열 정렬 역순으로 뽑아내기.


// for(let i = 0; i < array.length; i++){
//     if((array[i] % 2) === 0){
//         console.log(i + "번째 방 :" + array[i] + " 짝수입니다.");
//     }else{
//         console.log(i + "번째 방 :" + array[i] + " 홀수입니다.");
//     }
// }

for(let i = 0; i < array.length; i++){
    console.log(`${i}번째 방:${array[i]} ${(array[i] % 2) === 0 ? "짝수입니다." : "홀수입니다."} `);
}