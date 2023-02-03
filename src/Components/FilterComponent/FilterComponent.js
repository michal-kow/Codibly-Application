import './FilterComponent.scss'

const FilterComponent = props => {

    const handleInput = e => {
        const inputText = e.target.value;
        if (!isNaN(inputText)) {
            props.setInput(inputText);
        }
    }

    return (
        <div className="FilterComponent">
            <div className="wrapper">
                <h2>Filter data: </h2>
                <input type="text" value={props.input} onChange={e => handleInput(e)}/>
            </div>
        </div>
    );
}
 
export default FilterComponent;