import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: updateSettings } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings Successfully Updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateSettings };
}
