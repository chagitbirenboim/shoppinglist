
import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Category from './category'
import Box from '@mui/material/Box';
import { FormControl, Select, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { setCategorArr } from './redux/reducer';
import { getAllCategories, getPoducts, savePoducts } from './axios/api';


const Home = () => {
  const [name, setName] = useState('');
  const [categorChoose, setCategorChoose] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // let categories = [{ id: 1, title: 'Category1' },
  // { id: 2, title: 'Category2' }];
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories().then(c => {
      setCategories(c.data)
      dispatch(setCategorArr(c.data))
    })
    getPoducts().then(p => setAllProducts(p.data))

  }, []);

  // useEffect(() => {
  //   getAllProducts().then(p => dispatch(setProduct(p.data)))
  // }, [])

  const handleAddProduct = () => {
    let index = allProducts.findIndex(product => product.name === name);

    if (index !== -1) {
      setAllProducts(prevProducts => prevProducts.map((product, i) =>
        i === index ? { ...product, quantity: product.quantity + 1 } : product
      ));
    } else {
      setAllProducts(prevProducts => [
        ...prevProducts,
        { name: name, quantity: 1, categoryId: categories.find(c => c.name == categorChoose)._id }
      ]);
    }
    savePoducts(name, categorChoose, 1)
  }


  function calculateSum() {
    const sum = allProducts?.reduce((total, current) => total + Number(current.quantity), 0);
    return sum;
  }
  const handleChange = (event) => {
    setCategorChoose(event.target.value);
  };
  return (
    <div className="container">
      <Box >
        <AppBar position="static" id="bar">
          <Toolbar>

            <Typography variant="h2" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
              רשימת קניות
         </Typography>

            <div>

              <p>סה"כ {calculateSum()} מוצרים</p>
            </div>

          </Toolbar>
        </AppBar>
      </Box >
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TextField id="outlined-basic" label="שם המוצר" variant="outlined" onChange={(e) => setName(e.target.value)} />
        <FormControl sx={{ width: '300px' }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorChoose}
            onChange={(e) => setCategorChoose(e.target.value)}
          >
            <MenuItem value="" disabled>
              Select category
    </MenuItem>
            {categories?.map((cat, index) => (
              <MenuItem key={index} value={cat.name}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" onClick={handleAddProduct}>הוסף מוצר</Button>
      </div>


      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', color: '#1976D2', justifyContent: 'space-around' }}>
        {categories?.map((category, index) => (
          <Category key={index} title={category.name} products={allProducts.filter(f => f.categoryId === category._id)} />
        ))}
      </div>


    </div>
  );
};

export default Home;
