import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchProductList, removeProduct } from '../redux/actions'
import '../css/dasboard.css'

const Dashboard = (props) => {
  useEffect(() => {
    props.loadproduct();
  }, [])
  const HandleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit")) {
      props.removeproduct(id);
      props.loadproduct();
      toast.success('produit supprimer avec success')
    }
  }
  
  return (
    props.products.loading ? <div><h2>loading...</h2></div> :
      props.products.errmessage ? <div><h2>{props.products.errmessage}</h2></div> :
        <div className='table-container d-flex justify-content-center align-items-center w-100'>
          <div className='card'>
            <div className='card-header'>
              <h1>Liste des produits</h1>
            </div>
            <div className='card-body'>
              <div className="mb-3 float-end">
                <Link to={"/product/add"}>
                  <button className='btn btn-success'>Ajouter un Produit [+]</button>
                </Link>
              </div>
              <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <td>id</td>
                    <td>Titre</td>
                    <td>Prix</td>
                    <td>Quantite</td>
                    <td>Description</td>
                    <td>Image</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.products.productlist && props.products.productlist.map((item,index) =>
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.titre}</td>
                        <td>{item.prix}</td>
                        <td>{item.quantite}</td>
                        <td>{item.description}</td>
                        <td>
                          <img src={item.image} width={60} />
                        </td>
                        <td>
                          <div className="d-flex justify-content-around">
                            <Link to={'/product/edit/' + item.id} className='btn btn-primary'>Modifier</Link>
                            <button className='btn btn-danger' onClick={() => HandleDelete(item.id)}>Supprimer</button>
                          </div>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadproduct: () => dispatch(FetchProductList()),
    removeproduct: (id) => dispatch(removeProduct(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
