import { ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";

const images = [
  {
      "src": "https://picsum.photos/id/0/5616/3744"
  },
  {
      "src": "https://picsum.photos/id/1/5616/3744"
  },
  {
      "src": "https://picsum.photos/id/10/2500/1667"
  },
  {
      "src": "https://picsum.photos/id/100/2500/1656"
  },
  {
      "src": "https://picsum.photos/id/1000/5626/3635"
  },
  {
      "src": "https://picsum.photos/id/1001/5616/3744"
  },
  {
      "src": "https://picsum.photos/id/1002/4312/2868"
  },
  {
      "src": "https://picsum.photos/id/1004/5616/3744"
  },
  {
      "src": "https://picsum.photos/id/1005/5760/3840"
  },
  {
      "src": "https://picsum.photos/id/1006/3000/2000"
  },
  {
      "src": "https://picsum.photos/id/1008/5616/3744"
  },
  {
      "src": "https://picsum.photos/id/1009/5000/7502"
  }
];

export default function Gallery() {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ImageList variant="woven" cols={matchDownMd ? 1 : 4} gap={15}>
      {images.map((item) => (
        <ImageListItem key={item.src}>
          <a href={item.src}>
          <img
            className="hover:scale-105 ease-in duration-100"
            src={item.src}
            srcSet={item.src}
            loading="lazy"
          />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
