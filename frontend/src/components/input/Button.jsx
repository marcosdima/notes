import ButtonStyle from '../../styles/elements/Button.style';

const Button = ({ text='Button', selected=false, ...props }) => {
    return (
        <ButtonStyle selected={selected} {...props}>
            {text}
        </ButtonStyle>
    );
};

export default Button;