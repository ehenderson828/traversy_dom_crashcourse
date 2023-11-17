// DOM NOTES :::::

// PART 1 :::::


// You can actually write functions like alert(1) in a browser's console (neat)




// EXAMINING THE DOCUMENT OBJECT:

    console.dir(document); // This will return a tree (HTML collection) of all of the properties and methods related to the document

        console.log(document.domain); // Here we are accessing the domain property within said tree

        console.log(document.url); // Returns the url of the page

        console.log(document.title); // Returns the title of the page

        console.log(document.doctype); // returns the doctype tag

        console.log(document.head); // Returns a tree for the head and all of the elements inside

            // You can also change said properties:
            document.title = 123; // Changes the title of the document in the head

        console.log(document.all) // Returns a tree with a all elements for the documents, but indexed

            // For example, you can console log document.all at an indexed position, and return the corresponding element:

            console.log(document.all[10]) // Will return the eleventh elements

            // You can change an element's properties by selecting it's index position:
            document.all[10].textContent = 'Hello, world';

        // When you log an element that does not exist in your document, you receive an empty HTML collection:

        console.log(document.images); // Returns an empty collection


// SELECTORS:::

    // GETELEMENTSBYCLASSNAME :::

        var items = document.getElementsByClassName('list-group-item');
        console,log(items); // This will return an indexed html collection of each list item

        console.log(items[1]); // This will log just the second list item

        items[1].textContent = 'Hello 2'; // This will change the text of the seond li

        items[1].style.fontWeight = 'bold'; // This will make that li bold

        items[1].style.backGroundColor = 'yellow';

        // If you want to add a common style to all of the li:

            items.style.backGroundColor = '#f4f4f4'; // This is NOT the correct way. You need to use a loop:

                for(var i = 0; i < items.length; i++){
                    items[i].style.backGroundColor = '#f4f4f4';
                }

    // GETELEMENTSBYTAGNAME :::

        // You can select with all of the tags that have the same name

            var li = document.getElementsByTagName('li');
            console.log(li); // This will return an indexed html collection of each list item

            console.log(li[1]); // This will log just the second list item

            li[1].textContent = 'Hello 2'; // This will change the text of the seond li

            li[1].style.fontWeight = 'bold'; // This will make that li bold

            li[1].style.backGroundColor = 'yellow';

    // If you want to add a common style to all of the li:

        li.style.backGroundColor = '#f4f4f4'; // This is NOT the correct way. You need to use a loop:

            for(var i = 0; i < li.length; i++){
                li[i].style.backGroundColor = '#f4f4f4';
            }

    // GETELEMENTBYID:::

        console.log(document.getElementById('header-title')); // Will return the html for the element base off the definted id only

        // You can also assign this to a variable:

        var headerTitle = document.getElementById('header-title');

        console,log(headerTitle); // Returns the html for said element

        // There are many methods we can use to change the properties in html elements. One of them is textContent:

        headerTitle.textContent = 'Hello, world'; // This will change the text content in the header once declared -- This DOES NOT pay attention to the styling on the page

        headerTitle.innerText = 'Goodbye, world'; // This method does the same thing -- This DOES pay attention to the styles on the page

        headerTitle.innerHTML = '<h3>Hello, World</h3>'; // This method will rerender the html in your current document

            // To be clear, innerHTML does NOT replace the current html in the document, instead it embeds it inside current elements

    // CSS STYLE CHANGES :::

        headerTitle.style.borderBottom = 'solid 3px black'; // The style method allows us to ammend CSS styles

        // Side note: despite CSS properties using dashses (-), you must use camel-case in JavaScript


    // QUERYSELECTOR ::: 

        // Unlike searching by id and class, query selector can only select a single object at a time
        // For example, if you grab an element with the class of 'title', and there's more than one element with that class, it's going to grab the first one

        // With querySelector, you grab grab anything: an element, and id or even a class. Must include a hash (#) for ids or period (.) for classes.

        var header = document.querySelector('#main-header');

        header.style.borderBottom = 'solid 4px #ccc'; // Creates a gray border

            var input = document.querySelector('input');

            input.value = 'Hello, world'; // Fills in the value of the first input

        // You can also select objects based on their type with CSS pseudo-selectors:
            
            var submit = document.querySelector('input[type="submit"]');

            submit.value = 'SEND'; // Changes the displayed value on the button to SEND

            var item = document.querySelector('.list-group-items'); // Keep in mind, that with the use of querySelector, you'll just target the first object with that class

            item.style.color = 'red'; // Just the first object in the list get the color red

            var lastItem = document.querySelector('.list-group-item:last-child'); // The 'last-child' following the colon targets the final item in this list

            lastItem.style.color = 'blue'; // The final list item receives blue font

            var secondItem = document.querySelector('.list-group-item:nth-child(2)'); // Here we are targting an object that is not first or last

            secondItem.style.color = 'coral'; // The 2nd list items receives the color coral

        

        // QUERYSELECTORALL :::
            
            var titles = document.querySelectorAll('.title'); // Much like selector by id or class, querySelectorAll will grab multiple items

            console.log(titles); // Will return an html collection of both h2's

            titles[0].textContent = 'Hello';


        // You can also alternate styles with querySelectorAll:

            var odd = document.querySelectorAll('li:nth-child(odd)');

            for (var i = 0; i < odd.length; i++) {
                odd[i].style.backgroundColor = '#f4f4f4';
            } // This will apply a light gray background color to odd list items

            // You can do this with even numbered objects as well:

            var even = document.querySelectorAll('li:nth-child(even)');

            for (var i = 0; i < even.length; i++) {
                even[i].style.backgroundColor = '#f4f4f4';
            } // This will apply a light gray background color to even list items
            
            // Or both:

            var odd = document.querySelectorAll('li:nth-child(odd)');
            var even = document.querySelectorAll('li:nth-child(even)');

            for (var i = 0; i < odd.length; i++) {
                odd[i].style.backgroundColor = '#f4f4f4';
                even[i].style.backgroundColor = '#ccc';
            } 


// PART 2 :::::

// TRAVERSING THE DOM (properties):::::

    // Every HTML element does not just have parent and child relationships, but also sibling relationships

    var itemList = document.querySelector('#items');

    // parentNode :::
        console.log(itemList.parentNode); // This will print not the ul with the id of items, but the div with the class of main, it's parent

        itemList.parentNode.style.backgroundColor = '#f4f4f4'; // This is going to change not the ul, but the parent div

        // You can use chaining to select the next parent up

        console.log(itemList.parentNode.parentNode); // This will log the div with the class of container

        console.log(itemList.parentNode.parentNode.parentNode); // This logs the body element, the parent of the parent

    // parentElement :::
        
        // parentElement and parentNode can be used interchangably
        
        console.log(itemList.parentElement); 

        itemList.parentElement.style.backgroundColor = '#f4f4f4'; 

        console.log(itemList.parentElement.parentElement.parentElement); 

    // childNodes ::: (not preferred, includes text nodes)

        console.log(itemList.childnodes); // prints a node list of list items and their text nodes (line breaks)

    // children ::: (preferred, does not include text nodes)

        console.log(itemList.children); // prints an html collection, without text nodes

        console.log(itemList.children[1]); // Accessing an indexed child

        itemList.children[1].style.backgroundColor = 'yellow';

    // firstChild ::: (includes text node and line breaks (useless)) - don't use this

        console.log(itemList.firstChild); // prints text node list

    // firstElementChild ::: (returns the html collection, not the node list) - use this instead
        
        console.log(itemList.firstElementChild);

        itemList.firstElementChild.textContent = 'Hello 1';

    // lastChild ::: -- Same as above

        console.log(itemList.lastChild);

    // lastElementChild ::: -- Same as above (better)

        console.log(itemList.lastElementChild);

        itemList.lastElementChild.textContent = 'Hello 4 ';
        
    // nextSibling :::

        console.log(itemList.nextSibling); // Will log the text node

    // nextElementSibling :::
        
        console.log(itemList.nextElementSibling); // Will not lof the text node -- will lof the FOLLOWING sibling. If the element does not have a sibling, it will log null

    // previousSibling ::: 
        
        console.log(itemList.previousSibling); // Logs the element prior to the selected element, and it's text node

    // previousElementSibling :::
        
        console.log(itemList.previousElementSibling); // Logs the previous element and not text node

        itemList.previousElementSibling.style.color = 'green';

// ACTUALLY CREATE ELEMENTS AND INSERTING THEM :::::

    // createElement :::

    // Create a div:
    var newDiv = document.createElement('div');
    
    // Add class:
    newDiv.className = 'hello'; // adds a class to newly created element

    // Add id:
    newDiv.id = 'hello1' // Adds an id

    // Add attribute:
    newDiv.setAttribute('title', 'Hello Div'); // Sets a attribute for an element. Arguments: ("title of attribute", "attribute value")

    // create text node:
    var newDivText = document.createTextNode('Hello world');

    // Appending text nodes to element:
    newDiv.appendChild(newDivText); // Appends the newly created text node to the div

    // Appending newly created element and text node to the document:
    var container = document.querySelector('header .container'); // This is the container class, child to the header

    var h1 = document.querySelector('header h1'); // parameter: h1 child to the header

    container.insertBefore(newDiv, h1); // This will insert our new div element inside the container, but before the h1. Parameters: ("new element", "element we're inserting in front of")

    console.log(newDiv); // logs the tags for new element, along with the id, class and title attributes

    newDiv.style.fontSize = '30px'; // Changes the font size of the new element added to the dom -- can only be done after inserting



// PART 3 :::::

    // EVENTS :::

    // You can run javascript right from an attribute in HTML

    var button = document.getElementById('button').addEventListener('click', function(){
        console.log(123);
    }); // Will log 123 after user clicks the selected element using a local function

    // You can also use a defined function:

    var button = document.getElementById('button').addEventListener('click', buttonClick); // Will log 'button clicked'


    function buttonClick() {
        console.log('button clicked');
    } // Will log the button clicked message

// Apply what we know about the dom and use it with events :::

    var button = document.getElementById('button').addEventListener('click', buttonClick);

    function buttonClick() {
        document.getElementById('header-title').textContent = 'Changed';
        document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    } // Will change the text in the head once the button in the event listener is clicked -- will also change the background color

    // Passing in an event parameter :::

    var button = document.getElementById('button').addEventListener('click', buttonClick);

    function buttonClick(e) {
        console.log(e);
    } // This will log the event details

    // You can also log the details for the even target:

    function buttonclick(e) {
        console.log(e.target.id); // This will log the id of the target element
        console.log(e.target.className); // Logs the class name
        console.log(e.target.classList); // Logs the list of all classes
        var output = document.getElementById('output');
        output.innerHTML = '<h3>'+e.target.id+'</h3>'; // This will output the id of the target to the div we created
        
        console.log(e.type); // This will log what type of even this is; in our case, this will log 'click'

        console.log(e.clientx); // This will log where you clicked on the target relative to the browser window (from the side over along the x axis)

        console.log(e.clienty); // Same, but from the top down

        console.log(e.offsetx); // Will log where you clicked inside the target relative to the border of the element itself

        console.log(e.offsety); // Same, but from the top up

        console.log(e.altkey); // Will log a bool for whether or not you're pressing the alt key when clicking (false for no, true for yes)

        console.log(e.ctrlkey); // Same, but with the crtl key

        console.log(e.shiftkey); // Same, but with the shift click
    } 

// OTHER TYPES OF EVENETS ::: --- COOL AS FUCK

    var button = document.getElementById('button');
    button.addEventListener('dblclick', runEvent); // Double clicking
    button.addEventListener('click', runEvent); // Single clicking
    button.addEventListener('mousedown', runEvent); // Only runs as soon as the mouse button is pushed down
    button.addEventListener('mouseup', runEvent); // Same, but when mouse button is released


    function runEvent(e) {
        console.log('EVENT TYPE: '+e.type);
    } // Will log which type of even has been tracked


    var box = document.getElementById('box');

    box.addEventListener('mouseenter', runEvent); // Event triggered when mouse enters target element, but only for the element itself

    box.addEventListener('mouseleave', runEvent); // Same, but when the cursor leaves the target; only for the element itself

    box.addEventListener('mouseover', runEvent); // Same as mouseenter; for the element and any inner children

    box.addEventListener('mouseout', runEvent); // Same as mouseleave, but also includes any inside children

    box.addEventListener('mousemove', runEvent); // Event triggered any time the mouse moves inside the target

    function runEvent(e) {
        console.log('EVENT TYPE: '+e.type);

        output.innerHTML = "<h3>MouseX: "+e.offsetx+"</h3><h3>MouseY: "+e.offsety+"</h3>";// Will create two h3's that track the mouseover movements on the screen once event detected (did not track on my end)

        box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+'40)'; // This will change the background color based off of the mouseover posititon
    }

// KEYBOARD AND INPUT EVENTS :::

    var itemInput = document.querySelector('input[type="text"]'); // Selects the input with the type of text
    var form = document.querySelector('form'); // Selects the form

    var select = document.querySelector('select'); // Selects the select element

    itemInput.addEventListener('keydown', runEvent); // Listening for a keydown event -- Only when a key is pressed down

    itemInput.addEventListener('keyup', runEvent); // Only when you release a key

    itemInput.addEventListener('keypress', runEvent); // Occurs when a key is pressed

    itemInput.addEventListener('focus', runEvent); // Event occurs when you click inside of an input, it's live and or active

    itemInput.addEventListener('blur', runEvent); // Event occurs when you click out of an input after you have actived it

    itemInput.addEventListener('cut', runEvent); // Fires when cutting occurs

    itemInput.addEventListener('paste', runEvent); // Fires when pasting occurs

    itemInput.addEventListener('input', runEvent); // Fires with ANY interactions with an input

    select.addEventListener('change', runEvent); // Fires once a change, or selection has been made

    form.addEventListener('submit', runEvent); // Fires once a submit button has been clicked

    function runEven(e) {
        e.preventDefault(); // Prevents default behavior
        
        console.log('EVENT TYPE: '+e.type); // Logs the type of event

        console.log(e.target.value); // Logs the value inside typed into the input

        document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'; // Pushes the typed value into the div

        document.body.style.display = 'none'; // Joke property that would make everything dissapear after the event occurs
    }

// PART 4 :::::

    // In our Item Lister, we have a form containing a text input and a submit input. We want to be able to take the text provided in the text input and append it to a ul below after clicking the submit button:

        // Start by declaring your variables
        var form = document.getElementById('addForm');
        var itemList = document.getElementById('items');
        var filter = document.getElementById('filter');

        // Form submit event
        form.addEventListener('submit', addItem);
        // Delete event
        itemList.addEventListener('click', removeItem);
        // Filter event
        filter.addEventListener('keyup', filterItems);

        // Add item
        function addItem(e) {
            e.preventDefault();

            // Get input value
            var newItem = document.getElementById('item').value;

            // Create new li element
            var li = document.createElement('li');
            // Add class
            li.className = 'list-group-item';
            // Add text node with input value
            li.appendChild(document.createTextNode(newItem));

            // Create delete button
            var deleteBtn = document.createElement('button');

            // Add classes to deleteBtn
            deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

            // Append text node
            deleteBtn.appendChild(document.createTextNode('X'));

            // Append deleteBtn to li
            li.appendChild(deleteBtn);

            // Append li to list
            itemList.appendChild(li);
        }


        // Remove item function
        function removeItem(e) {
            if (e.target.classList.contains('delete')) {
                if (confirm('Are you sure?')) {
                    var li = e.target.parentElement;
                    itemList.removeChild(li);
                }
            }
        }

        // Filter items
        function filterItems(e) {
            // Convert itewms to lower case
            var text = e.target.value.toLowerCase();
            // Get list
            var items = itemList.getElementsByTagName('li');
            // convert html collection to an array
            Array.from(items).forEach(function(item) {
                var itemName = item.firstChild.textContent;
                if(itemName.toLowerCase().indexOf(text) != -1) {
                    item.style.display = 'block';
                }
                else {
                    item.style.display = 'none';
                }
            })
        }

