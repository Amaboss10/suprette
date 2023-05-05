import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { functionAddProduct } from '../redux/actions'

const AddProduct = () => {
  const [products, setProduct] = useState({
    titre: "",
    prix: "",
    quantite: "",
    description: ""
  })
  const [image,setImage] =useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const HandleChange = (e) => {
    const { name, value } = e.target
    setProduct(states => {
      return {
        ...states,
        [name]: value
      }
    })
  }
  
  const HandleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      "titre": products.titre,
      "prix": products.prix,
      "quantite": products.quantite,
      "description": products.description,
      "image":image
    }
    dispatch(functionAddProduct(product))
    navigate('/dashboard-suprette')
  }
  return (
    <div>
      <div className='login template d-flex justify-content-center align-items-center w-100 vh-80 bg-white'>
        <div className='w-50 p-5 rounded'>
          {/* <div className='errors-container'>
          <p className='errors'>{messageErrors}</p>
        </div> */}
          <form onSubmit={HandleAddProduct}>
            <div className='mb-3'>
              <label htmlFor='titre' className='mb-2'>Titre du Produit</label>
              <input type={"text"} name={"titre"} onChange={HandleChange} value={products.titre} placeholder="Titre du produit" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="quantite" className='mb-2'>Quantite du Produit</label>
              <input type={"number"} name={"quantite"} onChange={HandleChange} value={products.quantite} placeholder="Quantite du produit" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="prix" className='mb-2'>Prix du Produit</label>
              <input type={"number"} name={"prix"} onChange={HandleChange} value={products.prix} placeholder="Prix du produit" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="description" className='mb-2'>Description du Produit</label>
              <input type={"text"} name={"description"} onChange={HandleChange} value={products.description} placeholder="Description du produit" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="description" className='mb-2'>Image du Produit</label>
              <input type={"file"}  onChange={(e) =>setImage(URL.createObjectURL(e.target.files[0]))} className='form-control' required />
            </div>
            <div className='d-grid'>
              <button type={"submit"} className='btn btn-primary'>Ajouter Produit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
