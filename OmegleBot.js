class OmegleBot{
    constructor(interval_in_seconds, text_array){
        this.interval = interval_in_seconds * 1000;
        this.text_array = text_array;
        this.setInterval_id = null;
    }
    click_next(){
        document.querySelector(".disconnectbtn").click()
    }
    send(msg){
        document.querySelector(".chatmsg ").value = msg; 
        document.querySelector(".sendbtn").click()
    }
    next(){
        let text = document.querySelector(".disconnectbtn").innerText;
        if( text.includes("Stop") ){
            this.click_next();
            this.click_next();
            this.click_next();
        }else if (text.includes("New") ){
            this.click_next();
        }else{
            this.click_next();
            this.click_next();
        }
    }

    chat(){
        let i = 0;
        for( ; i < this.text_array.length; i++ ){
            let msg = this.text_array[i];
            window.setTimeout( ()=>{ this.send(msg)}, (i + 1) * this.interval )
        }
    }

    start(){
        if( this.setInterval_id != null ) return;
        let i = this.text_array.length + 3;
        this.setInterval_id = window.setInterval(()=>{this.next();this.chat();}, i * this.interval );
        this.chat();
    }

    stop(){
        window.clearInterval(this.setInterval_id);
        this.setInterval_id = null;
    }
}

let msgs = ["Hello.", ":)", "You are beautiful", "Thank you", "Nice talking to you" ];
let msg_interval_in_seconds = 5;

let bot = new OmegleBot( msg_interval_in_seconds, msgs )
bot.start();
// bot.stop() // stop contacting new people