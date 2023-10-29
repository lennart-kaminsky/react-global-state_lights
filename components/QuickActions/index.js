import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onTurnOnAll,
  onTurnOffAll,
  countTurnedOn,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={countTurnedOn <= 0}
        onClick={onTurnOffAll}
      >
        Turn all lights off
      </Button>
      <Button type="button" disabled={countTurnedOn > 7} onClick={onTurnOnAll}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
