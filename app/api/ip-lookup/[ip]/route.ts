export async function GET(
  request: Request,
  { params }: { params: { ip: string } }
) {
  const ip = params.ip;

  const fetch_url = `${process.env.API_URL}${ip}`;
  const response = await fetch(fetch_url);
  const json = await response.json();

  return Response.json(json);
}
