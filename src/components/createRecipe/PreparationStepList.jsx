import React from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

const PreparationStepList = ({preparationStepList, handlePreparationStepInputChange, handleAddPreparationStepRow, handleRemovePreparationStepRow}) => {
    return (
        <section style={{marginTop: "25px"}}>
            <h2>Instructions <span>(enter instructions, each step at a time)</span></h2>

            {preparationStepList.map((step, index) => {
                return (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={11}>
                            <TextField
                                multiline
                                rows={3}
                                rowsMax={3}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id={`preparationStep${index}`}
                                label={`Step ${index + 1} Instructions`}
                                name={`preparationStep${index}`}
                                value={step}
                                onChange={handlePreparationStepInputChange}
                                // helperText={fieldError}
                                // error={!!fieldError}
                            />
                        </Grid>
                        { index !== 0 ?
                            <Grid item xs={1}>
                                <button onClick={(event) => handleRemovePreparationStepRow(event, index)} className="remove" style={{marginTop: "50px"}}>-</button>
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
                    color="secondary"
                    className="button"
                    onClick={(event) => handleAddPreparationStepRow(event)}
                >
                    Add A Step
                </Button>
            </Grid>
        </section>
    )
};

export default PreparationStepList;