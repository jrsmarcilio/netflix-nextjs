import { Typography } from '@material-ui/core';
import { NetflixN } from '@/assets/Icons';
import { BrandCategoryContent } from './styles';

export default function BrandCategory({ category }: { category: string }) {

  return (
    <BrandCategoryContent>
      <NetflixN />
      <Typography variant="h6">{category}</Typography>
    </BrandCategoryContent>
  );
}
