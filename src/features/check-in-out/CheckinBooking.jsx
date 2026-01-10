import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import useCheckIn from "./useCheckIn";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  const { checkIn, isCheckingIn } = useCheckIn();

  const moveBack = useMoveBack();
  const { booking, isPending } = useBooking();
  const { settings, isPending: isLoadingSettings } = useSettings();
  useEffect(() => {
    setIsConfirmed(booking?.isPaid);
    setAddBreakfast(booking?.hasBreakfast);
  }, [booking]);

  if (isPending || isLoadingSettings) return <Spinner />;

  const { id: bookingId, guests, totalPrice, numGuests, numNights } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  const handleCheckIn = () => {
    if (!isConfirmed) return;

    if (addBreakfast) {
      checkIn({
        id: booking.id,
        breakfast: {
          hasBreakfast: addBreakfast,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkIn({
        id: booking.id,
        breakfast: {},
      });
    }
  };

  const handleBreakfastChange = () => {
    setAddBreakfast((add) => !add);
    setIsConfirmed(false);
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={addBreakfast}
          onChange={handleBreakfastChange}
          disabled={addBreakfast}
          id="breakfast"
        >
          Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
        </Checkbox>
      </Box>

      <Box>
        <Checkbox
          checked={isConfirmed}
          disabled={isConfirmed}
          onChange={() => setIsConfirmed((prev) => !prev)}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {addBreakfast
            ? `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`
            : formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckIn} disabled={!isConfirmed || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
