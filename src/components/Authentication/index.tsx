import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().required('ایمیل سازمانی خود را وارد کنید'),
  password: yup.string().required('رمز عبور خود را وارد کنید')
});
interface IAuthenticationProps {}

export const Authentication: React.FC<
  IAuthenticationProps
> = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit(value) {}
  });
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Typography fontWeight="bold" variant="h6">
        ورود به تشکرات
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <TextField
            size="small"
            label="نام کاربری سازمانی"
            onChange={formik.handleChange}
            name="email"
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          <TextField
            size="small"
            label="کلمه عبور"
            type="password"
            onChange={formik.handleChange}
            name="password"
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </Stack>
        <Stack>
          <Button variant="contained" type="submit">
            ورود
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
