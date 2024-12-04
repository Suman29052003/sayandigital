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

export default function ProductCard({ id, title, subTitle, price, image }) {
  return (
    <Card
      id={id}
      sx={{
        width: {
          xs: '80%', // Full width on extra small screens
          sm: 300,    // Fixed width on small screens and up
        },
        height: {
          xs:'auto',
          sm:380
        }, // Allow height to adjust based on content
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'lg',
        borderRadius: 'md',
        justifyContent: 'space-between',
        margin: '6px', // Add margin for spacing
      }}
    >
      <CardOverflow>
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
        <Typography style={{ fontSize: '22px', fontWeight:'bold' }}>{title}</Typography>
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
          sx={{ mt: 3, fontWeight: 'xl',color:'orange', display:'flex', justifyContent:'space-between'}}
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