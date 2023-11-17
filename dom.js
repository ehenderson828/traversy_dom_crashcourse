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