window.onload = () => {
    addHeadingOne();
    addImage("Bitcoin.svg.png");
    addUnorderedList(listItems);

    countDown();
}

const addHeadingOne = () => {
    let heading = document.createElement("h1");
    heading.id = "name";
    heading.innerText = "Giorgi Chiaberashvili";
    heading.className = "name";
    document.body.append(heading);
}

const createListItem = (item) => {

    let listItem = document.createElement("li");
    listItem.innerText = item;
    listItem.className = "detail";
    return listItem;

}

const listItems = [
    "Chocolate",
    "Chocolate Ice-Cream",
    "My Camera",
    "My Family"
];

const addUnorderedList = (items) => {

    let unorderedList = document.createElement("ul");
    unorderedList.className = "my-details";
    for (let i = 0; i < items.length; i++) {
        unorderedList.append(createListItem(items[i]));
    }
    unorderedList.append(createClock());
    document.body.append(unorderedList);
}

const createClock = () => {

    let clockContainer = document.createElement('div');
    let firstHalf = document.createElement('p');
    let secondHalf = document.createElement('p');

    firstHalf.innerText = "I live in Georgia, Tbilisi and it is ";
    secondHalf.innerText = " here.";

    let clock = document.createElement('div');
    clock.id = "clock";
    setInterval(
        () => clock.innerText = new Date().toLocaleTimeString(), 1000
    );

    clockContainer.append(firstHalf, clock, secondHalf);

    return clockContainer;
}

const addImage = (source) => {
    let image = document.createElement("img");
    image.src = source;
    document.body.append(image);

}

const countDown = () => {

    let message = document.createElement("p");
    message.innerText = "Time till my birthday: ";
    document.body.append(message);

    let secondHalf = document.createElement("p");
    document.body.append(secondHalf);

    let birthday = new Date(2023, 4, 7).getTime();

    setInterval(function () {

        let now = new Date().getTime();
        let distance = birthday - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        secondHalf.innerText = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

    }, 1000);



}
