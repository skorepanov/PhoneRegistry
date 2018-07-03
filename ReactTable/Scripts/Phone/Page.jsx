class PhonePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phones: [] };

        this.onFilterByVendor = this.onFilterByVendor.bind(this);
        this.onSort = this.onSort.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var self = this;

        fetch(self.props.getUrl)
            .then(response => response.json())
            .then(data => {
                self.setState({ phones: data }, this.chart.onVendorChanged)
            });
    }

    onFilterByVendor(filter) {
        if (filter) {
            var params = "vendor=" + filter;

            fetch(this.props.getByVendorUrl + "?" + params)
                .then(response => response.json())
                .then(data => {
                    this.setState({ phones: data }, this.chart.onVendorChanged);
                });
        }
    }

    onSort(sort) {
        if (sort) {
            var params = "sort=" + sort;

            fetch(this.props.getSortedUrl + "?" + params)
                .then(response => response.json())
                .then(data => this.setState({ phones: data }));
        }
    }
    
    render() {
        return <div>
            <PhoneForm getVendorsUrl="/home/getvendors" onFilterByVendor={this.onFilterByVendor} onSort={this.onSort} />
            <PhoneTable phones={this.state.phones} />
            <PhoneChart ref={instance => this.chart=instance} phones={this.state.phones} />
        </div>;
    }
}