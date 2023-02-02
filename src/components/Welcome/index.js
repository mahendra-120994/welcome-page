// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, btnText: 'Subscribe'}

  clickBtn = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === false) {
      this.setState(prevState => ({
        isSubscribed: !prevState.isSubscribed,
        btnText: 'Subscribe',
      }))
    } else {
      this.setState(prevState => ({
        isSubscribed: !prevState.isSubscribed,
        btnText: 'Subscribed',
      }))
    }
  }

  render() {
    const {btnText} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.clickBtn}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
