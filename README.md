when you use d3.selectAll('rect'), d3 will look for all the rect element in the DOM. 
when you have connect to the data by .data(data), it will look at at the data source and assign each value item to each rect element in the DOM

but what if there are more data object items than the rect elements in the DOM currently?

d3 will create virtual rect elements for those are not in the DOM, these virtual elements lives in the enter property

to access those virtual element, you need to use .join() method to get access to the enter prop. Only then, you can assign the attributes and their data so that they can be put in the DOM for rendering

the old way of doing this is u use .enter() method to access enter selection. then you can append those virtual element to 'rect' element and attach the data object to them
