interface HardcoverUserBook {
  book: {
    id: number;
    image: {
      url: string;
    };
    slug: string;
    title: string;
  };
  last_read_date: string;
  rating: number;
  updated_at: string;
}

export default async function getBooks(
  hardcoverElement: Element,
  endpoint: "currentlyReading" | "lastRead",
) {
  const response = await fetch(`/api/hardcover/${endpoint}`);
  const data = await response.json();

  data.data.user_books.forEach((book: HardcoverUserBook) => {
    const imgElement = document.createElement("img");
    imgElement.src = book.book.image.url;
    imgElement.classList = "w-24 rounded hover:opacity-90";

    const linkElement = document.createElement("a");
    linkElement.href = `https://hardcover.app/books/${book.book.slug}`;

    hardcoverElement.appendChild(linkElement);
    linkElement.appendChild(imgElement);
  });
}
