import "./mailList.css";

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save Time Save Money</h1>
            <span className="mailDescription">Sign up and we will send the best desal to you</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList