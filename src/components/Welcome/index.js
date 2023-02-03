// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  clickBtn = () => {
    const {isSubscribed} = this.state
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const btnText = isSubscribed ? 'Subscribed' : 'Subscribe'
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
