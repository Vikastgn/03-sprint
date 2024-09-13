//Promise------------------------------------------------------

// Использование коллбэков
//function fetchDataWithCallback(callback) {
//    setTimeout(() => {
//        callback(null, "Данные получены");
//    }, 1000);
//}

//fetchDataWithCallback((err, data) => {
//    if (err) {
//        console.error(err);
//    } else {
//        console.log(data);
//    }
//});

//// Использование Promise
//function fetchDataWithPromise() {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve("Данные получены");
//        }, 1000);
//    });
//}

//fetchDataWithPromise()
//    .then(data => {
//        console.log(data);
//    })
//    .catch(err => {
//        console.error(err);
//	});
	
////Синтаксис создания Promise:
//let promise = new Promise(function(resolve, reject) {
//	// функция-исполнитель (executor)
//	// "певец"
//});
  
//let promise1 = new Promise(function(resolve, reject) {
//	// эта функция выполнится автоматически, при вызове new Promise
  
//	// через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//	setTimeout(() => resolve("done"), 1000);
//});
  
//let promise2 = new Promise(function(resolve, reject) {
//	// спустя одну секунду будет сообщено, что задача выполнена с ошибкой
//	setTimeout(() => reject(new Error("Whoops!")), 1000);
//});
  
//then

////Синтаксис:
//promise.then(
//    function(result) { /* обработает успешное выполнение */ },
//    function(error) { /* обработает ошибку */ }
//);

//// Например, вот реакция на успешно выполненный промис:
//let promise = new Promise(function(resolve, reject) {
//    setTimeout(() => resolve("done!"), 1000);
//});

//// resolve запустит первую функцию, переданную в .then
//promise.then(
//    result => alert(result), // выведет "done!" через одну секунду
//    error => alert(error) // не будет запущена
//);

////А в случае ошибки в промисе – выполнится вторая:
//let promise = new Promise(function(resolve, reject) {
//    setTimeout(() => reject(new Error("Whoops!")), 1000);
//});
//// reject запустит вторую функцию, переданную в .then
//promise.then(
//    result => alert(result), // не будет запущена
//    error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
//);

//let promise = new Promise(resolve => {
//    setTimeout(() => resolve("done!"), 1000);
//});

//promise.then(alert); // выведет "done!" спустя одну секунду

//catch

//let promise = new Promise((resolve, reject) => {
//    setTimeout(() => reject(new Error("Ошибка!")), 1000);
//});
//// .catch(f) это то же самое, что promise.then(null, f)
//promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду

// Очистка: finally

//// Код может выглядеть следующим образом:
//new Promise((resolve, reject) => {
//	/* сделать что-то, что займёт время, и после вызвать resolve или может reject */
//  })
//	  // выполнится, когда промис завершится, независимо от того, успешно или нет
//	.finally(() => остановить индикатор загрузки)
//	// таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
//	.then(result => показать результат, err => показать ошибку)

//// Например, здесь результат проходит через finally к then:
//new Promise((resolve, reject) => {
//	setTimeout(() => resolve("value"), 2000);
//  })
//	.finally(() => alert("Промис завершён")) // срабатывает первым
//	.then(result => alert(result)); // <-- .then показывает "value"

//	// А здесь ошибка из промиса проходит через finally к catch:
//new Promise((resolve, reject) => {
//	throw new Error("error");
//  })
//	.finally(() => alert("Промис завершён")) // срабатывает первым
//	.catch(err => alert(err));  // <-- .catch показывает ошибку

//Можно ли "перевыполнить" промис?---------------------------------------------------------
//Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//Задержка на промисах---------------------------------------------------------
//Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
	return new Promise(resolve =>setTimeout(resolve,ms))
  }
  
  delay(3000).then(() => alert('выполнилось через 3 секунды'));