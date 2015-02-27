var List = React.createClass({
    render: function(){
        console.log("rendering List");
        return (
            <ul>
            {
                this.props.items.map(function(item){
                    return <li key={item}>{item}</li>
                })
            }
            </ul>
        )
    }
});

var FilteredList = React.createClass({
    filterList:function(event){
       var updatedList = this.state.initialItems;
       updatedList = updatedList.filter(function(item){
        return item.toLowerCase().search(
            event.target.value.toLowerCase())!=-1;
       });
       this.setState({items: updatedList});
    },
    
    //invoked once before the component is mounted
    getInitialState:function(){
        console.log('getInitialState');
        return {
            initialItems:[
                "Wendolene Ramsbottom",
                "Lady Tottington",
                "Piella Bakewell"
            ],
            items: []
        }
    },
    
    //componentWillMount Ð Invoked once before rendering occurs.
    componentWillMount: function(){
        this.setState({items: this.state.initialItems}); //set "items" state to "initialItems"
    },
    render: function(){
        console.log("rendering FilteredList");
        //set "items" prop of List component to "items" state of FilteredList. Appears to be passed in from a parent via props.
        return (
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/> 
            </div>
        );
    }
});



React.render(<FilteredList/>,document.getElementById('my-div'));