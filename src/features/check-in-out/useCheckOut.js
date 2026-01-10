import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkOut, isPending: isCheckingOut } = useMutation({
    mutationFn: (id) => {
      return updateBooking(id, {
        status: "checked-out",
      });
    },
    onSuccess: (data) => {
      toast.success(`Booking number #${data?.id} successfully checked out.`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was an error while checking out.");
    },
  });

  return { checkOut, isCheckingOut };
}
