import React, {Component} from 'react';

class Hero extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			heroImage: require('../assets/img/minecraft/CrustyWorldDailyImages/Andrew.jpg')
		};
		this.heroStyles = {
			backgroundImage: 'url(' + this.state.heroImage + ')'
		};
	}
	
	render() {
		return(
			<div
				className="HeroWrapper"
				style={this.heroStyles}
			>
				<h1 className="header__underlined">Welcome to Crusty Town</h1>
			</div>
		)
	}
	
}

export default Hero;