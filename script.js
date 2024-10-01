let slide = 1;
const bg = document.getElementById('bg');
const heading = document.querySelector('#discover :nth-child(1)');
const text = document.querySelector('#discover :nth-child(2)');

function prevSlide() {
    if(slide > 1){
        slide = slide - 1;
        initializeSlide();
        return slide;
    
    }
}
function nextSlide() {
    if(slide < 3){
        slide = slide + 1;
        initializeSlide();
        return slide;    
    }
}
function toggleMenu(){
    document.getElementById('mobile-menu').classList.toggle('active');
}
function initializeSlide(){
    if(slide === 1){
        bg.src = 'images/desktop-image-hero-1.jpg';
        heading.textContent = 'Discover innovative ways to decorate';
        text.textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
    }
    else if(slide === 2){
        bg.src = 'images/desktop-image-hero-2.jpg';
        heading.textContent = 'We are available all across the globe';
        text.textContent = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
    }
    else if (slide === 3){
        bg.src = 'images/desktop-image-hero-3.jpg';
        heading.textContent = 'Manufactured with the best materials';
        text.textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }
}

