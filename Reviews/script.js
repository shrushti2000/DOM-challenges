const reviews = [{
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
const personName = document.querySelector("#name");
const job = document.querySelector("#job");
const img = document.querySelector("#image");
const text = document.querySelector("#text");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const idperson = document.querySelector("#idd");
const btn = document.querySelector("#btn")
var count = 0;

function getNextReview() {
    if (count < reviews.length - 1) {
        count++;
        showPerson();
    } else {
        count = 0;
        showPerson();
    }
}

function getPrevious() {
    if (count > 0) {
        count--;
        showPerson();
    } else {
        count = 0;

        showPerson();
    }
}

function showPerson() {
    const item = reviews[count];
    console.log(count);
    console.log(item);
    idperson.innerHTML = item.id;
    personName.innerHTML = item.name;
    job.innerHTML = item.job;
    img.src = item.img;
    text.innerHTML = item.text;
}

function getRandom() {
    var no = Math.floor(Math.random() * reviews.length)
    count = no;
    showPerson()
}

window.addEventListener("DOMContentLoaded", function() {
    console.log("doc loaded");
    showPerson();
});
next.addEventListener("click", getNextReview);
prev.addEventListener("click", getPrevious);
btn.addEventListener("click", getRandom)