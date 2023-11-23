/* Profile Object */
const myProject = {
    name: 'Keillor Behrmann',
    photo: "images/IMG_Keillor1.JPG",
    favoriteFoods: [
        'Bbq',
        'Tacos',
        'Rolls',
        'Steak and Potatoes',
    ],
    hobbies: [
        'Hiking',
        'Playing with my Kids',
        'Dating my Wife',
        'Watch Youtube',
    ],
};

/* Populate Profile Object with placesLived objects */
myProject['placesLived'] = [
    {
        place: 'Arizona',
        length: '18 years',
    },
    {
        place: 'LasVegas',
        length: '4 years',
    },
    {
        place: 'Idaho',
        length: '4 years',
    },
    {
        place: 'Utah',
        length: '5 years',
    },
];

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProject.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProject.photo;

/* Favorite Foods List */
myProject.favoriteFoods.forEach(function (food) {
    let newLiElement = document.createElement('li');
    newLiElement.textContent = food;
    document.querySelector('#favorite-foods').appendChild(newLiElement);
});

/* Hobbies List */
myProject.hobbies.forEach(function (hobby) {
    let newLiElement2 = document.createElement('li');
    newLiElement2.textContent = hobby;
    document.querySelector('#hobbies').appendChild(newLiElement2);
});

/* Places Lived DataList */
function placesLivedList(placesLivedArray) {
    const placesLength = placesLivedArray.map((pl) =>
        `<dt><b>${pl.place}</b></dt>
        <dd><sup><small>${pl.length}</small></sup>`
    );
    document.querySelector('#places-lived').innerHTML = placesLength.join("");
}

placesLivedList(myProject.placesLived);
