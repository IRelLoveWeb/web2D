var CACHE_NAME = 'my_test_serverworker';
var urlsToCache = [
    'styles/main.css',
    'script/main.js'
]

self.addEventListener('install',function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })
    )
})

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       // 以下方法检视请求，并从服务工作线程所创建的任何缓存中查找缓存的结果。
//       caches.match(event.request)
//         .then(function(response) {
//           console.log(event.request)
//           console.log(caches)
//           // 如果发现匹配的响应，则返回缓存的值
//           if (response) {
//             return response;
//           }
//           return fetch(event.request);
//         }
//       )
//     );
//   });