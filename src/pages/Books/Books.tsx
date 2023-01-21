import { Suspense, useState } from "react";
import RatingStarPreview from "../../components/RatingStarPreview";
import { GoogleBook } from "../../interfaces/GoogleBooks";
import BooksLoading from "./BooksLoading";
import {
  Await,
  defer,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import AddToList from "../../components/AddToList";

const getBookData = async (id: string) =>
  (await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)).json();

export async function loader({ params }: LoaderFunctionArgs) {
  if (typeof params.id !== "undefined")
    return defer({ bookData: getBookData(params?.id) as Promise<GoogleBook> });
}

const Page = () => {
  const data = useLoaderData() as { bookData: GoogleBook };
  const [isReadMore, setIsReadMore] = useState(false);

  const getBookDescription = (description: string) => {
    return isReadMore ? description : description.substring(0, 500) + "...";
  };
  const toggleReadMore = () => setIsReadMore((prev) => !prev);

  return (
    <Suspense fallback={<BooksLoading />}>
      <Await resolve={data.bookData}>
        {(bookData: GoogleBook) => (
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="h-screen px-5 py-8 sm:py-10 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
                <div className="flex flex-col gap-3 items-center">
                  <div className="flex justify-center">
                    <img
                      src={bookData?.volumeInfo?.imageLinks?.thumbnail}
                      alt={"test"}
                      width={500}
                      height={500}
                      loading="lazy"
                      className="sm:pt-9 max-w-[10rem] md:max-w-[12rem] object-cover object-center rounded aspect-auto"
                    />
                  </div>
                  <AddToList />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {bookData?.volumeInfo?.title}
                  </h1>
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    {bookData?.volumeInfo?.subtitle}
                  </h2>
                  <div className="flex mb-4">
                    <span className="flex items-center justify-center">
                      <RatingStarPreview />
                      <span className="text-gray-600 ml-3">No Ratings</span>
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: getBookDescription(
                        bookData?.volumeInfo?.description
                      ),
                    }}
                  ></p>
                  <button
                    className="text-sm text-gray-500"
                    onClick={toggleReadMore}
                  >
                    {isReadMore ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </Await>
    </Suspense>
  );
};

export default Page;
