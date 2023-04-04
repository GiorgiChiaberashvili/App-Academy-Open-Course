const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here

    const seed = document.getElementsByClassName("seed")
    console.log(seed)

    // 2. Get all seedless fruit elements
    // Your code here

    const seedless = document.getElementsByClassName("seedless")
    console.log(seedless)

    // 3. Get first seedless fruit element
    // Your code here

    const firstseedless = document.querySelector('li.seedless')
    console.log(firstseedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here

    const innerspan = document.getElementsByTagName('span')[0].innerText
    console.log(innerspan)

    // 5. Get all children of element "wrapper"
    // Your code here

    const childwrapper = document.getElementById('wrapper').children
    console.log(childwrapper)

    // 6. Get all odd number list items in the list
    // Your code here

    const odds = document.querySelectorAll('.odd')
    console.log(odds)

    const oddList = [];
    odds.forEach(el => {
        oddList.push(el.innerText);
    });
    console.log(oddList);

    // 7. Get all even number list items in the list
    // Your code here

    const evens = Array.from(document.getElementsByTagName('ol')[0].children)
    console.log(evens)

    const evenList = [];
    evens.forEach(el => {
        if (el.className !== "odd") {
            evenList.push(el.innerText);
        }
    });
    console.log(evenList);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    const aElement = document.querySelectorAll('#three > p > a');
    console.log(aElement)

    const techcomps = Array.from(aElement).filter(el => !el.className)
    console.log(techcomps)

    // 9. Get "Amazon" list element
    // Your code here

    const amazonlist = document.getElementsByClassName('shopping')
    console.log(amazonlist)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here

    const unicorns = document.getElementsByClassName('unicorn');
    console.log(unicorns)
}

window.onload = select;
