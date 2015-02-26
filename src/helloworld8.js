var MyComponent = React.createClass({
    getInitialState: function(){
        return {
            greeting: 'Goodbye',
            fname: 'Wendolene',
            lname:  'Rumsbuttom'
        }
    },
    handleClick:function(){
        this.replaceState({
            greeting: 'Hello',
            fname: 'Piella',
            lname: 'Bakewell'
        })
    },
    render: function(){
        return <div onClick={this.handleClick}>{this.state.greeting}, {this.state.fname} {this.state.lname}</div>
    
    }
});

React.render(<MyComponent/>,document.getElementById('my-div'));