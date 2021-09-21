const infor = document.querySelector('.infor');
const list = document.querySelectorAll('li');
const colors = ['#19334d', '#52b69a', '#0d47a1', 'bcfb88', 'e9edc9', '#22333b', '#0c0b10', '#010017', '#115d6c', '#000624', '#003366', '#101b41', '#004946', '#001f3d', '#332d2d'];
const content = document.querySelector('.content');
let result = ''
const manImage = ['4043260-avatar-male-man-portrait_113269.png', 'iconfinder-3-avatar-2754579_120516.png', 'iconfinder-10-avatar-2754575_120521.png', 'iconfinder-8-avatar-2754583_120515.png'];
const womanImage = ['german-pngrepo-com (1).png','tourist.png','4043247-1-avatar-female-portrait-woman_113261.png','4043261-artist-avatar-marilyn-monroe_113252.png'];
let namePer = [];
let address = [];
let email = [];
let phoneNo = [];
let next = document.querySelector('button');

let counter = 0;
let image = document.querySelector('img');
const data = async () => {
    try {
        const datas = await fetch('https://randomuser.me/api/');
        const parsedResult = await datas.json();
        console.log(parsedResult);
        if (parsedResult.results[0].gender === 'female') {
            image.src = `${Image}/${womanImage[Math.floor(Math.random() * womanImage.length)]}`;
            updateInformation(parsedResult);
        }
        else {
            image.src = `${Image}/${womanImage[Math.floor(Math.random() * womanImage.length)]}`;
            updateInformation(parsedResult)
        }
    }
    catch (e) {
        infor.textContent = 'User Information is not available.Come back later!';
    }
}

function updateInformation(parsedResult) {
    phoneNo.push(parsedResult.results[0].cell);
    email.push(parsedResult.results[0].email);
    let names = Object.values(parsedResult.results[0].name);
    for (let n of names) {
        namePer.push(n);
    }
    address.push(parsedResult.results[0].location.street);
    address.push(parsedResult.results[0].location.city);
    address.push(parsedResult.results[0].location.state);
    address.push(parsedResult.results[0].location.country);
}
const events=async()=> {
    await data();
    list[0].addEventListener('mouseenter', function (result) {
        infor.innerHTML = `My name is <p>${namePer.slice(1,).join(' ')}</p>`;
        list[0].style.transform = 'translateY(10px)';
        list[0].style.transition = '2s transform ease';
        list[1].style.transform = 'translateY(-5px)';
        list[3].style.transform = 'translateY(-5px)';
        list[2].style.transform = 'translateY(-5px)';
    })
    list[1].addEventListener('mouseenter', function () {
        infor.innerHTML = `My email address is <p>${email.join('')}</p>`;
        list[1].style.transform = 'translateY(10px)';
        list[1].style.transition = '2s transform ease';
        list[0].style.transform = 'translateY(-5px)';
        list[3].style.transform = 'translateY(-5px)';
        list[2].style.transform = 'translateY(-5px)';

    })
    list[2].addEventListener('mouseenter', function () {
        infor.innerHTML = `My Phone No is <p>${phoneNo.join('')}</p>`;
        list[2].style.transform = 'translateY(10px)';
        list[2].style.transition = '2s transform ease';
        list[1].style.transform = 'translateY(-5px)';
        list[3].style.transform = 'translateY(-5px)';
        list[0].style.transform = 'translateY(-5px)';
    })
    list[3].addEventListener('mouseenter', function () {
        let add = Object.values(address[0]);
        let street_name = address[1];
        let state = address[2];
        let country = address[3];
        infor.innerHTML = `My Address is <p>${add.join(', ')}, ${street_name}, ${state}, ${country}</p>`;
        list[3].style.transform = 'translateY(10px)';
        list[3].style.transition = '2s transform ease';
        list[1].style.transform = 'translateY(-5px)';
        list[0].style.transform = 'translateY(-5px)';
        list[2].style.transform = 'translateY(-5px)';
    })

}
events()
const nextE = async () => {
    content.style.animation = '';
    namePer = [];
    address = [];
    email = [];
    phoneNo = [];
    await events();
    
    infor.innerHTML = `My name is <p>${namePer.slice(1,).join(' ')}</p>`;
    content.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    content.style.animation = 'col 1.5s ease-in-out forwards';
}
next.addEventListener('click', nextE);
