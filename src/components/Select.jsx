import '../styles/select.css';

const Select = ({title, options, selected, setSelected }) => {
    return (
        <div className='select-container'>
            <p className='select-title'>{title}</p>
            <select onChange={(e) => setSelected(e.currentTarget.value)} value={selected.value}>
                {
                    options.map(item => <option key={item.value} value={item.value}>{item.text}</option>)
                }
            </select>
        </div>
    );
}

export default Select;
