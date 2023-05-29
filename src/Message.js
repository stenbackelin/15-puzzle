function Message({number}) {
    if(number.every(n => n.value === n.index +1)) {
        return (
            <div className="message">
                <p>Grattis!</p>
            </div>
        );
    }
}
  
export default Message;  