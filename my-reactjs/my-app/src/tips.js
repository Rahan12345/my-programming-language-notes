
/*
clousres

top down approch - when know most of compoent
function compoentsnt - nzouser actino - not a top levle/ no state
class commentny- state, top, and envet hanlders


data in
	instance property
	internal state object - if we need to re-render everytime data is changed
	
every reacct event funciton, has event argument (wrapper around native event argument)

ref property of an element, takes funciton with reference to wlwement when the element is mounted
	<input type="text"
		ref = {(input1) => this.userNameInput=input1}
		/>

controlled compoennts
	method - o control input (rather than reading form dom)
	more code but better than ref

add key when creating a array/ map


===


gatsbyjs - Blazing-fast static site generator for React

https://jscomplete.com/repl/



package manager
    .NET        nuget
    ruby        ruby gems
    java        maven
    python      pip
    php         pear
    the-web     bower (manage packages related to html, javascript, css)
    node        npm

resuable js module
    encapsurte js into resuable module that can be referenced by other modues
        commonjs pattern module definition
            nodejs javascipt files follows commonjs pattern (for reference and exporting modules)
            // get reference to dependency      var dep = require('/pathtofile')
            // declare module                   var mod1 {}
            // expose the module to others      module.exports = mod1;
        requirejs asynchromous module definition (AMD)
        browserify
                
nodejs          run service side javascript
browserify      expose node packages to browser - bundles node modules for use in browser, by default bundles all dependenciess into a single file (minimizes no. of requests)
facebook react  view engine, components library  - packaging, composing, rendering html components - composing many components together - virtual dom, so very fast, when ui changes  compares state in memory  and renders on real dom,  virtual dom helps  client-side and server-side rendering (vdom differentiates angular and knockout)
react/router    to handle client-side routing (inspired by ember)
facebook flux   unidirectional data flow library - to handle our application's data flows - alternatives DeLorean, Fluxxor, Fluxy, Reflux
                data and state
                    mvc
                        model binding
                            bidirectional data flow
                                model view controller
                                    model - storing and retrieving application data
                                    view - presentational piece of the application–what the end-user sees
                                    controller - transforms data from a model so that it can be presented via the view
                                        model & view talk through controller
                                        controller has greater responsibility/complexity, maintain app state, and act as mediator between view and model
                            
                            auto-bind user interface changes to changes in the data model, and vice versa
                                M<->C<->V
                                model is not connect to controller, but to the view
                                app state is modified by two sources - both controller and model - more or less bypassing the controller
                                    current state of the application is no longer predictable
                            unidirectional application architecture
                                M<->V<->C
                                provides predictable application state
gulp            task runner that wires all above, in easy-to-use script
jest            wrapper over jasmine testing framework. alternatives: jasmine, mocha, qunit


view
viewmodel?

jsx is nearly html, differeces: className instead of class, htmlFor instead of for

====

component lifecycle methods
- componentWillMount
- componentDidMount
    -- componentWillReceiveProps
    --- shouldComponentUpdate
    --- componentWillUpdate
    --- componentDidUpdate
- componentWillUnMount

*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

    React elements, components, props, and state


    // class ShoppingList extends React.Component { // React component class, or React component type
        render() {
            return ( // React element // lightweight description of what to render
                //  <!-- DOM components below -->
                    <div className="shopping-list">

    <div /> syntax
        is transformed
        at build time to
        React.createElement('div')

    // Each html element gets converted to  React.createElement (htmltagname, {html attributes}, ...subreactelemntsList)

    // Functional Components
    //      instead of // extends React.Component
    function Square(props) {

            // Component keys like in

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
*/

/*


The main difference between state and props is that props are immutable.
This is why the
    container component
        should define the state
            that can be updated and changed,
    while the child components
        should only pass data
            from the state
                using props

    update the state in container component
        all child components will be updated


setState() method is
    used to update the state of the component.
    This method will not replace the state,
        but only add changes to the original state

react versions
    https://github.com/facebook/react/releases
        ..
        v0.14.8
        v15.0.0     // big jump here
        ..
        v16.3.2     // latest

Flux is a programming concept, where the data is uni-directional. This data enters the app and flows through it in one direction until it is rendered on the screen.
    Flux Elements
    Following is a simple explanation of the flux concept. In the next chapter, we will learn how to implement this into the app.
        Actions − Actions are sent to the dispatcher to trigger the data flow.
        Dispatcher − This is a central hub of the app. All the data is dispatched and sent to the stores.
        Store − Store is the place where the application state and logic are held. Every store is maintaining a particular state and it will update when needed.
        View − The view will receive data from the store and re-render the app.
        
        Action -> Dispatcher -> Store -> View
        
        Flux Pros
            Single directional data flow is easy to understand.
            The app is easier to maintain.
            The app parts are decoupled.

    Flux is the application architecture/ pattern for building client-side web applications, for unidirectional data flow
        
*/

