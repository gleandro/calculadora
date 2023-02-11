import '../css/Button.css';

const Button = (props) => {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
            onClick={() => props.addInput(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;