import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount, isLoading }) {
  const numBookings = bookings?.length || 0;
  const sales =
    bookings?.reduce((acc, cur) => acc + (cur.totalPrice || 0), 0) || 0;
  const checkins = confirmedStays?.length || 0;
  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + (cur.numNights || 0), 0) /
      ((numDays || 1) * (cabinCount || 1)) || 0;

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
        isLoading={isLoading}
      />
      <Stat
        title="Sales"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
        color="green"
        isLoading={isLoading}
      />
      <Stat
        title="Check ins"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        isLoading={isLoading}
      />
      <Stat
        title="Occupancy rate"
        value={Math.round(occupation * 100) + "%"}
        icon={<HiOutlineChartBar />}
        color="yellow"
        isLoading={isLoading}
      />
    </>
  );
}

export default Stats;
