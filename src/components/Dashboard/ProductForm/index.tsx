import React, { useState, useEffect } from 'react';
import { ButtonWrapper, FieldsSeparator } from './styled';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { getCategories } from '../../../services/categories';
import { saveProduct } from '../../../services/products';
import { Category } from '../../../interfaces';
import ButtonForm from '../../../commons/ButtonForm';

const ProductForm: React.FC = () => {

    const [categoriesList, setCategoriesList] = useState([]);
    const [form, setForm] = useState({
        category: "",
        title: "",
        description: "",
        imageUrl: "",
    });
    const [errorForm, setErrorForm] = useState({
        categoryError: "",
        titleError: "",
        descriptionError: "",
        imageUrlError: "",
    });

    const { category, title, description, imageUrl } = form;
    const { categoryError, titleError, descriptionError, imageUrlError } = errorForm;

    const fetchCategories = async (): Promise<Category[]> => {
        const data = await getCategories();
        setCategoriesList(data);
        return data;
    };

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleChange = (event: SelectChangeEvent<string> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setErrorForm({
            categoryError: "",
            titleError: "",
            descriptionError: "",
            imageUrlError: "",
        });
    };

    const errors = () => {
        if (category.length === 0) {
            setErrorForm({
                ...errorForm,
                categoryError: "Debe seleccionar una categoría"
            })
            return true;
        }
        if (title.length === 0) {
            setErrorForm({
                ...errorForm,
                titleError: "Debe ingresar un titulo"
            })
            return true;
        }
        if (description.length === 0) {
            setErrorForm({
                ...errorForm,
                descriptionError: "Debe ingresar una descripción"
            })
            return true;
        }
        if (imageUrl.length === 0) {
            setErrorForm({
                ...errorForm,
                imageUrlError: "Debe ingresar un link a una imagen"
            })
            return true;
        }
        return false;
    };

    const onSubmit = (): void => {
        if (!errors()) {
            const newProduct = form;
            saveProduct(newProduct);
            alert("El producto se ha creado exitosamente");
            setForm({
                category: "",
                title: "",
                description: "",
                imageUrl: "",
            });
        }
        return;
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                value={category}
                label="category"
                onChange={handleChange}
                error={!!categoryError}
            >
                {categoriesList?.map((category, index) => (
                    <MenuItem
                        key={index}
                        value={category["category"]}
                    >
                        {category["category"]}
                    </MenuItem>
                ))}
            </Select>
            <FieldsSeparator />
            <TextField
                id="outlined-basic"
                label="Nombre del producto"
                name="title"
                value={title}
                variant="outlined"
                onChange={handleChange}
                error={!!titleError}
            />
            <FieldsSeparator />
            <TextField
                id="outlined-multiline-flexible"
                label="Descripción del producto"
                name="description"
                value={description}
                multiline
                maxRows={4}
                onChange={handleChange}
                error={!!descriptionError}
            />
            <FieldsSeparator />
            <TextField
                id="outlined-multiline-flexible"
                label="Url de la imagen"
                name="imageUrl"
                value={imageUrl}
                multiline
                maxRows={4}
                onChange={handleChange}
                error={!!imageUrlError}
            />
            <ButtonWrapper>
                <ButtonForm
                    onClick={onSubmit}
                    children={"Guardar Producto"}
                    color={"black"}
                    disabled={false}
                />
            </ButtonWrapper>

        </FormControl >
    )
};

export default ProductForm;