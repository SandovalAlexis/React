import "bootstrap/dist/css/bootstrap.css"

function Lista(props) {

    const items = [
       "Pizza",
       "Hamburguesa",
       "Nachos",
       "Lasagna"
    ]

    return (<ul className="list-group">
        { 
            items.map( item => (<li key={item} className="list-group-item">
                {item}
            </li>)) 
        }
    </ul>);
}

export default Lista;