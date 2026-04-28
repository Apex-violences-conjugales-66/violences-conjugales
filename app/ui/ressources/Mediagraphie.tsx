import { Book, Movie } from "@/app/lib/definitions";
import Divider from "@/app/ui/Divider";
import SectionComponent from "@/app/ui/SectionComponent";

export default function Mediagraphie({
  books,
  movies,
}: {
  books: Book[];
  movies: Movie[];
}) {
  return (
    <SectionComponent bgColor="orange">
      <div className="container py-14 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
            <h2>Littérature</h2>
            <Divider horizontal />
            <div className="space-y-4">
              {books.map((book, index) => (
                <p key={book.id}>
                  {book.author}    <b>{book.title}</b>    {book.description}
                </p>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-4 md:gap-8 md:w-1/2">
            <h2>Films | Courts-Métrages</h2>
            <Divider horizontal />
            <div className="space-y-4">
              {movies.map((movie, index) => (
                <p key={movie.id}>
                  <b>{movie.title}</b> {movie.description}
                  {movie.movieUrl && (
                    <>
                      <br />
                      <a
                        className="underline"
                        target="_blank"
                        href={movie.movieUrl}
                        rel="noopener noreferrer"
                      >
                        {movie.movieUrl}
                      </a>
                    </>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
}
