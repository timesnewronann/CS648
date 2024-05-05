let ronan = 'Ronan Borja'
let fartman = 'Fartman'
let lauren = 'Lauren Tu'
let dha = 'dobby'
let sak = 'big sak'
const element = (
    <ul style = {{'color': 'green', 'fontSize':'24px'}} >
        <li>{ronan}</li>
        <li>{fartman}</li>
        <li>{lauren}</li>
        <li>{dha}</li>
        <li>{sak}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))