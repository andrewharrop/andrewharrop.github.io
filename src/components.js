

class RM extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: ''
        }
    }

    setTab = (tab) => {
        this.setState({ selectedTab: tab })
    }

    selectedTab = () => {
        switch (this.state.selectedTab) {
            case 'A':
                return <ComponentA />
            case 'B':
                return <ComponentB />
            case 'C':
                return <ComponentC />
            default:
                return /* empty div maybe */
        }
    }

    render() {
        return (
            <div>
                <View>
                    <Button onClick={() => setTab('A')} />
                    <Button onClick={() => setTab('B')} />
                    <Button onClick={() => setTab('C')} />
                </View>
                {this.selectedTab()}
            </div>
        )
    }
}