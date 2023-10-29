import Link from "../components/Link";

export default function HomePage({ countTurnedOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>{countTurnedOn} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
