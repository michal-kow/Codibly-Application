import { useEffect, useState } from 'react';
import './TableComponent.scss'
import { ThreeDots } from 'react-loader-spinner';
import ModalComponent from '../ModalComponent/ModalComponent';

const TableComponent = props => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isProductClicked, setIsProductClicked] = useState(false);
    const [selectedProductData, setSelectedProductData] = useState();

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://reqres.in/api/products?page=${props.pageNr}`).then(
            res => res.json()
        ).then(
            res => {
                setData(res.data);
                setIsLoading(false);
            }
        ).catch(
            error => {
                console.log(error);
                setIsLoading(false);
            }
        )
    }, [props.pageNr])

    const handleClick = (selectedId) => {
        setSelectedProductData(data.find(productData => productData.id === selectedId));
        setIsProductClicked(true);
    }

    return (
        <div className="TableComponent">
            {data ? (
                <table className='data-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter(
                            product => product.id.toString().includes(props.input)
                        ).map(product => 
                            <button key={product.id} onClick={() => handleClick(product.id)}>
                                <tr style={{'backgroundColor': product.color}}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.year}</td>
                                </tr>
                            </button>
                        )}
                    </tbody>
                </table>
            ) : (
                isLoading ? (
                    <ThreeDots 
                        color='#333'
                        wrapperStyle={{'justifyContent': 'center'}}
                    />
                ) : (
                    <h2>An error occured, please try again later.</h2>
                )
            )}
            {isProductClicked && <ModalComponent setIsProductClicked={setIsProductClicked} data={selectedProductData}/>}
        </div>
    );
}
 
export default TableComponent;