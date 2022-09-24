import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const images = [
  {
    link: "https://www.instagram.com/p/CisouOmLpGq/",
    src: "posts/post1.jpg"
  },
  {
    link: "https://www.instagram.com/p/CikJZIKq5PP/",
    src: "posts/post2.jpg"
  },
  {
    link: "https://www.instagram.com/p/CifLMDsv2vQ/",
    src: "posts/post3.jpg"
  },
  {
    link: "https://www.instagram.com/p/CiL3EeDtjby/",
    src: "posts/post4.jpg"
  },
  {
    link: "https://www.instagram.com/p/ChpHLkvO-zX/",
    src: "posts/post5.jpg"
  },
  {
    link: "https://www.instagram.com/p/Chpirjll0GJ/",
    src: "posts/post6.jpg"
  },
  {
    link: "https://www.instagram.com/p/ChFDwMAji1C/",
    src: "posts/post7.jpg"
  },
  {
    link: "https://www.instagram.com/p/ChZmM9Zj4Jj/",
    src: "posts/post9.jpg"
  },
  {
    link: "https://www.instagram.com/p/ChZfBzVsbRR/",
    src: "posts/post10.jpg"
  },
  {
    link: "https://www.instagram.com/p/Chh31pTMtQH/",
    src: "posts/post11.jpg"
  },
  {
    link: "https://www.instagram.com/p/ChkmxUesD8k/",
    src: "posts/post12.jpg"
  },
  {
    link: "https://www.instagram.com/p/CfWKhZcMeKp/",
    src: "posts/post13.jpg"
  },
  {
    link: "https://www.instagram.com/p/CiHysyUMiHS/",
    src: "posts/post14.jpg"
  },
  {
    link: "https://www.instagram.com/p/CiKIW8oDs-P/",
    src: "posts/post15.jpg"
  },
  {
    link: "https://www.instagram.com/p/Cgzvhr6tj71/",
    src: "posts/post16.jpg"
  },
  {
    link: "https://www.instagram.com/p/CflpUc3ojgU/",
    src: "posts/post17.jpg"
  },
  {
    link: "https://www.instagram.com/p/CiZ48RdsYur/",
    src: "posts/post18.jpg"
  },
  {
    link: "https://www.instagram.com/p/CgcDAjcMSkw/",
    src: "posts/post19.jpg"
  },
  {
    link: "https://www.instagram.com/p/CguQB80u1sv/",
    src: "posts/post20.jpg"
  },
  {
    link: "https://www.instagram.com/p/CfeKMiKgaDg/",
    src: "posts/post21.jpg"
  },
  {
    link: "https://www.instagram.com/p/Ccao0f2OFo_/",
    src: "posts/post22.jpg"
  },
  {
    link: "https://www.instagram.com/p/Ci2NcmSDznA/",
    src: "posts/post23.jpg"
  }
];

export default function Gallery() {
  const theme = useTheme();

  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ImageList variant="masonry" cols={matchDownMd ? 1 : 4} gap={15}>
      {images.map((item) => (
        <ImageListItem key={item.src}>
          <a href={item.link} target="_blank" rel="noreferrer">
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
