var Counter = React.createClass({
    getInitialState: function(){
        return {
            count:0
        }
    },
    incrementCount:function(){
        this.setState({
            count: this.state.count+1
        })
    },
    render: function(){
        return (
           <div class="my-component">
                <h1>Count: {this.state.count}</h1>
                <button type="button" onClick={this.incrementCount}>increment</button>
           </div>
        );
    }
});
React.render(<Counter/>,document.getElementById('my-div'));