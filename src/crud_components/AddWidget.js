import { v4 as uuidv4 } from 'uuid';
import GetWidget from "./GetWidgets";

const AddWidget = (props) => {
    const id = uuidv4().toString();
    const position = { id: id, col: 1, colSpan: 1, rowSpan: 1, type: props.type }
    const addWidget = () => {
        const widget = GetWidget(props.type, props.deleteWidget)
        props.addWidget(widget,position)
    }
    return (
        <div onClick={() => { addWidget() }}>+</div>
    )
}

export default AddWidget