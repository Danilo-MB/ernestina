import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { getDatabase, ref, onValue } from 'firebase/database';

const ProductForm: React.FC = () => {

    const [category, setCategory] = useState('')

    const handleChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value);
    };

    const categoriesList = ['categoria 1', 'categoria 2', 'categoria 3'];

    const db = getDatabase();
    const starCountRef = ref(db, 'categories');

    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
    }, [])

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
                {categoriesList.map((category, index) => (
                    <MenuItem
                        key={index}
                        value={category}
                    >
                        {category}
                    </MenuItem>
                ))}
            </Select>
            <div style={{ height: 30 }}></div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <div style={{ height: 30 }}></div>
            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
            // value={value}
            // onChange={handleChange}
            />
        </FormControl>
    )
};

export default ProductForm;