class PhoneForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { vendors: [], filter: "all", sort: "none" };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch(this.props.getVendorsUrl)
            .then(response => response.json())
            .then(data => this.setState({ vendors: data }));
    }

    onFilterChange(e) {
        this.setState({ filter: e.target.value });
        this.props.onFilterByVendor(e.target.value);
    }

    onSortChange(e) {
        this.setState({ sort: e.target.value });
        this.props.onSort(e.target.value);
    }
    
    render() {
        return <div>
            <div>
                <p>Производитель</p>
                <select onChange={this.onFilterChange}>
                    <option value="all">Все</option>
                    {
                        this.state.vendors.map(function (vendor) {
                            return <option key={vendor} value={vendor}>{vendor}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <p>Сортировка</p>
                <select onChange={this.onSortChange}>
                    <option value="none">Нет</option>
                    <option value="vendor">Производитель</option>
                    <option value="price">Цена</option>
                </select>
            </div>
        </div>;
    }
}