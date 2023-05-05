import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import '../css/home.css'
import { FetchProductList } from '../redux/actions'

const Home = (props) => {
    // const dispatch = useDispatch()
    // const results = useSelector(state =>state)
    // console.log(results)

    useEffect(() => {
        props.loadproduct()
    }, [])
    const HandleCommande = () =>{
        window.alert("Bienvenue a suprette market")
    }
    return (
        <section className='d-flex pt-md-5'>
            {
                props.products.productlist && props.products.productlist.map(item => (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12' >
                                <div className='card h-100'>
                                    <img src={item.image} height={250} />
                                    <div className='card-body'>
                                        <div className='card-title'>{item.titre}</div>
                                        <div className='card-text'>{item.description}</div>
                                        <div className='card-text'>{item.prix} €</div>
                                        <div className='card-text'>{item.quantite}</div>
                                    </div>
                                    <div className='btn-container'>
                                        <button onClick={HandleCommande} className="btn-add">
                                            Commander
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadproduct: () => dispatch(FetchProductList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
