import { FunctionComponent } from "react";
import Divider from "../ui/Divider";
import Title from "../ui/Title";

export interface Movie {
  title: string;
  description: string;
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
    <div className="Mediagraphie container flex flex-col gap-10 items-center">
      <Title>Médiagraphie</Title>
      <div className="flex gap-10">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="underline">Littérature</h3>
          <div className="space-y-2">
            {books.map((book, index) => (
              <p key={book.author}>
                {book.author}, <b>{book.title}</b>, {book.description}
              </p>
            ))}
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-6 items-center">
          <h3 className="underline">Movies</h3>
          <div className="space-y-2">
            {movies.map((movie, index) => (
              <p key={movie.title}>
                <b>{movie.title}</b>, {movie.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediagraphie;
