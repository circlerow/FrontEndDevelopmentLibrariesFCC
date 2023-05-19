class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange(event){//hàm này để lấy giá trị của input
        this.setState({
            input: event.target.value,//lấy giá trị của input
            messages: this.state.messages//lấy giá trị của messages
        })
    }
    submitMessage(){
        this.setState({
            input: '',//xóa giá trị của input
            messages: [...this.state.messages, this.state.input]//thêm giá trị của input vào messages
        })
    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
            <input onChange={this.handleChange.bind(this)} value={this.state.input}/>{/*gọi hàm handleChange để lấy giá trị của input*/}
            <button onClick={this.submitMessage.bind(this)}>Submit</button>{/*gọi hàm submitMessage để thêm giá trị của input vào messages*/}
            <ul>
            {this.state.messages.map((x, i) => {//duyệt qua mảng messages
                return <li key={i}>{x}</li>//trả về giá trị của mảng messages
            })
            }
            </ul>

          { /* Change code above this line */ }
        </div>
      );
    }
  };