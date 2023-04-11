const inputbox = document.createElement("INPUT")
inputbox.setAttribute("type","text")

function register_uid() {
    const inputValue = (<HTMLInputElement>document.getElementById('textbox_id')).value;
    let value = parseInt(inputValue)
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"uuid":${value}}`
    };
    console.log()
    fetch('http://127.0.0.1:5000/profile', options)
        .then(response => response.json())
        .then(response => doThing(response))
        .catch(err => console.error(err));
    let doThing = (response) =>{
        console.info(typeof response)
    }
}

async function fetchUserInfo(int){
    try {

    }
}

