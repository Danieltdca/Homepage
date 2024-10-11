// Image effect and other animations on DOMContentLoaded.
window.addEventListener('DOMContentLoaded', function() {
    const screenPosition = window.innerHeight / 1.5;

    // Function to handle visibility of elements.
    function handleScrollEffects() {
        // Select the image and the intro text.
        const img = document.querySelector('.img');
        const intro = document.querySelector('.txt_top');
        
        // Check image visibility.
        if (img) {
            const imgPosition = img.getBoundingClientRect().top;
            if (imgPosition < screenPosition) {
                img.style.opacity = '1';
                img.style.transform = 'translateY(0px)';
            }
        }

        // Check intro visibility.
        if (intro) {
            const introPosition = intro.getBoundingClientRect().top;
            if (introPosition < screenPosition) {
                intro.style.opacity = '1';
                intro.style.transform = 'translateY(0px)';
            }
        }

        // Check bio visibility for multiple elements.
        const bios = document.querySelectorAll('.intro, .my_profile');
        bios.forEach(bio => {
            const bioPosition = bio.getBoundingClientRect().top;
            if (bioPosition < screenPosition) {
                bio.style.opacity = '1';
                bio.style.transform = 'translateY(0px)';
            }
        });
    }

    // Call the function to check initial positions.
    handleScrollEffects();

    //  scroll event listener to update effects on scroll.
    window.addEventListener('scroll', handleScrollEffects);
});


