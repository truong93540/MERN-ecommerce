function InputComponent({
    size,
    placeholder,
    bordered,
    style,
    className,
    onChange,
    value = '',
    type = 'text',
    ...rests
}) {
    console.log('type', type)
    return (
        <input
            size={size}
            placeholder={placeholder}
            bordered={bordered}
            style={style}
            type={type}
            id={rests.id}
            onChange={onChange}
            className={className}
            value={value}
            {...rests}
        />
    )
}

export default InputComponent
