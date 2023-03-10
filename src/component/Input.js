function Input(props) {
    let { lable, className,type, size,value,onChange } = props
    return <input placeholder={lable} value={value} size={size}  className={className} onChange={onChange} />
}

function Button(props) {
    let { lable, onClick ,className } = props

    return <button onClick={onClick} className={className}>{lable}</button>
}


export { Input, Button }