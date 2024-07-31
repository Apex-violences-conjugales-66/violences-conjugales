import { FunctionComponent } from "react";
import Divider from "../ui/Divider";
import Title from "../ui/Title";

export interface Movie {
  title: string;
  description: string;
  href?: string;
  siteName?: string;
}

export interface Book {
  author: string;
  title: string;
  description: string;
}

interface MediagraphieProps {
  books: Book[];
  movies: Movie[];
}
const Mediagraphie: FunctionComponent<MediagraphieProps> = ({
  books,
  movies,
}) => {
  return (
    <div className="Mediagraphie my-40">
      <div className="container flex flex-col gap-20 items-center">
        <Title>Médiagraphie</Title>
        <div className="flex gap-10">
          <div className="flex flex-col gap-16 items-center  w-1/2">
            <h3 className="underline underline-offset-4">Littérature</h3>
            <div className="space-y-4">
              {books.map((book, index) => (
                <p key={"book" + index}>
                  {book.author}    <b>{book.title}</b>    {book.description}
                </p>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-16 items-center w-1/2">
            <h3>
              <span className="underline underline-offset-4">Films</span> | 
              <span className="underline underline-offset-4">
                Courts-Métrages
              </span>
            </h3>
            <div className="space-y-4">
              {movies.map((movie, index) => (
                <p key={"movie" + index}>
                  <b>{movie.title}</b>    {movie.description}   
                  {movie.href && (
                    <a
                      className="underline"
                      target="_blank"
                      href={movie.href}
                      rel="noopener noreferrer"
                    >
                      {movie.siteName}
                    </a>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediagraphie;
