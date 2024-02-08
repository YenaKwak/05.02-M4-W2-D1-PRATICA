const apiKey = 'fJ5sBN4g4kE8VwQOKahCmXDU6MRk1gBjTwiPxzbCa3Q0UD2Avp69sqlw';

document.getElementById('Cats').addEventListener('click', function(event){
    fetchCatsImages();
    console.log(event);
});

document.getElementById('Dogs').addEventListener('click', function(event){
    event.preventDefault(); // 기본 이벤트 방지
    fetchDogsImages(); // 'dog' 이미지 검색 및 표시 함수 호출
});


function fetchCatsImages(){
    const url = 'https://api.pexels.com/v1/search?query=cat';

    fetch(url, {
        method: 'GET',
        headers: {
          Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data =>{
        displayImages(data.photos);
    })
    .catch(error => {
        console.error('Error fetching images:', error);
      });
    }




    function fetchDogsImages() {
        const url = 'https://api.pexels.com/v1/search?query=dog';
    
        fetch(url, {
            method: 'GET',
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            displayImages(data.photos);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
    }
    

    function displayImages(images) {
        const container = document.getElementById('image-container');
        container.innerHTML = ''; // 컨테이너 초기화
        container.parentElement.classList.remove('d-none'); // 이미지 컨테이너를 보이게 설정
    
        const row = document.createElement('div');
        row.classList.add('row', 'g-3'); 
        container.appendChild(row);
    
        images.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-12'); 
            card.innerHTML = `
                <div class="card h-100%">
                    <img src="${image.src.original}" class="card-img-top" alt="${image.alt}">
                </div>
            `;
            row.appendChild(card);
        });
    }



    
    document.getElementById('homeButton').addEventListener('click', function(event){
        const container = document.getElementById('image-container'); 
        container.parentElement.classList.add('d-none');
    });