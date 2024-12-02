import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>
            Shop by Categories
        </h1>
        <p className='explore-menu-text'>
            Explore wide range of groceries
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick ={()=> setCategory (prev=> prev===item.menu_name ? "All" :item.menu_name)}  key={index} className='explore-menu-list-item'>
                        <img className={category ===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                    
                )
            })}
        </div>
          <hr/>
    </div>
  )
}

export default ExploreMenu
