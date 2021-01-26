const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

// create individual player objects

    const jokic = {
        "last":"jokic",
        "born":"February 19, 1995",
        "height":"6ft 11in",
        "weight":"284 lbs",
        "drafted":"2014 (Rd 2 / Pick 41)",
        "college":"Mega Basket (Serbia)"
    };

    const murray = {
        "last":"murray",
        "born":"February 23, 1997",
        "height":"6ft 3in",
        "weight":"215 lbs",
        "drafted":"2016 (Rd 1 / Pick 7)",
        "college":"Kentucky"
    };

    const milsap = {
        "last":"milsap",
        "born":"February 10, 1985",
        "height":"6ft 7in",
        "weight":"257 lbs",
        "drafted":"2006 (Rd 2 / Pick 47)",
        "college":"Louisiana Tech"
    };
        
    const porter = {
        "last":"porter",
        "born":"June 29, 1998",
        "height":"6ft 10in",
        "weight":"218 lbs",
        "drafted":"2018 (Rd 1 / Pick 14)",
        "college":"Missouri"
    };
    
    const barton = {
        "last":"barton",
        "born":"January 6, 1991",
        "height":"6ft 6in",
        "weight":"281 lbs",
        "drafted":"2012 (Rd 2 / Pick 40)",
        "college":"Memphis"
    };

    const morris = {
        "last":"morris",
        "born":"June 27, 1995",
        "height":"6ft 2in",
        "weight":"183 lbs",
        "drafted":"2017 (Rd 2 / Pick 51)",
        "college":"Iowa State"
    };

    const dozier = {
        "last":"dozier",
        "born":"October 25, 1996",
        "height":"6ft 6in",
        "weight":"205 lbs",
        "drafted":"2017 (undrafted)",
        "college":"South Carolina"
    };
        
    const harris = {
        "last":"harris",
        "born":"September 14, 1994",
        "height":"6ft 4in",
        "weight":"210 lbs",
        "drafted":"2014 (Rd 1 / Pick 19)",
        "college":"Michigan State"
    };

    const bol = {
        "last":"bol",
        "born":"November 16, 1999",
        "height":"7ft 2in",
        "weight":"220 lbs",
        "drafted":"2019 (Rd 2 / Pick 44)",
        "college":"Oregon"
    };

    const green = {
        "last":"green",
        "born":"June 21, 1990",
        "height":"6ft 8in",
        "weight":"227 lbs",
        "drafted":"2012 (undrafted)",
        "college":"Alabama"
    };

    const hartenstein = {
        "last":"hartenstein",
        "born":"May 5, 1998",
        "height":"7ft 0in",
        "weight":"249 lbs",
        "drafted":"2017 (Round 2 / Pick 43)",
        "college":"Artland Dragons"
    };
        
    const campazzo = {
        "last":"campazzo",
        "born":"March 23, 1991",
        "height":"5ft 10in",
        "weight":"195 lbs",
        "drafted":"2013 (undrafted)",
        "college":"UCAM Murcia"
    };

// combine objects into big object

nuggetsData = [jokic, murray, milsap, porter, barton, morris, harris, dozier, green, hartenstein, campazzo, bol];

// create function to lookup player data given two parameters

function getPlayerData(last, prop) {
    for (var i=0; i < nuggetsData.length; i++) {
        if(nuggetsData[i].last === last) {
            return nuggetsData[i][prop] || "No such property";
        }
    }
    return "No such player";
};

// create function -> what happens when the button is clicked

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const playerName = card.dataset.description;
    
        
    // populate modal with new info

    modalInner.innerHTML = `
    <img src="./photos/${playerName}-wide.jpg"/> 
    <div>
        <p>Born: ${getPlayerData(playerName,"born")}</p>
        <p>Height: ${getPlayerData(playerName,"height")}</p>
        <p>Weight: ${getPlayerData(playerName,"weight")}</p>
        <p>Drafted: ${getPlayerData(playerName,"drafted")}</p>
        <p>College: ${getPlayerData(playerName,"college")}</p>
    </div>
    `;
    
    // show the modal
    modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
    button.addEventListener('click', 
    handleCardButtonClick)
    );

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if(isOutside) {
        closeModal();
    }
})

window.addEventListener('keydown', (event) => {
    if (event.key ==='Escape') {
        closeModal();
    }
})