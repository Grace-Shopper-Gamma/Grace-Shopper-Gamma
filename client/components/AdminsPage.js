import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/admins'
import AdminProductCard from './AdminProductCard'
import UserCard from './UserCard'
import ProductForm from './ProductForm'

class Admins extends Component {
  constructor() {
    super()
    this.state = {
      viewing: 'products',
      showAddForm: false
    }
  }

  componentDidMount() {
    this.props.loadUsers()
  }

  render() {
    const {users, products} = this.props
    const {viewing, showAddForm} = this.state

    return (
      <div>
        <div className="admins-nav">
          <div className="admins-filter">
            <p onClick={() => this.setState({viewing: 'products'})}>Products</p>
            <p onClick={() => this.setState({viewing: 'users'})}>Users</p>
          </div>
          {viewing === 'products' && (
            <p onClick={() => this.setState({showAddForm: !showAddForm})}>
              Add product
            </p>
          )}
        </div>
        <hr />
        <div className="flex-container">
          {showAddForm && <ProductForm />}
          {viewing === 'users' &&
            users.map(user => <UserCard key={user.id} user={user} />)}
          {viewing === 'products' &&
            products.map(product => (
              <AdminProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    )
  }
}

const mapState = ({users, inventory: {products}}) => ({users, products})
const mapDispatch = dispatch => ({loadUsers: () => dispatch(fetchUsers())})

export default connect(mapState, mapDispatch)(Admins)
