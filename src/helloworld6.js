var MyComponent = React.createClass({
    render: function(){
        return (
            <header>
            <h1>Hello {this.props.foo}</h1>
            <h2>Goodbye {this.props.bar}</h2>
            </header>
        )
    }
});

React.render(<MyComponent foo="world" bar="cruel world"/>, document.getElementById('my-div'));
