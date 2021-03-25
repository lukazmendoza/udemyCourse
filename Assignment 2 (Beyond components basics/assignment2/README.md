Your Assignment

1- Create a new component => CartComponent
2- Add a propert to that component => 'items' wich initially is and empty array
3- Make 'items' bindable and set the value of items from outside (from the AppComponent)
4- Set an initial array with ['Apples', 'Bananas', 'Cherries']
5- Add a 'Add Item' button and an input field to your CartComponent
6- Bing the input value to a property in the CartComponent (two-way binding)  and add a click listener for the button
7- Emit a new event to wich you may listen from the AppComponent on every button click. Pass the entered value as a value with the event
8- Listen to the emitted event in your AppComponent and add the passed data to your 'items' array
9- Output the array in the method where you add items by calling console.log()