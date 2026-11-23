let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.container .container-image .image');

searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none');

    let value = searchBox.value.toLowerCase();

    images.forEach(filter => {
        let title = filter.getAttribute('data-title').toLowerCase();

        if(title.includes(value)){
            filter.style.display = "block";
        }

        if(searchBox.value == ''){
            filter.style.display = "block";
        }
    })
}