//when using my components I can add attributes called props.
//They are available in my component as this.props and can be used in render method to render them dynamically

var MyComponent = React.createClass({
    render: function(){
        return (
            <header>
            <h1>Hello {this.props.foo}</h1>
            <h2>Goodbye</h2>
            </header>
        )
    }
});

React.render(<MyComponent foo="world" />, document.getElementById('my-div'));