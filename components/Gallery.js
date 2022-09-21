import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const images = [
  {
    src: "https://picsum.photos/500/200",
  },
  {
    src: "https://picsum.photos/id/200/500",
  },
  {
    src: "https://picsum.photos/id/400/500",
  },
  {
    src: "https://picsum.photos/id/200/500",
  },
  {
    src: "https://picsum.photos/id/400/500",
  },
  {
    src: "https://picsum.photos/id/200/500",
  },
  {
    src: "https://picsum.photos/id/400/600",
  },
  {
    src: "https://picsum.photos/id/400/200",
  },
  {
    src: "https://picsum.photos/id/200/300",
  },
  {
    src: "https://picsum.photos/id/400/100",
  },
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
