// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
const config = {
    // urlPath:'http://192.168.2.118:9090/jy'
    urlPath:'/jy'
};
const requestService = {
    postData:function(url, data){
      // Promise
    return fetch(config.urlPath + url, {
          body: JSON.stringify(data), // must match 'Content-Type' header
          credentials: 'include',
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            // 'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1OTM0OTM3NTQ5MjQsImV4cCI6MTU5NDA5ODU1NH0.fatZvmb-Gzvwe2MyaQ16bqCQVxgAeTH1_HjOGcuPjA5I8FC2_hUqbGjqPXM9ItM1BsYmzM8y0tfWHuca_-D85w'
          },
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // *client, no-referrer
        }).then(function(response) {
          return response.json();
        }).catch(function(error) {
           console.log(error);
        });
         // return fetchBody;
    },
    getData:function(url, data){
      // 解析data   ?userName=

      let dataStr = ''; //数据拼接字符串
       Object.keys(data).forEach(function(key){
           dataStr += key + '=' + data[key] + '&';
       })

       if (dataStr !== '') {
           dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
           url =  url + '?' + dataStr;
       }

      return fetch(config.urlPath + url , {
          // body: JSON.stringify(data), // must match 'Content-Type' header
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, same-origin, *omit
          headers: {
            'content-type': 'application/json',
            // 'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImNyZWF0ZWQiOjE1OTM0OTM3NTQ5MjQsImV4cCI6MTU5NDA5ODU1NH0.fatZvmb-Gzvwe2MyaQ16bqCQVxgAeTH1_HjOGcuPjA5I8FC2_hUqbGjqPXM9ItM1BsYmzM8y0tfWHuca_-D85w'
          },
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // *client, no-referrer
        })
        .then(function(response){
          return response.json();
        });

    }
};

 export default requestService;
