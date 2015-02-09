//myComponent will not work: Uncaught TypeError: Cannot read property 'replace' of undefined
//it has to start with capital 'M'

//use enclosing tags around <h1> and <h2> tags otherwise:
//Uncaught Error: Parse Error: Line 8: Adjacent XJS elements must be wrapped in an enclosing tag

var MyComponent = React.createClass({
    render: function(){
        return (
            <header>
            <h1>Hello, world!</h1>
            <h2>Goodbye!</h2>
            </header>
        );
    }
});
React.render(
    <MyComponent/>,
    document.getElementById('my-div')
)