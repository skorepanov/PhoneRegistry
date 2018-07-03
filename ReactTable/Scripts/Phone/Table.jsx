class PhoneTable extends React.Component {
    render() {
        return <table>
            <tbody>
                <tr>
                    <th>Производитель</th>
                    <th>Модель</th>
                    <th>Цена</th>
                </tr>
                {
                    this.props.phones.map(function (phone) {
                        return <tr key={phone.Id}>
                            <td>{phone.Vendor}</td>
                            <td>{phone.Model}</td>
                            <td>{phone.Price}</td>
                        </tr>;
                    })
                }
            </tbody>
        </table>;
    }
}