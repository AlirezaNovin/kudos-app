import { Stack, Typography } from '@mui/material';
import { KudosColors } from '../../../styles/theme';

interface IHeaderProps {}
export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  return (
    <Stack
      padding={3}
      bgcolor={KudosColors.grey[300]}
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack>
        <Typography variant="h5" fontWeight={700}>
          تشکرات
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="h6" fontWeight={600}>
          خروج از سیستم
        </Typography>
      </Stack>
    </Stack>
  );
};
