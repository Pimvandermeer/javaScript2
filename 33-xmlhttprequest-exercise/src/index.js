const url = "https://jsonplaceholder.typicode.com/users";

const XMLHTTPReadyState_COMPLETE = 4;
// Step 1: create an XHR object
const xhr = new XMLHttpRequest();

//const id = getElementById(app);

xhr.onreadystatechange = () => {
  // Step 2: check for the right status
  if (xhr.readyState === XMLHTTPReadyState_COMPLETE) {
    if (xhr.status == "200") {
      //console.log(xhr.response);
      let result = JSON.parse(xhr.response);
      result.forEach(el => {
        console.table(el);
        app.append(el);
      });

    } else {
      console.error(xhr.statusText);
    }
  }
};

// Step 3 create a `GET` request and use the url from line 3
xhr.open("GET", url, true);
xhr.timeout = 2000;
xhr.ontimeout = () => {
  console.log("error");
};

xhr.send();

// Step 4: display the response on the page. Don't forget to deserialize
// the JSON into a JavaScript object
//console.log(result);
