class PhoneChart extends React.Component {
    constructor(props) {
        super(props);

        this.componentId = "chart";
        this.onVendorChanged = this.onVendorChanged.bind(this);
    }
    
    onVendorChanged() {
        this.renderChart();
    }

    renderChart() {
        var title = {
            text: 'Динамика стоимости телефонов'
        }

        var xAxis = {
            categories: ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал']
        }

        var yAxis = {
            title: {
                text: 'Стоимость'
            },
            plotLine: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        }

        var tooltip = {
            valueSuffix: ' руб.'
        }

        var legend = {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        };

        var credits = {
            enabled: false
        };

        var series = this.props.phones.map(function (phone) {
            return { name: phone.Vendor + ' ' + phone.Model, data: phone.PriceHistory }
        });

        var params = {};
        params.title = title;
        params.xAxis = xAxis;
        params.yAxis = yAxis;
        params.tooltip = tooltip;
        params.legend = legend;
        params.credits = credits;
        params.series = series;

        $('#' + this.componentId).highcharts(params);
    }
    
    render() {
        return <div id={this.componentId} style={{ width: 550, height: 400 }}></div>;
    }
}