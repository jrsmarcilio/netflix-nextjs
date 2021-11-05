import Image from 'next/image';
import Carousel from 'react-elastic-carousel';

import { Typography } from "@material-ui/core";
import { IMovie } from "@/interface";
import { CarouselItemContent, ItemMovie } from "./styles";

import { breakPoints } from '@/utils/mainLists';

export default function CarouselItem(
  { movies, title }: { movies: IMovie[], title: string }
) {
  return (
    <CarouselItemContent>
      <Typography variant="h2" component="h1">{title}</Typography>
      <Carousel
        isRTL={false}
        focusOnSelect={true}
        itemsToShow={3}
        breakPoints={breakPoints}
      >
        {movies && movies.map((movie: IMovie) => (
          <ItemMovie>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`poster of ${movie?.title}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ItemMovie>
        ))}
      </Carousel>
    </CarouselItemContent>
  );
}
