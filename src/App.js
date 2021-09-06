import './App.css';

import Container from '@material-ui/core/Container';
import MedalItem from './components/MedalItem';
import { Component } from 'react';

let countries = [
  'United States',
  'China',
  'Russia',
  'Germany',
  'Brazil',
  'Japan'
]

export default class App extends Component {
    state = {
        countries: countries.map((c) => { return { name: c, count: [ 0, 0, 0 ] } })
    }

    addCountry(name) {
        let { countries } = this.state;
        countries.push({ name: name, count: [ 0, 0, 0 ] });
        this.setState({ countries });
    }

    addMedal(country, medal) {
        let { countries } = this.state;
        countries[country].count[medal] += 1;
        this.setState({ countries });
    }

    removeMedal(country, medal) {
        let { countries } = this.state;
        countries[country].count[medal] -= 1;
        if (countries[country].count[medal] < 0) { countries[country].count[medal] = 0 }
        this.setState({ countries });
    }

    render() {
        return (
            <Container className="container" maxWidth="sm">
                <h1>Medals</h1>
                {
                    this.state.countries.map((c, i) =>
                        <MedalItem
                            name={c.name}
                            count={c.count}
                            increment={this.addMedal.bind(this, i)}
                            decrement={this.removeMedal.bind(this, i)}
                            key={i}
                        />
                    )
                }
            </Container>
        )
    }
}
