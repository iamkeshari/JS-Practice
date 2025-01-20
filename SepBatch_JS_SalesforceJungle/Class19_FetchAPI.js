function loadRandomUsers(){
    fetch('https://reqres.in/api/users'), {
        method: 'GET',
    }
    .then((response) => response.json())
    .then((data) => console.log(data));
}
loadRandomUsers();