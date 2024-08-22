// // 問題1. ドット記法でプロパティを追加してください
// const food1 = {
//   foodName: 'Pizza',
//   price: 2000
// }
// // この下に回答を記述してください

// food1.category = 'Fast Food'
// console.log(food1.category)

// // 問題2. ブラケット記法でプロパティを追加してください
// const food2 = {
//   foodName: 'hamburger',
//   price: 1000
// }
// // この下に回答を記述してください

// food2['calorie']=300
// console.log(food2['calorie'])

// // 問題1. オブジェクトを複製してください
// const userObject = {
//   userName: 'Alex',
//   age: 20
// }
// // この下に回答を記述してください
// const userObjectCopy = { ...userObject }
// console.log(userObjectCopy)

// // 問題2. オブジェクトの特定のプロパティの値を更新して代入してください
// const userObject2 = {
//   userName: 'Alex',
//   age: 20
// }
// // この下に回答を記述してください
// const updateUserObject = { ...userObject2, userName: 'Bob' }
// console.log(updateUserObject)

// 問題1. ネストされているオブジェクトのプロパティを取得してください
// const clothes = {
//   shirt: {
//     color: 'white',
//     size: 'medium',
//     material: 'cotton'
//   },
//   pants: {
//     color: 'black',
//     material: 'denim'
//   }
// }
// この下に回答を記述してください

// 問題2. ネストされているオブジェクトのプロパティを新しく追加してください
// const food = {
//   breakfast: {
//     dish: 'cereal',
//     calories: 200
//   },
//   lunch: {
//     dish: 'sandwich'
//   },
//   dinner: {
//     dish: 'stir fry',
//     calories: 600
//   }
// }


// // 問題1. 配列の要素を更新してください(文字列)
// const sports = ['football', 'baseball', 'swimming']
// // この下に回答を記述してください
// sports[2] = 'basketball'
// console.log(sports)

// // 問題2. 配列の要素を更新してください(数値)
// const numbers = [100, 10, 1]
// // この下に回答を記述してください
// numbers[0] = 50


// // 問題1. forを使ってループ処理をしてください
// const sports = ['football', 'baseball', 'swimming']
// for (let i = 0; i < 3; i++) {
//   console.log(sports[i])
// }

// この下に回答を記述してください

// // 問題1. forを使ってループ処理をしてください
// const sports = ['football', 'baseball', 'swimming']
// // この下に回答を記述してください
// for (let i = 0; i < 3; i++) {
//   console.log(sports[i])
// }

// // 問題2. forとlengthを使ってループ処理をしてください
// const numbers = [100, 10, 1]
// // この下に回答を記述してください
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// const myFavoriteAnimal = {
//   name: 'ロッキー',
//   type: 'dog'
// }

// const { name, type } = myFavoriteAnimal

// 配列の定義
const myFavoriteAnimal = ['ロッキー', 'dog']
const [name, type] = myFavoriteAnimal

console.log(name)
console.log(type)

// 問題1. 分割代入を使用しない文字列の出力をしてみよう
// 変数myFavoriteCatの全ての値を1つずつ取り出してみましょう。
// const myFavoriteCat = {
//   nickname: 'Kiki',
//   age: 3
// }

// console.log(myFavoriteCat.nickname)
// console.log(myFavoriteCat.age)

// // 配列myFavoriteDogの全ての値を1つずつ取り出してみましょう。
// const myFavoriteDog = ['豆柴', 'オス']

// console.log(myFavoriteDog[0])
// console.log(myFavoriteDog[1])

// // 問題2. 変数myFavoriteCatを分割代入を用いて、nicknameとageのプロパティを取り出してみよう

// const myFavoriteCat = { nickname, age } = myFavoriteCat

// console.log(nickname)


// // 問題3. 変数myFavoriteDogの分割代入を用いて、豆柴とオスの要素を取り出してみよう
// // ※ 変数名は、豆柴 → breed、オス → sexとしてください。

// const myFavoriteDog = [breed, sex]


// // 問題4. 変数myFavoriteCatのニックネームのプロパティを別名( nickname → catName、age → catAge )で出力してみましょう

// const { catname, catage } = myFavoriteCat
// console.log()

//map関数//要素を2倍にする
const prices = [1000, 2000, 3000, 4000]
const doublePreces = prices.map((price) => price * 2)
console.log(doublePreces)

//map関数//要素を2倍にする
const cities = ["tokyo", "new york", "london"]
console.log(cities.map((city) => city.toUpperCase()))

// 配列usersの各要素のnameプロパティの値の先頭にMr.を追記する

const user = [
  { name: "Smith" },
  { name: "Johnson" },
  { name: "Williams" },
  { name: "Brown" }
]

console.log(user.map((user) => 'Mr.' + user.name))

// mapメソッドはForeachメソッドと混合されやすいです。
// 初めは使い分けが難しいですが、両者には大きな違いがあります。
// foreachメソッドは各要素に処理を実行するだけであるのに対して、mapメソッドは新しい配列
// をくりかえします。新しい配列を必要としない場合や値を返す必要がない場合は、foreachメソッドを
// 使用しましょう。

const forEachValue = arr.forEach(value => {
  return value * 100
})

console.log(forEachvalue)

// mapメソッドの場合には、返り値が新しい配列となる。
const mapEachValue = arr.map(value => {
  return value * 100
})
console.log(mapEachValue)


const budget = 10000
const itemprice = 8000

const purchasestatus = budget > itemprice ?
  購入できます'：'yosann 'オーバーです'

// 成人かどうか判断する
const age = 10

const message = age >= 18 ?'成人です'：
'未成年です'
console.log(message)

// ifを使用する

const age =10

const message =
age>=18?'成人です'




