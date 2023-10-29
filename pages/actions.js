import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  handleTurnOnAll,
  handleTurnOffAll,
  countTurnedOn,
  lights,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onTurnOnAll={handleTurnOnAll}
        onTurnOffAll={handleTurnOffAll}
        countTurnedOn={countTurnedOn}
        lights={lights}
      />
    </>
  );
}
