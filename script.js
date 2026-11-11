// ==================================================
// 1. PERSONAL INFORMATION
// ==================================================

const birthdayPerson = "Dr. Christopher O. Etoka";


// ==================================================
// 2. BIRTHDAY MESSAGES
// CHANGE THESE MESSAGES TO YOUR OWN WORDS
// ==================================================

const messages = {

    introduction: `
        Today is more than a celebration of another year. 

        It is an opportunity to recognise a remarkable individual whose vision, 
        determination and passion continue to make a difference.

        Some people simply exist, 
        while others dedicate themselves to building something meaningful. 

        You are among those who dare to think differently,
        challenge possibilities and turn ideas into purpose. 

        Welcome to a celebration of you.
    `,

    letter: `
        Dr. Chris,

        On your special day, 
        I want to take a moment to celebrate 
        you beyond the usual birthday wishes. 

        Your journey, vision and determination deserve recognition. 
        Founding an organisation like X Mind Engineering is a reflection 
        of a mind that sees possibilities beyond the ordinary 
        and understands the importance of creating opportunities 
        and contributing to something bigger than oneself. 

        Leadership is not simply about having an idea; 
        it is about having the courage to pursue it, 
        the patience to nurture it and the commitment to see it grow. 

        May you never lose the curiosity that fuels your ideas, 
        the courage that sustains your vision or 
        the passion that inspires your work. 

        As you begin another chapter, 
        may new opportunities find you, 
        may your efforts yield meaningful results, 
        and may everything you are working towards gradually become a reality. 

        Happy Birthday. 
        May this new year bring you greater wisdom, 
        fulfilment, remarkable achievements and reasons to be grateful.
    `,

    secret: `
        
    Life will not always go as planned.
    Some days will bring clarity, others will bring questions.
    Through every season, remember to stay true to yourself.

    Never allow the demands of life to make you forget
    to live, to laugh, to appreciate the little things
    and to find joy in simply being.

    You deserve a life that is not only successful,
    but also peaceful, meaningful and fulfilling.

    May the years ahead be kind to you.
    `,

    final: `
        HAPPY BIRTHDAY, VISIONARY! 

        To the founder of X Mind Engineering, 
        a man of ideas, ambition and purpose. 

        May this new chapter bring bigger opportunities, 
        greater accomplishments, meaningful collaborations 
        and an impact that extends far beyond what you can currently imagine. 

        May your vision never lack direction, 
        and may your efforts never lack reward. 

        Here's to another year of thinking boldly, 
        building intentionally and achieving remarkably.
        Happy Birthday! 🥂 
        DR. CHRISTOPHER O. ETOKA    `

};


// ==================================================
// 3. ADD YOUR PHOTOGRAPHS HERE
// ==================================================

// IMPORTANT:
// Put every photograph inside the images folder.
// Use the exact filename below.
//
// You can add as many photographs as you want.

const photos = [

    {
        src: "images/Etop1.jpeg",
        caption: "A mind filled with vision and possibilities."
    },

    {
        src: "images/Etop2.jpeg",
        caption: "A moment of inspiration."
    },

    {
        src: "images/Etop3.jpeg",
        caption: "Behind every great vision is a determined individual."
    },

    {
        src: "images/Etop4.jpeg",
        caption: "Some moments are simply priceless."
    },

    {
        src: "images/Etop5.jpeg",
        caption: "Another beautiful chapter."
    },

    {
        src: "images/Etop6.jpeg",
        caption: "Every milestone tells a story of dedication."
    },

    {
        src: "images/Etop7.jpeg",
        caption: "A little reminder of how special you are."
    },

    {
        src: "images/Etop8.jpeg",
        caption: "Forever worth celebrating."
    },

    {
        src: "images/Etop9.jpeg",
        caption: "The person behind the vision."
    },

     {
        src: "images/Etop10.jpeg",
        caption: "A journey defined by purpose, growth and resilience."
    },

     {
        src: "images/Etop11.jpeg",
        caption: "Excellent is not by accident; it is a commitment."
    },

     {
        src: "images/Etop12.jpeg",
        caption: "A life of purpose deserves to be celebrated."
    },

     {
        src: "images/Etop13.jpeg",
        caption: "More achievements, greater impact and endless possibilities."
    }
];


// ==================================================
// 4. ADD YOUR VIDEOS HERE
// ==================================================

const videos = [

    {
        src: "videos/Etov1.mp4",
        caption: "Every moment contributes to the story."
    },

    {
        src: "videos/Etov2.mp4",
        caption: "A glimpse into the person behind the purpose."
    },

    {
        src: "videos/Etov3.mp4",
        caption: "Celebrating the man, the visionary and engineer of the mind."
    }

];


// ==================================================
// 5. BOOK VARIABLES
// ==================================================

let pageFlip = null;

const intro = document.getElementById("cinematicIntro");

const bookSection = document.getElementById("bookSection");

const navigation = document.getElementById("navigation");

const pageCounter = document.getElementById("pageCounter");

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");


// ==================================================
// 6. PERSONALIZE THE NAMES
// ==================================================

document.getElementById("cinematicName").textContent = birthdayPerson;


// ==================================================
// 7. HTML PAGE TEMPLATES
// ==================================================

function createIntroductionPage() {

    return `

        <div class="page">

            <div class="page-content">

                <span class="page-number">01</span>

                <span class="luxury-label">A SPECIAL DAY</span>

                <h2>Today Is All About You</h2>

                <div class="gold-line"></div>

                <p>${messages.introduction}</p>

                <p class="signature">
                    Happy Birthday ❤️
                </p>

            </div>

        </div>

    `;

}


// ==================================================
// 8. SINGLE PHOTO PAGE
// ==================================================

function createPhotoPage(photo, index) {

    return `

        <div class="page photo-page">

            <div class="page-content">

                <span class="page-number">
                    MEMORY ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="luxury-label">
                    A MOMENT TO REMEMBER
                </span>

                <h2>Etoka O. Etoka</h2>

                <div class="gold-line"></div>

                <div class="photo-frame">

                    <img
                        src="${photo.src}"
                        alt="Birthday memory ${index + 1}"
                    >

                </div>

                <p class="caption">
                    ${photo.caption}
                </p>

            </div>

        </div>

    `;

}


// ==================================================
// 9. THREE-PHOTO MAGAZINE COLLAGE
// ==================================================

function createCollagePage(group, index) {

    const images = group.map(photo => `

        <img
            src="${photo.src}"
            alt="Birthday memory"
        >

    `).join("");

    return `

        <div class="page collage-page">

            <div class="page-content">

                <span class="luxury-label">
                    THE MEMORY COLLECTION
                </span>

                <h2>Little Pieces of Happiness</h2>

                <div class="gold-line"></div>

                <div class="collage-grid">

                    ${images}

                </div>

                <p class="caption">
                    ${group[0].caption}
                </p>

            </div>

        </div>

    `;

}


// ==================================================
// 10. VIDEO PAGE
// ==================================================

function createVideoPage(video, index) {

    return `
        <div class="page video-page">

            <div class="page-content">

                <span class="luxury-label">
                    MEMORIES
                </span>

                <h2>${video.caption}</h2>

                <div class="gold-line"></div>

                <div class="video-frame">

                    <video
                        controls
                        playsinline
                        preload="metadata"
                        onplay="stopBirthdayMusic()"
                        onended="resumeBirthdayMusic()"
                    >
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support video playback.
                    </video>

                </div>

                <p class="caption">
                    A moment worth remembering.
                </p>

            </div>

        </div>
    `;
}


// ==================================================
// 11. PERSONAL LETTER PAGE
// ==================================================

function createLetterPage() {

    return `

        <div class="page letter-page">

            <div class="page-content">

                <span class="luxury-label">
                    WORDS FROM THE HEART
                </span>

                <h2>Beyond the achievements, the titles and the vision</h2>

                <div class="gold-line"></div>

                <div class="letter-content">

                    <p>${messages.letter}</p>

                    <p class="signature">
                        Today is about celebrating you. ❤️
                    </p>

                </div>

            </div>

        </div>

    `;

}


// ==================================================
// 12. SECRET LETTER PAGE
// ==================================================

function createSecretPage() {

    return `
        <div class="page secret-page">

            <div class="page-content">

                <span class="luxury-label">
                    A LITTLE SECRET
                </span>

                <h2>There's Something More...</h2>

                <div class="gold-line"></div>

                <p>
                    Some words deserve a more private moment.
                    Here's something I wanted you to read.
                </p>

                <button onclick="openSecretLetter()">
                    OPEN YOUR SECRET LETTER 💌
                </button>

            </div>

        </div>
    `;

}


// ==================================================
// 13. FINAL BIRTHDAY PAGE
// ==================================================

function createFinalPage() {

    return `

        <div class="page final-page">

            <div class="page-content final-content">

                <div class="cake">🎂</div>

                <span class="luxury-label">
                    YOUR NEW CHAPTER
                </span>

                <h1>Happy Birthday</h1>

                <h2>${birthdayPerson}</h2>

                <div class="gold-line"></div>

                <p>${messages.final}</p>

                <h3>YOU ARE LOVED ✨</h3>

                <button onclick="showFinalSurprise()">

                    ONE MORE SURPRISE ❤️

                </button>

            </div>

        </div>

    `;

}


// ==================================================
// 14. BUILD THE COMPLETE BOOK
// ==================================================

function buildBirthdayBook() {

    const book = document.getElementById("book");

    let pages = [];


    // COVER PAGE

    pages.push(`

        <div class="page cover">

            <div class="cover-inner">

                <span class="luxury-label">
                    A BOOK OF MEMORIES
                </span>

                <h1>
                    Happy<br>Birthday
                </h1>

                <div class="gold-line"></div>

                <h2>${birthdayPerson}</h2>

                <p>
                    Yea.....You, 
                    Made just for you.
                </p>

                <span class="cover-footer">
                    A SPECIAL EDITION
                </span>

            </div>

        </div>

    `);


    // INTRODUCTION

    pages.push(createIntroductionPage());


    // PHOTO MAGAZINE PAGES

    // First photograph gets its own large portrait page.

   


    // Remaining photographs are arranged in groups of three.

    photos.forEach((photo) => {

    pages.push(createPhotoPage(photo));

    });


    // VIDEO PAGES

    videos.forEach((video, index) => {

        pages.push(createVideoPage(video, index));

    });


    // PERSONAL LETTER

    pages.push(createLetterPage());


    // SECRET LETTER

    pages.push(createSecretPage());


    // Keep the book's page count compatible with the two-page layout.
    // The cover is a single page, followed by pairs of pages.

    if (pages.length % 2 === 0) {

        pages.splice(
            pages.length - 1,
            0,
            `<div class="page blank-page"></div>`
        );

    }


    // FINAL PAGE

    pages.push(createFinalPage());


    // INSERT ALL PAGES

    book.innerHTML = pages.join("");

}


// ==================================================
// 15. OPEN THE ENVELOPE
// ==================================================

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    const button = document.getElementById("openEnvelopeButton");

    envelope.classList.add("open");

    button.style.display = "none";

    setTimeout(() => {

        document.getElementById("envelopeContainer").style.display = "none";

        document.getElementById("welcomeMessage").style.display = "block";

    }, 1800);

}


// ==================================================
// 16. OPEN THE BIRTHDAY BOOK
// ==================================================

function openBook() {

    if (typeof St === "undefined" || !St.PageFlip) {

        alert(
            "The page-flipping library could not load. Please check your internet connection and refresh the page."
        );

        return;

    }


    buildBirthdayBook();


    intro.style.display = "none";

    bookSection.style.display = "flex";

    navigation.style.display = "flex";


    pageFlip = new St.PageFlip(

        document.getElementById("book"),

        {

            width: 350,

            height: 500,

            size: "stretch",

            minWidth: 280,

            maxWidth: 700,

            minHeight: 400,

            maxHeight: 1000,

            maxShadowOpacity: 0.5,

            showCover: true,

            mobileScrollSupport: false,

            flippingTime: 1000,

            usePortrait: true

        }

    );


    pageFlip.loadFromHTML(

        document.querySelectorAll("#book .page")

    );


    pageFlip.on("flip", function(event) {

    updatePageCounter(event.data);

    // STOP MUSIC WHEN THE FINAL PAGE IS REACHED
    const totalPages = pageFlip.getPageCount();

    if (event.data === totalPages - 1) {

        music.pause();
        music.currentTime = 0;

        musicButton.textContent = "♫ MUSIC OFF";

    }

});


    updatePageCounter(0);


    // START MUSIC AFTER USER INTERACTION

    music.play().then(() => {

        musicButton.textContent = "♫ MUSIC ON";

    }).catch(() => {

        musicButton.textContent = "♫ MUSIC OFF";

    });

}


// ==================================================
// 17. NEXT PAGE
// ==================================================

function nextPage() {

    if (pageFlip) {

        pageFlip.flipNext();

    }

}


// ==================================================
// 18. PREVIOUS PAGE
// ==================================================

function previousPage() {

    if (pageFlip) {

        pageFlip.flipPrev();

    }

}


// ==================================================
// 19. PAGE COUNTER
// ==================================================

function updatePageCounter(index) {

    const total = pageFlip.getPageCount();

    if (index === 0) {

        pageCounter.textContent = "COVER";

    } else {

        pageCounter.textContent =
            "PAGE " + index + " / " + (total - 1);

    }

}


// ==================================================
// 20. BACKGROUND MUSIC
// ==================================================

function toggleMusic() {

    if (music.paused) {

        music.play().then(() => {

            musicButton.textContent = "♫ MUSIC ON";

        }).catch(() => {

            musicButton.textContent = "♫ MUSIC OFF";

        });

    } else {

        music.pause();

        musicButton.textContent = "♫ MUSIC OFF";

    }

}


// ==================================================
// 21. SECRET LETTER
// ==================================================

function openSecretLetter() {

    const modal = document.getElementById("secretModal");

    const message = document.getElementById("secretMessage");

    message.innerHTML = messages.secret.replace(/\n/g, "<br>");

    modal.style.display = "flex";

}

function closeSecretLetter() {

    const modal = document.getElementById("secretModal");

    modal.style.display = "none";

}

// ==================================================
// 22. FINAL SURPRISE
// ==================================================

function showFinalSurprise() {

    document.getElementById("finalSurprise").style.display = "flex";

}


function closeFinalSurprise() {

    document.getElementById("finalSurprise").style.display = "none";

}


// ==================================================
// 23. GOLDEN PARTICLE ANIMATION
// ==================================================

const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");

let particles = [];


function resizeCanvas() {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

}


window.addEventListener("resize", resizeCanvas);

resizeCanvas();


for (let i = 0; i < 70; i++) {

    particles.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + 0.5,

        speed: Math.random() * 0.5 + 0.2,

        opacity: Math.random()

    });

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p => {

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(214,181,109,${p.opacity})`;

        ctx.fill();

        p.y -= p.speed;

        if (p.y < 0) {

            p.y = canvas.height;

            p.x = Math.random() * canvas.width;

        }

    });


    requestAnimationFrame(animateParticles);

}


animateParticles();


let musicWasPlayingBeforeVideo = false;

function stopBirthdayMusic() {
    const music = document.getElementById("backgroundMusic");

    if (music) {
        musicWasPlayingBeforeVideo = !music.paused;
        music.pause();
    }
}

function resumeBirthdayMusic() {
    const music = document.getElementById("backgroundMusic");

    if (music && musicWasPlayingBeforeVideo) {
        musicWasPlayingBeforeVideo = false;
        music.play().catch(error => {
            console.log("Music could not resume automatically.");
        });
    }
}