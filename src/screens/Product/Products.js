import Layout from '../../Layout';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import EditProduct from './EditProduct';
import { BiPlus } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { FiEdit, FiEye } from 'react-icons/fi';
import SummaryApi from '../../common';
import moment from 'moment';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineCloudDownload } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { Button } from '../../components/Form';
import displayUSDCurrency from '../../helpers/displayCurrency';

const thclass = 'text-start text-sm font-medium py-3 px-2 whitespace-nowrap';
const tdclass = 'text-start text-sm py-4 px-2 whitespace-nowrap';

function Products() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProducts = async (query = "") => {
    const response = await fetch(`${SummaryApi.searchProduct.url}?q=${query}`, {
      method: 'GET',
      credentials: 'include',
    });

    const dataResponse = await response.json();
    setAllProduct(dataResponse?.data || []);
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${SummaryApi.deleteProduct.url}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: productId }),
        credentials: 'include',
      });

      const dataResponse = await response.json();

      if (dataResponse.success) {
        toast.success(dataResponse.message);
        fetchProducts(searchQuery);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    fetchProducts(event.target.value);
  };

  const exportProducts = () => {
    if (allProduct.length === 0) {
      toast.error('No products available to export');
      return;
    }

    const headers = ['#', 'Product Name', 'Brand Name', 'Category', 'Price (USD)', 'Selling Price (USD)', 'Created At'];
    const rows = allProduct.map((product, index) => [
      index + 1,
      product.productName,
      product.brandName,
      product.category,
      displayUSDCurrency(product.price),
      displayUSDCurrency(product.sellingPrice),
      moment(product.createdAt).format('LL'),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'products.csv');
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Product details exported successfully!');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <button
        onClick={() => setOpenUploadProduct(true)}
        className="w-16 animate-bounce h-16 border border-border z-50 bg-subMain text-white rounded-full flex-colo fixed bottom-8 right-12 button-fb"
      >
        <BiPlus className="text-2xl" />
      </button>

      <h1 className="text-xl font-semibold">Products</h1>
      <div>
        <div className="bg-white my-8 rounded-xl border-[1px] border-border p-5">
          <div className="grid md:grid-cols-6 grid-cols-1 gap-2">
            <div className="md:col-span-5 grid lg:grid-cols-4 xs:grid-cols-2 items-center gap-2">
              <input
                type="text"
                placeholder='Search "products"'
                className="h-14 w-full text-sm text-main rounded-md bg-dry border border-border px-4"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="md:col-span-1 flex justify-end items-center">
              <Button
                label="Export"
                Icon={MdOutlineCloudDownload}
                onClick={exportProducts}
              />
            </div>
          </div>

          <div className="mt-8 w-full overflow-x-scroll">
            <table className="table-auto w-full">
              <thead className="bg-dry rounded-md overflow-hidden">
                <tr>
                  <th className={thclass}>#</th>
                  <th className={thclass}>Product Name</th>
                  <th className={thclass}>Product Image</th>
                  <th className={thclass}>Brand Name</th>
                  <th className={thclass}>Category</th>
                  <th className={thclass}>
                    Price<span className="text-xs font-light">(USD)</span>
                  </th>
                  <th className={thclass}>
                    Selling Price <span className="text-xs font-light">(USD)</span>
                  </th>
                  <th className={thclass}>Created At</th>
                  <th className={thclass}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProduct.map((data, index) => (
                  <tr className="border-b border-border hover:bg-greyed transitions" key={index}>
                    <td className={tdclass}>{index + 1}</td>
                    <td className={tdclass}><span className="text-ellipsis line-clamp-2"> {data?.productName}</span></td>
                    <td className={tdclass}>
                      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg inline-block">
                        <img
                          src={data?.productImage[0]}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </td>
                    <td className={tdclass}>{data?.brandName}</td>
                    <td className={tdclass}>{data?.category}</td>
                    <td className={tdclass}>{displayUSDCurrency(data?.price)}</td>
                    <td className={tdclass}>{displayUSDCurrency(data?.sellingPrice)}</td>
                    <td className={tdclass}>{moment(data?.createdAt).format('LL')}</td>
                    <td className={tdclass}>
                      <button
                        className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                        onClick={() => setViewProduct(data)}
                      >
                        <FiEye />
                      </button>
                      <button
                        className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                        onClick={() => setEditProduct(data)}
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => deleteProduct(data._id)}
                        className="bg-red-500 p-2 text-white rounded hover:bg-red-700"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {openUploadProduct && <AddProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchProducts} />}
      {editProduct && <EditProduct productData={editProduct} fetchdata={fetchProducts} onClose={() => setEditProduct(null)} />}
      {viewProduct && <ViewProduct productData={viewProduct} onClose={() => setViewProduct(null)} />}
    </Layout>
  );
}

export default Products;
