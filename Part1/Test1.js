function my_test1() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/main/');
    xhr.setRequestHeader("Usecase", "Testing_Server");
    xhr.responseType = 'json';
    xhr.onload = function(e) {
        if (this.status == 200) {
            console.log('response', this.response); // JSON response
        }
    };
    xhr.send();



}









