function Task(props) {
    const { description, onRemove } = props;

    return(
        <li className="flex items-center justify-between py-2 px-4 bg-gray-200 rounded-md shadow-sm">
            <p className="text-gray-700">{description}</p>
            <button onClick={onRemove} >Remove</button>
        </li>
    );
}

export default Task;