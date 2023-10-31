import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; OnRemoveTodo: () => void }> = (props) => {


    return (
        <li className={classes.item} onClick={props.OnRemoveTodo}>{props.text}</li>
    )
}

export default TodoItem;