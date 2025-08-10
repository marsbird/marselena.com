import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();
const key = process.env.HARDCOVER_APIKEY;
const app = Fastify();

app.get("/api/hardcover/currentlyReading", async () => {
  const username = "marselena";
  const query = `{
    user_books(
      where: {user: {username: {_eq: "${username}"}}, status_id: {_eq: 2}},
      order_by: {updated_at: desc},
      limit: 5
    ) {
      rating
      updated_at
      book {
        id
        title
        image {
          url
        }
        slug
      }
    }
  }`;

  const response = await fetch("https://api.hardcover.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
});

app.get("/api/hardcover/lastRead", async () => {
  const username = "marselena";
  const query = `{
    user_books(
			where: {user: {username: {_eq: "${username}"}}, status_id: {_eq: 3}},
			order_by: {last_read_date: desc_nulls_last},
			limit: 4
		) {
			rating
			updated_at
			last_read_date
			book {
				id
				title
				image {
					url
				}
				slug
			}
		}
	}`;

  const response = await fetch("https://api.hardcover.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
});

app.listen({ port: 3000 });
