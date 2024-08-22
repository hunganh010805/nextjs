'use client'
import { useEffect, useState } from 'react';
import { Product } from './database/type';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    productName: '',
    price: 0,
    image: '',
    quantity: 1,
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);

  // Fetch all products when the component loads
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    if (isEditing && editProductId !== null) {
      await fetch(`/api/products/${editProductId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      setIsEditing(false);
      setEditProductId(null);
    } else {
      await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newProduct, id: products.length + 1 }),
      });
    }
    setNewProduct({ id: 0, productName: '', price: 0, image: '', quantity: 1 });
    fetchProducts();
  };

  const handleEditProduct = (product: Product) => {
    setNewProduct(product);
    setIsEditing(true);
    setEditProductId(product.id);
  };

  const handleDeleteProduct = async (id: number) => {
    await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  return (
    <div className="container">
      <h1>Product Management</h1>

      <table className="product-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>
                <img src={product.image} alt={product.productName} width="50" />
              </td>
              <td>{product.price} VND</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Sửa</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h3>{isEditing ? 'Cập nhật sản phẩm' : 'Thêm mới sản phẩm'}</h3>
        <input
          type="text"
          name="productName"
          placeholder="Tên"
          value={newProduct.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Hình ảnh"
          value={newProduct.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Số lượng"
          value={newProduct.quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>{isEditing ? 'Cập nhật' : 'Thêm'}</button>
      </div>

      <style jsx>{`
        .container {
          padding: 20px;
        }
        .product-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .product-table th,
        .product-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        .product-table th {
          background-color: #f2f2f2;
        }
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          background-color: #f9f9f9;
        }
        .form-container input {
          width: 100%;
          padding: 8px;
          margin: 8px 0;
          box-sizing: border-box;
        }
        .form-container button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
