// In rare cases you might want a component to hide itself even though it was rendered by another component. 
// To do this return null instead of its render output.
import React, { Component } from 'react'
function WarningBanner(props) {
    if (!props.warn) {    
        return null;  
    }
    else return (
      <div className="warning">
        Warning!
      </div>
    );
  }
  
class PreventComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
    this.setState(state => ({
        showWarning: !state.showWarning
    }));
    }
    render() {
    return (
    <div>
        <WarningBanner warn={this.state.showWarning} />        
        <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
    </div>
    );
}
}
export default PreventComponent