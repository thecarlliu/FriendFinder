var list = [
    {
        id: "Q1",
        question: "How early do you get up in the morning?",
        answers: ["Crack of dawn", "Early", "9am", "Later", "I don't have enough alarms"],
        images: ["../public/images/choices/q1/dawn.jpg","../public/images/choices/q1/early.jpg","../public/images/choices/q1/nineam.jpg","../public/images/choices/q1/later.jpg","../public/images/choices/q1/alarms.jpg"]
    },
    {
        id: "Q2",
        question: "When do you go to bed?",
        answers: ["Before the monsters come out","Before midnight","Later on weekends","1AM","I don't"],
        images: ["../public/images/choices/q2/monsters.jpg","../public/images/choices/q2/beforemidnight.jpg","../public/images/choices/q2/laterweekends.jpg","../public/images/choices/q2/oneam.jpg","../public/images/choices/q2/nosleep.jpg"]
    },
    {
        id: "Q3",
        question: "Favorite kind of movie?",
        answers: ["Comedy","Action","History","Sci-Fi","DEMONS DEMONS DEMONS"],
        images: ["../public/images/choices/q3/comedy.jpg","../public/images/choices/q3/action.jpg","../public/images/choices/q3/history.jpg","../public/images/choices/q3/scifi.jpg","../public/images/choices/q3/demons.jpg"]
    },
    {
        id: "Q4",
        question: "Favorite alcoholic beverage?",
        answers: ["Hennessy", "Tequila","Whiskey", "Fireball","Schnapps", "Wine", "Beer", "Sidewalk Slammer", "Cider", "Milk", "Water"],
        images: ["../public/images/choices/q4/henny.jpg","../public/images/choices/q4/tequila.jpg","../public/images/choices/q4/whiskey.jpg","../public/images/choices/q4/fireball.jpg","../public/images/choices/q4/schnapps.jpg","../public/images/choices/q4/wine.jpg","../public/images/choices/q4/beer.jpg","../public/images/choices/q4/slammer.jpg","../public/images/choices/q4/cider.jpg","../public/images/choices/q4/milk.jpg","../public/images/choices/q4/water.jpg"]
    },
    {
        id: "Q5",
        question: "Choose a gainz meal: ",
        answers: ["Dark Matter", "Protein Powder", "Chicken and Broccoli", "Chicken Pasta", "Chicken & Biscuits", "Fried Chicken", "Steak", "Mac & Cheese", "Tuna", "Hawaiian Food"],
        images: ["../public/images/choices/q5/darkmatter.jpg","../public/images/choices/q5/protein.jpg","../public/images/choices/q5/chickenbroccoli.jpg","../public/images/choices/q5/chickenpasta.jpg","../public/images/choices/q5/popeyes.jpg","../public/images/choices/q5/kfc.jpg","../public/images/choices/q5/steak.jpg","../public/images/choices/q5/mac.jpg","../public/images/choices/q5/tuna.jpg","../public/images/choices/q5/hawaiian.jpg"]
    },
    {
        id: "Q6",
        question: "Favorite lift?",
        answers: ["Cleans", "Front Squat", "Back Squat", "Hamstring Curls", "Pull-ups", "Cable Rows", "Bench", "Curls"],
        images: ["../public/images/choices/q6/cleans.jpg","../public/images/choices/q6/frontsquat.jpg","../public/images/choices/q6/backsquat.jpg","../public/images/choices/q6/hamstringcurls.jpg","../public/images/choices/q6/pullups.jpg","../public/images/choices/q6/cablerows.jpg","../public/images/choices/q6/bench.jpg","../public/images/choices/q6/curls.jpg"]
    },
    {
        id: "Q7",
        question: "Choose a Major: ",
        answers: ["Neuroscience", "Chemistry", "Physics", "Computer Science", "Economics", "Anthropology", "History","Psychology"],
        images: ["../public/images/choices/q7/neuro.jpg","../public/images/choices/q7/chem.jpg","../public/images/choices/q7/physics.jpg","../public/images/choices/q7/compsci.jpg","../public/images/choices/q7/econ.jpg","../public/images/choices/q7/anthro.jpg","../public/images/choices/q7/history.jpg","../public/images/choices/q7/psychology.jpg"]
    },
    {
        id: "Q8",
        question: "What would you rather do?",
        answers: ["Skiing", "Hockey", "Anything outside", "Making gainz", "Roasting People", "Playing instruments", "Reading", "Online Strategy Games","Netflix", "Napping", "Gargling Mouthwash"],
        images: ["../public/images/choices/q8/ski.jpg","../public/images/choices/q8/hockey.jpg","../public/images/choices/q8/outside.jpg","../public/images/choices/q8/gainz.jpg","../public/images/choices/q8/roast.jpg","../public/images/choices/q8/music.jpg","../public/images/choices/q8/reading.jpg","../public/images/choices/q8/onlinegame.jpg","../public/images/choices/q8/netflix.jpg","../public/images/choices/q8/nap.jpg","../public/images/choices/q8/mouthwash.jpg"]
    },
    {
        id: "Q9",
        question: "Choose a book: ",
        answers: ["When Breath Becomes Air by Paul Kalanithi", "Airman by Eoin Colfer","Ishmael by Daniel Quinn","The Great Gatsby by F. Scott Fitzgerald","The Catcher in the Rye by J. D. Salinger","Dragon Teeth by Michael Crichton", "A Storm of Swords by George R.R. Martin", "The Demon King by Cinda Williams Chima","What's a book?","The Lorax by Dr.Seuss","The Bible"],
        images: ["../public/images/choices/q9/kalanithi.jpg","../public/images/choices/q9/colfer.jpg","../public/images/choices/q9/quinn.jpg","../public/images/choices/q9/fitzgerald.jpg","../public/images/choices/q9/salinger.jpg","../public/images/choices/q9/crichton.jpg","../public/images/choices/q9/martin.jpg","../public/images/choices/q9/chima.jpg","../public/images/choices/q9/nobook.jpg","../public/images/choices/q9/seuss.jpg", "../public/images/choices/q9/bible.jpg"]
    },
    {
        id: "Q10",
        question: "Choose an anthem: ",
        answers: ["Alright - Kendrick Lamar", "Slippery - Migos", "Excuse Me - A$AP Rocky", "Sunday Candy - Chance the Rapper",  "Public Service Announcement - Jay Z","Bohemian Rhapsody - Queen", "The Distance - Cake", "Rose Tattoo - Dropkick Murphys", "Sweet Home Alabama - Lynyrd Skynyrd", "The National Anthem", "Shake your Rump to the Funk - Bar Kays"],
        images: ["../public/images/choices/q10/alright.jpg","../public/images/choices/q10/slippery.jpg","../public/images/choices/q10/excuseme.jpg","../public/images/choices/q10/sundaycandy.jpg","../public/images/choices/q10/publicservice.jpg","../public/images/choices/q10/bohemianrhapsody.jpg","../public/images/choices/q10/thedistance.jpg","../public/images/choices/q10/rosetattoo.jpg","../public/images/choices/q10/sweethome.jpg","../public/images/choices/q10/nationalanthem.jpg","../public/images/choices/q10/shakeyourrump.jpg"]
    }
];

var questions = {
    list: list
};

module.exports = questions;