const unreadCards = document.querySelectorAll('.unread');
const markAll = document.getElementById('mark');

// marks specific cards read when clicking on them

unreadCards.forEach((cards) => {

cards.addEventListener('click', () => {

    cards.classList.remove('unread');
    updateNumber();


    })
})

// Marks all read when clicking mark all button // 

markAll.addEventListener('click', () => {


    unreadCards.forEach((cards) => {


        cards.classList.remove('unread');
        document.querySelector('#noti-btn').innerText = '0';

    })
})


// updates notification counter when clicking unread cards //

function updateNumber() {

    let number = document.querySelectorAll('.unread').length;
    document.querySelector('#noti-btn').innerText = number;
}
