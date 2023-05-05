import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FetchProductObj,functionUpdateProduct } from '../redux/actions'

const EditProduct = () => {
  const [image,setImage] = useState(null)
  const [products, setProduct] = useState({
    titre: "",
    prix: "",
    quantite: "",
    description: "",
    id: 0
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const productobj = useSelector(state => state.products.productobj)

  const HandleChange = (e) => {
    const { name, value } = e.target
    setProduct(states => {
      return {
        ...states,
        [name]: value
      }
    })
  }
  const HandleUpdateProduct = (e) => {
    e.preventDefault()
    const product = {
      "titre": products.titre,
      "prix": products.prix,
      "quantite": products.quantite,
      "description": products.description,
      "image": image,
      "id": products.id
    }
    dispatch(functionUpdateProduct(product))
    toast.success('produit est modifier avec success')
    navigate('/dashboard-suprette')
  }

  useEffect(() => {
    dispatch(FetchProductObj(id))
  }, [])
  useEffect(() => {
    if (productobj) {
      setProduct({
        titre:productobj.titre, 
        quantite:productobj.quantite,
        prix:productobj.prix,
        description:productobj.description,
        id: productobj.id, 
      })
      setImage(productobj.image)
    }
  }, [productobj])
  return (
    <div>
      <div className='login template d-flex justify-content-center align-items-center w-100 vh-80 bg-white'>
        <div className='w-50 p-5 rounded'>
          {/* <div className='errors-container'>
      <p className='errors'>{messageErrors}</p>
    </div> */}
          <form onSubmit={HandleUpdateProduct}>

            <div className='mb-3'>
              <label>Id</label>
              <input name={"titre"} disabled value={products.id || ''} className='form-control' />
            </div>

            <div className='mb-3'>
              <label htmlFor='titre' className='mb-2'>Titre du Produit</label>
              <input type={"text"} name={"titre"} onChange={HandleChange} value={products.titre} placeholder="Entre votre email" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="quantite" className='mb-2'>Quantite du Produit</label>
              <input type={"number"} name={"quantite"} onChange={HandleChange} value={products.quantite} placeholder="Entre votre mot de passe" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="prix" className='mb-2'>Prix du Produit</label>
              <input type={"number"} name={"prix"} onChange={HandleChange} value={products.prix} placeholder="Entre votre mot de passe" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="description" className='mb-2'>Description du Produit</label>
              <input type={"text"} name={"description"} onChange={HandleChange} value={products.description} placeholder="Entre votre mot de passe" className='form-control' required />
            </div>
            <div className='mb-3'>
              <label htmlFor="description" className='mb-2'>Image du Produit</label>
              <img src={productobj.image} alt={productobj.image} />
              <input type={"file"}  onChange={(e) =>setImage(URL.createObjectURL(e.target.files[0]))} className='form-control'/>
            </div>
            <div className='d-grid'>
              <button type={"submit"} className='btn btn-primary'>Modifier Produit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
