import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProductCard({id,title,subTitle,price,image}) {
  return (
<Card
      id={id}
      sx={{
        width: 300, // Fixed width
        height: 350, // Fixed height
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'lg',
        borderRadius: 'md',
        justifyContent: 'space-between',
      }}
    >      <CardOverflow>
        <AspectRatio sx={{ minWidth: 1/4, aspectRatio: '16/9' }}>
          <img
            src={image}
            loading="lazy"
            alt=""
            style={{ objectFit: 'contain', width: '100%', height: '100%', padding: '5px' }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ flex: 1 }}>
        <Typography level="body-md">{title}</Typography>
        <Typography
          href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: 'md' }}
          level="body-xs"
        >
          {subTitle}
        </Typography>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {price}
        </Typography>
        {/* <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography> */}
      </CardContent>

    </Card>
  );
}
