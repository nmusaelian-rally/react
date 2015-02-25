//every component has a state obj and a props obj.
//to set an initial state before any interaction happen use getInitialState method
//to change state of use replaceState

var MyComponent = React.createClass({
    getInitialState: function(){
        return {
            name: "Wallace"
        }
    },
    handleClick: function(){
        this.replaceState({
            name: "Wendolene Ramsbottom"
        })
    },
    render: function(){
        return (
            <div onClick={this.handleClick}>
            Hello, {this.state.name}
            </div>
        )
    }
});

React.render(<MyComponent/>,document.getElementById('my-div'));