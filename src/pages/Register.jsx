import { Avatar, Button, TextField, Link, Grid, Box, Typography, Container, Badge, IconButton } from '@mui/material';
import { Formik, Form, Field, useFormik } from 'formik';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

export default function Register() {

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container maxWidth="md">
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <IconButton style={{ margin: 0, padding: 0 }}>
                                <Avatar>
                                    <AddPhotoAlternateIcon />
                                </Avatar>
                            </IconButton>
                        }
                    >
                        <Avatar alt="Hexada" src="/static/images/avatar/2.jpg" sx={{ width: 80, height: 80 }} />
                    </Badge>
                    <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                        Sign up
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    label="Email Address"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Verify Password"
                                    type="password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            REGISTER
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Or Log In
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </form>
    );
}