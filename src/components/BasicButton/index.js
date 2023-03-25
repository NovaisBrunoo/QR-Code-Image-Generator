import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Button sx={{ width: 350, textTransform: 'capitalize', border: '1px solid lightgrey', color: 'black' }} variant="outlined">Generate Image</Button>
    );
}