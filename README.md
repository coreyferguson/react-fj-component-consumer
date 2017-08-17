### **react-fj-component-consumer** is a component made to consume(test) react-fj-component.

Clone the repository from github through git clone.

We can consume it in two ways right now:

1. Node
	&nbsp;&nbsp;&nbsp;&nbsp; `npm install react-fj-component` installs react-fj-component under node_modules. We can then simply import the component and use it with ReactDOM to render it. We can then run webpack to get bundle.js file in dist folder which is used in index.html. Then to see the results we can run webpack-dev-server command.


2. Browser
&nbsp;&nbsp;&nbsp;&nbsp; `bower install react-fj-component` installs react-fj-component under bower_components. We can then simply import the component and use it with requireJS. We can see the results for this one directly opening the index.html file. 

>Demonstration of both ways is given in the react-fj-component-consumer. If we run webpack-dev-server command and test it in the broweser then we can see both the components appearing, but if we just directly open index.html file then we see only one compoenent appearing. Further explanation is given in index.html file. 

