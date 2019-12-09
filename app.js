// // TODO
// var App = () => ('<div> Some cliche salutation </div>' )
  


// ReactDOM.render(<App />, document.getElementById('app'));
// var divv = document.createElement('<div>Hello !</div>');

// document.getElementById('app').appendChild(divv)

class GroceryListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			done: false
		}
	}


	toggleState(){
		this.setState({
		done : !this.state.done		
		})
	}
	render(){
	var style = {
		fontWeight : this.state.done ? 'bold' : 'normal' 
	};
	return(
	<li style = {style} onMouseOver  = {this.toggleState.bind(this)} >{this.props.item}</li>
	)}
}



var GroceryList = (props) =>(
	<ul>
		{props.Grocery.map(item => 
			<GroceryListItem item = {item}/>
		)}
	</ul>
)

var App  = () => (
	<div>
		<h1>My Grocery List</h1>
		<GroceryList  Grocery = {['Milk','Eggs', 'Bread', 'Apple', 'Oranges']} />
	</div>
	);


ReactDOM.render(<App />, document.getElementById("app"));
