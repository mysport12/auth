import React, {Component} from 'react';
import { View } from 'react-native';
import { Header, Spinner, Button, Card, CardSection } from './components/common';
import firebase from 'firebase';
import { LoginForm } from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }

	componentDidMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyBZu-CoUNZwubmD4RW3N3a_yAcoHdhDGqA',
		    authDomain: 'auth-eec1f.firebaseapp.com',
		    databaseURL: 'https://auth-eec1f.firebaseio.com',
		    projectId: 'auth-eec1f',
		    storageBucket: 'auth-eec1f.appspot.com',
		    messagingSenderId: '1034590217061'
		});

		firebase.auth().onIdTokenChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true })
			} else {
				this.setState({ loggedIn: false })
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log Out
							</Button>
						</CardSection>
					</Card>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;