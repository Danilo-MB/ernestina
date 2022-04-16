import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { getCategories } from '../../../services/categories';
import { DocumentData } from 'firebase/firestore';

const ProductForm: React.FC = () => {

    const [category, setCategory] = useState('')
    const [categoriesList, setCategoriesList] = useState([]);

    const getCategoriesList = async () => {
        const fetchedCategories: DocumentData[] = [];
        const categories = await getCategories();
        categories.forEach(category => {
            fetchedCategories.push(category.data())
        })
        //setCategoriesList(fetchedCategories);
    };
    console.log(categoriesList)

    useEffect(() => {
        getCategoriesList();
    }, [])


    const handleChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };


    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Age"
                onChange={handleChange}
            >
                {categoriesList?.map((category, index) => (
                    <MenuItem
                        key={index}
                        value={category}
                    >
                        {category}
                    </MenuItem>
                ))}
            </Select>
            <div style={{ height: 30 }}></div>
            <TextField
                id="outlined-basic"
                label="Nombre del producto"
                variant="outlined"
            />
            <div style={{ height: 30 }}></div>
            <TextField
                id="outlined-multiline-flexible"
                label="Descripción del producto"
                multiline
                maxRows={4}
            // value={value}
            // onChange={handleChange}
            />
            <TextField
                id="outlined-basic"
                label="Precio"
                variant="outlined"
            />
        </FormControl>
    )
};

export default ProductForm;