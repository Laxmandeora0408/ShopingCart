import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "HATS",
    width: "40%",
  },
  {
    url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "JACKETS",
    width: "30%",
  },
  {
    url: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "SNEAKERS",
    width: "30%",
  },
  {
    url: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "WOMENS",
    width: "30%",
  },
  {
    url: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "MENS  ",
    width: "30%",
  },
  {
    url: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Blinds",
    width: "30%",
  },
  {
    url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Blinds",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
    margin: 5,
    padding: 5,
  },

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function BoilerPlate() {
  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.title}>
          <ImageButton
            focusRipple
            style={{
              width: "100%",
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image variant="masonry">
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <br />
                <p>Shop Now</p>
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Grid>
      ))}
    </Grid>
  );
}
