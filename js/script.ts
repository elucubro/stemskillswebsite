const inputbox = document.createElement("INPUT")
inputbox.setAttribute("type","text")

function register_uid() {
    const queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString)
    const uuid = urlParams.get('uid')
    /*const inputValue = (<HTMLInputElement>document.getElementById('textbox_id')).value;*/
    let value = parseInt(uuid)
    console.log(value)
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"uuid":${value}}`
    };
    let obj;

    fetch('http://127.0.0.1:5000/profile', options)
        .then(res => res.json())
        .then(data => {
            obj = data;
        })
        .then(() => {
            console.log(obj["data"].Names)
            document.querySelector("form").style.visibility="hidden"
            const div = document.createElement("div")
            document.getElementById("h1-element").innerHTML = `${JSON.stringify(obj, null, '\t')}`
        });


    /*async function foo() {
        let obj
        const res = await fetch('http://127.0.0.1:5000/profile', options)
        obj = await res.json();
        console.log(obj)
        console.log(obj)
        return obj.the
    }
    const output = foo()
    console.log("output")
    console.log(output)*/
 }
 register_uid()




