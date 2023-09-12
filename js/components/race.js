class RaceCard extends React.Component {
    render() {
        const { racePage, img, title_ua, title_en } = this.props.race;
        return (
            <a href={racePage}>
                <div
                    className="searchable cardspell popup_link spell"
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left top'
                    }}
                >
                    <div className="cardt">
                        <p className="cardnam">{title_ua}</p>
                        <p className="carding">{title_en}</p>
                    </div>
                </div>
            </a>
        );
    }
}

class RaceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            races: [],
            searchQuery: ''
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount() {
        fetch("../../data/Раси.json")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    races: data,
                });
            })
            .catch((error) => console.error(error));
    }

    handleSearchChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { races, searchQuery } = this.state;

        const filteredRaces = races.filter(
            (race) =>
                race.title_ua.toLowerCase().includes(searchQuery.toLowerCase()) ||
                race.title_en.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
            <div className="race-list">
                <div className="search-container">
                    <input
                        class="inp"
                        type="text"
                        placeholder="🔍︎ Пошук"
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                    />
                </div>
                {filteredRaces.map((race, index) => (
                    <RaceCard key={index} race={race} />
                ))}
            </div>
        );
    }
}

const domContainer = document.querySelector('.races');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(RaceList));