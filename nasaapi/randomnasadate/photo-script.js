// This is for the picture popups in the Photos page - commonly called a lightbox

//creates element of type div - styled in CSS to be a grey box
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.photo') //selects all images with 'photo' tags

// pops up the box when a picture is clicked
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')

        // adds clicked image to the box
        const img = document.createElement('img')
        img.src = image.src
        img.alt = image.alt

        //removes previously clicked image from box
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img)
    });
});

// removes the box when clicking outside of it
lightbox.addEventListener('click', e => {
    //only click outside of image in background to close
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
});
