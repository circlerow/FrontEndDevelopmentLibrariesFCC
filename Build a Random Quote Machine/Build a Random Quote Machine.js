function App() {
    const [quotes, setQuotes] = React.useState([]);//useState là 1 hook, dùng để lưu trữ state của component, và cập nhật lại state khi có sự thay đổi
    //quotes là state, setQuotes là hàm để cập nhật lại state
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState("#000033");
    React.useEffect(() => {//useEffect thực hiện hàm call back sau khi render   
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");//gửi yêu cầu http và nhận phản hồi từ trang
            const data = await response.json();//chuyển đổi phản hồi thành json

            setQuotes(data);//cập nhật lại state quotes
            let randIndex = Math.floor(Math.random() * data.length);//random 1 số từ 0 đến data.length
            setRandomQuote(data[randIndex]);//cập nhật lại state randomQuote
        }
        fetchData();//gọi hàm
    }, []); //mảng rỗng để useEffect chỉ chạy 1 lần sau khi render

    const getNewQuote = () => {
        const colors = [
            "#16a085",
            "#27ae60",
            "#2c3e50",
            "#f39c12",
            "#e74c3c",
            "#9b59b6",
            "#FB6964",
            "#342224",
            "#472E32",
            "#BDBB99",
            "#77B1A9",
            "#73A857"
        ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex]);
        setColor(colors[randColorIndex]);
    }

    return (
        <div style={{ backgroundColor: color, height: "100vh" }}>
            <div className="container pt-5">
                <div className="jumbotron">
                    <div id="quote-box">
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <p className="card-text" id="text">&quot;{randomQuote.text}&quot;</p>
                                    <h5 className="card-title" id="author">-{randomQuote.author || "No Author"}</h5>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}
                            <div className="row">
                                <a href="http://twitter.com/intent/tweet" className="btn btn-danger custom" target="_blank" style={{ backgroundColor: color }}>
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="https://www.tumblr.com" className="btn btn-warning custom" target="_blank" style={{ backgroundColor: color }}>
                                    <i className="fa fa-tumblr" style={{ color: "white" }}></i>
                                </a>
                                <button onClick={getNewQuote} className="btn btn-primary btn-block custom quote" style={{ backgroundColor: color }}>New Quote</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
ReactDOM.render(<App />, document.getElementById('app'));