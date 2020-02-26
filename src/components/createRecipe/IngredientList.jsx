import React from 'react';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

const IngredientList = ({ingredientsList, handleIngredientInputChange, handleAddIngredientRow, handleRemoveIngredientRow}) => {
    return (
        <section style={{marginTop: "25px"}}>
            <h2>Ingredients</h2>

            {ingredientsList.map((ingredient, index) => {
                return (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={7}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id={`ingredientName${index}`}
                                label="Ingredient"
                                name={`ingredientName${index}`}
                                value={ingredient.name}
                                onChange={(event) => handleIngredientInputChange(event, 'name', index)}
                                // helperText={fieldErrors.ingredientList[index].name}
                                // error={!!fieldErrors.ingredientList[index].name}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id={`ingredientQuantity${index}`}
                                label="Quantity"
                                name={`ingredientQuantity${index}`}
                                value={ingredient.quantity}
                                onChange={(event) => handleIngredientInputChange(event, 'quantity', index)}
                                // helperText={fieldErrors.ingredientList[index].quantity}
                                // error={!!fieldErrors.ingredientList[index].quantity}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl variant="outlined" fullWidth margin="normal">
                                <InputLabel id="recipeCategoryLabel">
                                    Unit of Measure
                                </InputLabel>
                                <Select
                                    labelId="unitOfMeasureLabel"
                                    id={`ingredientUnitOfMeasure${index}`}
                                    name={`ingredientUnitOfMeasure${index}`}
                                    value={ingredient.unitOfMeasure}
                                    onChange={(event) => handleIngredientInputChange(event, 'unitOfMeasure', index)}
                                    labelWidth={115}
                                >
                                    <MenuItem value="c">Cup</MenuItem>
                                    <MenuItem value="fl oz">Fluid Ounce</MenuItem>
                                    <MenuItem value="gal">Gallon</MenuItem>
                                    <MenuItem value="g">Gram</MenuItem>
                                    <MenuItem value="kg">Kilogram</MenuItem>
                                    <MenuItem value="l">Liter</MenuItem>
                                    <MenuItem value="mg">Milligram</MenuItem>
                                    <MenuItem value="ml">Milliliter</MenuItem>
                                    <MenuItem value="oz">Ounce</MenuItem>
                                    <MenuItem value="pt">Pint</MenuItem>
                                    <MenuItem value="lb">Pound</MenuItem>
                                    <MenuItem value="qt">Quart</MenuItem>
                                    <MenuItem value="tbsp">Tablespoon</MenuItem>
                                    <MenuItem value="tsp">Teaspoon</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        { index !== 0 ?
                            <Grid item xs={1}>
                                <button onClick={(event) => handleRemoveIngredientRow(event, index)} className="remove">-</button>
                            </Grid> :
                            <Grid item xs={1} />
                        }
                    </Grid>
                );
            })}

            <Grid item xs={12}>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="button"
                    onClick={(event) => handleAddIngredientRow(event)}
                >
                    Add Ingredient
                </Button>
            </Grid>
        </section>
    )
};

export default IngredientList;