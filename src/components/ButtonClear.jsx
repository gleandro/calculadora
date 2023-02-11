import '../css/ButtonClear.css';

const ButtonClear = (props) => (
    <div className='boton-clear' onClick={props.clearInput}>
        {props.children}
    </div>
);

export default ButtonClear;