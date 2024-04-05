class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closePopup: props.closePopup
        };
        this.popupContentRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
    }
    
    handleClickOutside = (event) => {
        if (this.popupContentRef.current && !this.popupContentRef.current.contains(event.target)) {
            this.props.closePopup();
        }
    }

    render() {
        const { children, closePopup } = this.props;

        return (
            <div className='popup open'>
                <div className="popup_body">
                    <div className="popup_content" ref={this.popupContentRef}>
                        <a className="popup_close close-popup" onClick={closePopup}>Х</a>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}