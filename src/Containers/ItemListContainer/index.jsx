import { useState } from "react"
import styles from './styles.module.css'
const ItemListContainer = () => {






return(
        <div>
        <div className={'lista'}>
                <div className={'card'}>
                        <h5 className={'producto'}>Mouse Gamer</h5>
                        <p className={'card-text'}>$2000</p>
                </div>
                <div className={'card'}>
                        <h5 className={'producto'}>Teclado</h5>
                        <p className={'card-text'}>$5000</p>
                </div>
                <div className={'card'}>
                        <h5 className={'producto'}>Monitor</h5>
                        <p className={'card-text'}>$15000</p>
                </div>
                <div className={'card'}>
                        <h5 className={'producto'}>Silla Gamer</h5>
                        <p className={'card-text'}>$25000</p>
                </div>
        </div>
        </div>  
        )
}




export default ItemListContainer