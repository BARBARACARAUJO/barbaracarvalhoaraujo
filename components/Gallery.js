import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import posts from '../public/posts.json'

export default function Gallery() {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <ImageList variant="masonry" cols={matchDownMd ? 1 : 4} gap={30}>
        {posts.map((item) => (
          <ImageListItem key={item.src}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div  className="relative h-96">
              <Image
                className="hover:scale-105 ease-in duration-100"
                src={item.src}
                layout='fill'
                objectFit="contain"
                srcSet={item.src}
                loading="lazy"
              />
              </div>            </a>
          </ImageListItem>
        ))}
      </ImageList>
  );
}
