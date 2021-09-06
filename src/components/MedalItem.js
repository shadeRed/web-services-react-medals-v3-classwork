import './../css/MedalItem.css';
import MedalCount from './MedalCount';
import { Badge } from '@material-ui/core';

let colors = [
    '#ffd900',
    '#c5cad9',
    '#d9a36a',
]

let MedalItem = ({ name, count, increment, decrement }) => {
    return (
        <div>
            <p className="medal-header">{name}<Badge  badgeContent={count.reduce((a, b) => a + b, 0)} color="primary"/></p>
            {
                colors.map((c, i) =>
                    <MedalCount
                        color={c}
                        count={count[i]}
                        key={i}

                        increment={() => increment(i)}
                        decrement={() => decrement(i)}
                    />
                )
            }
        </div>
    )
}

export default MedalItem;

// OLD //
/*export default class MedalItem extends Component {
    constructor(props) {
        super(props);
        this.state = { count: [ 0, 0, 0 ], name: props.name, total: 0 }
    }

    _set_count_by_index(i, c) {
        let counts = this.state.count;
        counts[i] = c;
        this.setState({ count: counts, total: counts.reduce((a, b) => a + b, 0) });
    }

    _get_count_by_index(i) {
        let counts = this.state.count;
        return counts[i];
    }

    increment(i) { this._set_count_by_index(i, this._get_count_by_index(i) + 1) }
    decrement(i) {
        if (this._get_count_by_index(i) === 0) { return }
        this._set_count_by_index(i, this._get_count_by_index(i) - 1);
    }

    render() {
        return (
            <div>
                <p className="medal-header">{this.state.name}<Badge badgeContent={this.state.total} color="primary" /></p>
                {
                    types.map((t, i) =>
                        <MedalCount
                            color={t.color}
                            count={this.state.count[i]}
                            key={i}

                            // .bind allows me pass the index of the medal into the functions arguments when it's called from this scope, rather from within MedalCount
                            // MedalCount won't ever need to know what it's index is
                            increment={this.increment.bind(this, i)}
                            decrement={this.decrement.bind(this, i)}
                        />
                    )
                }
            </div>
        );
    }
}
*/
