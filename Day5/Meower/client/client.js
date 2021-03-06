const API_URL = 'http://192.168.99.100:3000/meows';

const loading = document.querySelector('.loading');
loading.style.display = '';

const form = document.querySelector('form');
const errorElement = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const meow = {
        name,
        content
    };

    errorElement.style.display = 'none';
    loading.style.display = '';
    form.style.display = 'none';

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(meow),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(createdMeow => {
        form.reset();

        setTimeout(() => {
            loading.style.display = 'none';
            form.style.display = '';
        }, 10*1000);

        listAllMeows();
    }).catch(errorMessage => {
        form.style.display = '';
        errorElement.textContent = errorMessage;
        errorElement.style.display = '';
        loadingElement.style.display = 'none';
    });
});

const meowsElement = document.querySelector('.meows');
function listAllMeows(){
    meowsElement.innerHTML = '';

    fetch(API_URL, {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(meows => {

        meows.forEach(meow =>{
            const div = document.createElement('div');
            const header = document.createElement('h3');
            header.textContent = meow.name;
            
            const content = document.createElement('p');
            content.textContent = meow.content;

            const date = document.createElement('small');
            date.textContent = new Date(meow.created);
            
            div.appendChild(header);
            div.appendChild(content);
            div.appendChild(date);
            meowsElement.appendChild(div);
            
        });

        loading.style.display = 'none';
    });
}
listAllMeows();