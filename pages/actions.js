import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleTurnOnAll,
  handleTurnOffAll,
  countTurnedOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnOnAll={handleTurnOnAll}
        onTurnOffAll={handleTurnOffAll}
        countTurnedOn={countTurnedOn}
      />
    </>
  );
}
