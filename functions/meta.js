export async function onRequest() {
  const imageUrl = "et3g4eg.jpg";

  const response = await fetch(imageUrl);

  if (!response.ok) {
    return new Response("Not found", { status: 404 });
  }

  const data = await response.arrayBuffer();

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": response.headers.get("content-type") || "image/jpeg",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
