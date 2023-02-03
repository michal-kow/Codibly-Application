import { useEffect, useState } from 'react';
import './PaginationComponent.scss'

const PaginationComponent = props => {

    const [isPreviousClickable, setIsPreviousClickable] = useState(false);
    const [isNextClickable, setIsNextClickable] = useState(true);

    useEffect(() => {
        switch (props.pageNr) {
            case 1:
                setIsPreviousClickable(false);
                setIsNextClickable(true);
                break;
            case 2:
                setIsPreviousClickable(true);
                setIsNextClickable(false);
                break;
            default:
                console.log('Something went wrong')
        }
    }, [props.pageNr])

    const handlePrevious = () => {
        props.setPageNr(current => current-1);
    }

    const handleNext = () => {
        props.setPageNr(current => current+1);
    }

    return (
        <div className="PaginationComponent">
            <div className="wrapper">
                <button className={isPreviousClickable ? 'clickable' : 'unclickable'} onClick={handlePrevious}>Previous</button>
                <p>Page: {props.pageNr}</p>
                <button className={isNextClickable ? 'clickable' : 'unclickable'} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
 
export default PaginationComponent;