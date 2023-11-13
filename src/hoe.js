
// import React ,{ useState , useEffect} from 'react'
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Category from './category'
// import Box from '@mui/material/Box';
// import { FormControl, Select, MenuItem } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import {  useDispatch,useSelector } from 'react-redux';

// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// import { setCategorArr } from './redux/reducer';

// const  Home=() =>{
//   const [name, setName] = useState('');
//   const [categorChoose, setCategorChoose] = useState('');

//   const categories = [{ id: 1, title: 'Category1' },
//   { id: 2, title: 'Category2'}];
//   const dispatch = useDispatch();
// const allProducts=[{name:"milk",categor:"Category1",quanity:0},{name:"bbb",categor:"Category1",quanity:0}];
// useEffect(() => {
// let categor=[ 
// { id: 1, title: 'Category1' },
// { id: 2, title: 'Category2'}]
// dispatch(setCategorArr(categor));
// console.log(categories)
// }, [categories]); 

// const handleAddProduct=()=>{
//   let index = allProducts.findIndex(product => product.name === name);

// if(index!==-1){
//     allProducts[index] = { ...allProducts[0], quanity: allProducts[index].quanity + 1 };
// }
// else{
//   allProducts.push({ ...allProducts[0], name: name, quanity: 1, categor: categorChoose });
// }

// }

// function calculateSum() {
//   const sum = allProducts?.reduce((total, current) => total + Number(current.quanity), 0);
//   return sum;
// }
// const handleChange = (event) => {
//  setCategorChoose(event.target.value);
// };
//   return (
//     <div className="container">
//     <Box >
//      <AppBar position="static" id="bar">
//        <Toolbar>
     
//          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
//              רשימת קניות
//          </Typography>
        
//            <div>
            
// <p>סה"כ {calculateSum()} מוצרים</p>
//            </div>
         
//        </Toolbar>
//      </AppBar>
//      </Box >
//      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
//      <FormControl  sx={{ width: '300px' }}>
//   <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
  
//     onChange={(e)=>setCategorChoose(e.target.value)}
//   >
//      {categories?.map((cat,index) => (
//           <MenuItem key={index} value={cat.title}>
//             {cat.title}
//           </MenuItem>
//         ))}
//   </Select>
// </FormControl>
// <Button variant="outlined"  onClick={handleAddProduct}>Outlined</Button>
// {categories?.map((category,index) => (
//         <Category key={index} title={category.title} products={allProducts.filter(f=>f.categor===category.title)} />
//  ))}

// </div>
   
//   );


// export default Home;