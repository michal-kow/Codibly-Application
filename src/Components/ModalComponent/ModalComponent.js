import './ModalComponent.scss'
import { CgClose } from 'react-icons/cg';

const ModalComponent = props => {
    return (
        <div className="ModalComponent">
            <div className="content-wrapper">
                <div className="btn-wrapper">
                    <button onClick={() => props.setIsProductClicked(false)}>
                        <CgClose />
                    </button>
                </div>
                <table className='data-table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Color</th>
                                <th>Pantone value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.data.id}</td>
                                <td>{props.data.name}</td>
                                <td>{props.data.year}</td>
                                <td>{props.data.color}</td>
                                <td>{props.data.pantone_value}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
}
 
export default ModalComponent;