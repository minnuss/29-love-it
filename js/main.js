const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('.times');


// // CREATING DOUBLE CLICK FUNCTION WITH SETTIMEOUT
// let dblClick = 0;
// let clickCount = 0;
// loveMe.addEventListener('click', (e) => {
//     // count clicks
//     clickCount++;

//     // if click is only 1 after 400ms, reset click to 0, if there are 2 clicks, count that as doubleclick
//     if (clickCount === 1) {
//         time = setTimeout(() => {
//             clickCount = 0;
//         }, 400);
//     } else if (clickCount === 2) {
//         dblClick++
//         clearTimeout(time);
//         clickCount = 0;
//     }

//     // console.log(clickCount)
//     console.log('dblClick', dblClick)
// })

// ANOTHER METHOD OF CREATING DOUBLE CLICK WITH TIME
let time = 0;
let dblClickAgain = 0;
loveMe.addEventListener('click', (e) => {
    // if time is 0, create new time (that is 1 click)
    if (time === 0) {
        time = new Date().getTime();
    } else {
        // if that new time is less then one more new time in 500ms, count that as doubleclick
        if ((new Date().getTime() - time) < 500) {
            dblClickAgain++
            // calling function that creates heart
            createHearth(e)
            time = 0;
        } else {
            time = new Date().getTime();
        }
    }
    // console.log('dblClickAgain', dblClickAgain)
    // console.log(time)
})

function createHearth(e) {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // getting the mouse click position
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x, y)

    // getting the left and top position of image
    let imgPosX = loveMe.getBoundingClientRect().left
    let imgPosY = loveMe.getBoundingClientRect().top
    // console.log(imgPosX, imgPosY)

    // getting the click positions inside of image
    let insideX = x - imgPosX;
    let insideY = y - imgPosY;
    // console.log(insideX, insideY)

    heart.style.top = `${insideY}px`
    heart.style.left = `${insideX}px`

    loveMe.appendChild(heart);
    times.textContent = dblClickAgain

    // removing all the hearts that are created after 2s
    setTimeout(() => {
        heart.remove()
    }, 2000);
}




