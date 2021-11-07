import { Button, FormControl, FormGroup, InputLabel, Select, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const SearchBar = () => {

    const [value, setValue] = useState('')
    const [field, setField] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(value && field) {
            console.log(value, field)
        }
    }

    return (
        <div style={{marginBottom: '25px'}}>
            <form noValidate autoComplete='off' autoCorrect='off' onSubmit={handleSubmit}>
                <FormControl>
                    <FormGroup row spacing={4}>
                        <InputLabel>Field</InputLabel>
                        <Select
                            label='Field'
                            onChange={(e) => setField(e.target.value)}
                            style={{marginRight: '25px', minWidth: '200px'}}
                        >
                            <MenuItem value={0}>Loan ID</MenuItem>
                            <MenuItem value={1}>First Name</MenuItem>
                            <MenuItem value={2}>Last Name</MenuItem>
                            <MenuItem value={3}>Email</MenuItem>
                            <MenuItem value={3}>City</MenuItem>
                            <MenuItem value={3}>State</MenuItem>
                            <MenuItem value={3}>ZIP</MenuItem>

                        </Select>
                        <TextField
                            label='Value'
                            variant='standard'
                            onChange={(e) => setValue(e.target.value)}
                            style={{marginRight: '25px'}}
                        />

                        <Button type='submit' variant='contained'>Search</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}

export default SearchBar
